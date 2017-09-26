const http = require("http");
const vehicles = require("./vehicles.json");
let stepIndexes = {};

const API_HOST = process.argv[2].split(":")[0];
const API_PORT = process.argv[2].split(":")[1];

vehicles.forEach(vehicle => {
  registerVehicle(vehicle.id);

  setInterval(() => {
    let stepIndex =
      stepIndexes[vehicle.id] === undefined ? 0 : stepIndexes[vehicle.id] + 1;
    stepIndexes[vehicle.id] = stepIndex;

    if (stepIndex < vehicle.steps.length) {
      updateVehicleLocation(vehicle.id, vehicle.steps[stepIndex]);
    } else if (stepIndex === vehicle.steps.length) {
      deregisterVehicle(vehicle.id);
    }
  }, 3000);
});

function updateVehicleLocation(vehicleId, location) {
  request(
    `/vehicles/${vehicleId}/locations`,
    "POST",
    { lat: location[1], lat: location[0], at: new Date().toISOString() },
    res => {
      console.log(`Vehicle ${vehicleId.split("-")[0]} moved to: ${location}`);
    }
  );
}

function registerVehicle(vehicleId) {
  request(`/vehicles`, "POST", { id: vehicleId }, res => {
    console.log(`New vehicle registered: ${vehicleId}`);
  });
}

function deregisterVehicle(vehicleId) {
  request(`/vehicles/${vehicleId}`, "DELETE", null, res => {
    console.log(`Vehicle de-registered: ${vehicleId}`);
  });
}

function request(path, method, body, cb) {
  const req = http.request(
    { hostname: API_HOST, port: API_PORT, path: path, method: method },
    cb
  );

  req.write(JSON.stringify(body));
  req.end();
}
