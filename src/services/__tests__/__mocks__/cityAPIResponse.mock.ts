import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityAPIResponse: CityAPIResponse = {
  id: "1",
  name: "São Paulo",
  coord: {
    lat: 123,
    lon: 123,
  },
  sys: {
    country: "BR",
  },
};