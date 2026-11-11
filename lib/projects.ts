import type { IconName } from "@/components/ui/Icon";
import type { ProjectStatus } from "@/types";

/** ícono de cada estado de proyecto (acompaña al texto, nunca lo reemplaza) */
export const statusIcon: Record<ProjectStatus, IconName> = {
  live: "flag",
  completed: "check",
  "in-progress": "clock",
};
