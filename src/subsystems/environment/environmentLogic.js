
import { environments } from "./environmentData";

export function getEnvironment(mission) {
  return environments[mission] || null;
}

export function getEnvironmentalHazards(mission) {
  const environment = getEnvironment(mission);
  return environment ? environment.hazards : [];
}

export function getTemperature(mission) {
  const environment = getEnvironment(mission);
  return environment ? environment.temperature : null;
}
