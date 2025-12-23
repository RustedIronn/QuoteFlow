// src/data/resolveLiftData.js
import { LIFT_MODELS } from "./liftModels";

export function resolveLiftData(modelId, formData) {
  const model = LIFT_MODELS[modelId];
  if (!model) return formData;

  return {
    // 🔒 model locked
    ...model,

    // ✏️ user editable
    capacity: formData.capacity,
    travelHeight: formData.travelHeight,
    numFloors: formData.numFloors,
    numLandings: formData.numLandings,
    shaftMeasurement: formData.shaftMeasurement,
    carSize: formData.carSize,
    cabinOpening: formData.cabinOpening,
    cabinCutting: formData.cabinCutting
  };
}
