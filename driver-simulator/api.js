const http = require("http");

const API_HOST = process.argv[2].split(":")[0];
const API_PORT = process.argv[2].split(":")[1];

function updateVehicleLocation(vehicleId, lat, lng) {
  request(
    `/vehicles/${vehicleId}/locations`,
    "POST",
    { lat, lng, at: new Date().toISOString() },
    res => {
      console.log(
        `Vehicle ${vehicleId.split("-")[0]} moved to: ${lat}, ${lng}`
      );
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

  if (body) {
    req.write(JSON.stringify(body));
  }

  req.end();
}

module.exports = {
  updateVehicleLocation,
  registerVehicle,
  deregisterVehicle
};
