
import { learningContent } from "./learningData";

export function getLearningContent(environment, eventId) {
  return learningContent[environment]?.[eventId] || null;
}

export function getAllLearningContent(environment) {
  return learningContent[environment] || {};
}

export function getLearningTopics(environment) {
  return Object.values(getAllLearningContent(environment)).map(
    (content) => content.topic
  );
}
