import { moveManifests } from "./move";

export class Artifacts {
  transfer({ id, parentId = null }) {
    if (!id) throw new Error("artifact transfer requires a id to perform");
    const order = this.nextOrder(parentId);
    const payload = { id, parentId, order };

    return this.mutator.put(payload);
  }

  hoist({ id, siblingId }) {
    const { parentId, order } = this.findById(siblingId);
    return this.move({ id, parentId, order });
  }

  lower({ id, siblingId }) {
    const { parentId, order } = this.findById(siblingId);
    return this.move({ id, parentId, order: order + 1 });
  }

  move({ id, parentId, order }) {
    const manifests = moveManifests({
      id,
      parentId,
      list: this.list(),
      order,
    });

    return this.mutator.do(manifests);
  }
}
