
import { initialResources, resourceLimits } from "./resourceData";

export function updateResources(current, changes) {
  const updated = { ...current };

  Object.keys(changes).forEach((resource) => {
    if (resource in updated) {
      updated[resource] = Math.max(
        0,
        Math.min(100, updated[resource] + changes[resource])
      );
    }
  });

  return updated;
}

export function getResourceStatus(resource, value) {
  const limits = resourceLimits[resource];

  if (!limits) return "unknown";

  if (value <= limits.critical) return "critical";
  if (value <= limits.warning) return "warning";

  return "normal";
}

export function getResourceAlerts(resources) {
  return Object.entries(resources)
    .filter(([resource, value]) =>
      getResourceStatus(resource, value) !== "normal"
    )
    .map(([resource, value]) => ({
      resource,
      value,
      status: getResourceStatus(resource, value),
    }));
}

export function resetResources() {
  return { ...initialResources };
}
