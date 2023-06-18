import { v4 as uuid } from "uuid";

export class Project {
  _id;
  _name;
  _archivedAt = null;

  constructor({ id, name, archivedAt }) {
    this._id = id || uuid();
    this._name = name;

    if (archivedAt) {
      this.archive(archivedAt);
    }
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get archived() {
    return !!this._archivedAt;
  }

  archive(archivedAt = new Date()) {
    this._archivedAt = archivedAt;
  }
}
