import { useTask } from "@lib";
import { ignite } from "@body";
import { goStart } from "./navigation";

export function useSolveCase() {
  return useTask(async (dependencies) => {
    await ignite(dependencies);
    await goStart(dependencies);
  });
}
