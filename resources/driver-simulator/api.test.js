process.argv[2] = "localhost:4567";

jest.mock("http");

const api = require("./api.js");
const http = require("http");

let req;
let request;

const vehicleId = "123";

beforeEach(() => {
  req = { write: jest.fn(), end: jest.fn(), on: jest.fn() };
  request = jest.fn(() => req);
  http.request = request;
});

describe("registerVehicle", () => {
  const data = JSON.stringify({ id: vehicleId });

  beforeEach(() => api.registerVehicle(vehicleId));

  it("should make a POST request to /vehicles", () => {
    expect(request).toBeCalledWith(
      {
        hostname: "localhost",
        port: "4567",
        path: `/vehicles`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data)
        }
      },
      expect.any(Function)
    );

    expect(req.end).toBeCalled();
  });

  it("should write the vehicle id in the request body", () => {
    expect(req.write).toBeCalledWith(data);
  });
});

describe("updateVehicleLocation", () => {
  const at = "2017-09-27T07:35:55.291Z";
  const lat = 52.5128;
  const lng = 13.3209;
  const RealDate = Date;
  const data = JSON.stringify({ lat, lng, at });

  function mockDate(isoDate) {
    global.Date = class extends RealDate {
      constructor() {
        return new RealDate(isoDate);
      }
    };
  }

  beforeEach(() => {
    mockDate(at);
    api.updateVehicleLocation(vehicleId, lat, lng);
  });

  afterEach(() => (global.Date = RealDate));

  it("should make a POST request to /vehicles/vehicleId/locations", () => {
    expect(request).toBeCalledWith(
      {
        hostname: "localhost",
        port: "4567",
        path: `/vehicles/${vehicleId}/locations`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data)
        }
      },
      expect.any(Function)
    );

    expect(req.end).toBeCalled();
  });

  it("should write the vehicle location in the request body", () => {
    expect(req.write).toBeCalledWith(data);
  });
});

describe("deregisterVehicle", () => {
  const data = JSON.stringify(null);

  beforeEach(() => api.deregisterVehicle(vehicleId));

  it("should make a DELETE request to /vehicles/vehicleId", () => {
    expect(request).toBeCalledWith(
      {
        hostname: "localhost",
        port: "4567",
        path: `/vehicles/${vehicleId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data)
        }
      },
      expect.any(Function)
    );

    expect(req.end).toBeCalled();
  });

  it("should not write in the request body", () => {
    expect(req.write).not.toBeCalled();
  });
});
