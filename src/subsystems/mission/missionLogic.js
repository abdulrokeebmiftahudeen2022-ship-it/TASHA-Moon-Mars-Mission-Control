
import { missionEvents } from "./missionData";
import { updateResources } from "../resources/resourceLogic";

export function getMissionEvents(environment) {
  return missionEvents[environment] || [];
}

export function getMissionEvent(environment, eventIndex) {
  const events = getMissionEvents(environment);
  return events[eventIndex] || null;
}

export function makeDecision(event, optionId, currentResources) {
  if (!event) return null;

  const selectedOption = event.options.find(
    (option) => option.id === optionId
  );

  if (!selectedOption) return null;

  const updatedResources = updateResources(
    currentResources,
    selectedOption.effects
  );

  return {
    resources: updatedResources,
    decision: selectedOption.label,
    explanation: selectedOption.explanation,
    effects: selectedOption.effects,
  };
}
