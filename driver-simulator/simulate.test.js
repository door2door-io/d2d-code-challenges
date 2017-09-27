jest.mock("./api.js");
jest.mock("./vehicles.json");
jest.useFakeTimers();

const api = require("./api.js");
const vehicles = require("./vehicles.json");

beforeEach(() => require("./simulate.js"));

it("should register all the vehicles listed in the JSON file", () => {
  vehicles.forEach(v => expect(api.registerVehicle).toBeCalledWith(v.id));
});

it("should update all the vehicles locations every 3s", () => {
  jest.runTimersToTime(3000);

  vehicles.forEach(v =>
    expect(api.updateVehicleLocation).toBeCalledWith(
      v.id,
      v.steps[0][0],
      v.steps[0][1]
    )
  );

  jest.runTimersToTime(3000);

  vehicles.forEach(v =>
    expect(api.updateVehicleLocation).toBeCalledWith(
      v.id,
      v.steps[1][0],
      v.steps[1][1]
    )
  );
});

it("should de-register all the vehicles when their simulation is over", () => {
  const highestNumberOfSteps = vehicles
    .map(v => v.steps.length)
    .reduce((a, b) => Math.max(a, b));

  jest.runTimersToTime(3000 * highestNumberOfSteps);

  vehicles.forEach(v => expect(api.deregisterVehicle).toBeCalledWith(v.id));
});
