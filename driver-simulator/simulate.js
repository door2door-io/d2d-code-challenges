const api = require("./api.js");
const vehicles = require("./vehicles.json");
let stepIndexes = {};

vehicles.forEach(vehicle => {
  api.registerVehicle(vehicle.id);

  setInterval(() => {
    let stepIndex =
      stepIndexes[vehicle.id] === undefined ? 0 : stepIndexes[vehicle.id] + 1;
    stepIndexes[vehicle.id] = stepIndex;

    if (stepIndex < vehicle.steps.length) {
      const location = vehicle.steps[stepIndex];
      api.updateVehicleLocation(vehicle.id, location[0], location[1]);
    } else if (stepIndex === vehicle.steps.length) {
      api.deregisterVehicle(vehicle.id);
    }
  }, 3000);
});
