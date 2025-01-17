import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@services/__tests__/__mocks__/weatherAPIResponse.mock";
import { getWeatherByCityService } from "@services/getWeatherByCityService";

describe("Service: getWeatherByCityService", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 123,
    });

    expect(response).toBeGreaterThan(0);
  });
});
