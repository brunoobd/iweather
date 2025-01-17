import { CityProps } from "@services/getCityByNameService";

export const city: CityProps = {
  id: "1",
  name: "São Paulo",
  latitude: 123,
  longitude: 123,
};

export const cities: Array<CityProps> = [
  city,
  {
    id: "2",
    name: "Rio de Janeiro",
    latitude: 456,
    longitude: 654,
  },
];
