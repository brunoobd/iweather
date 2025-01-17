import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { city as newCity } from "@src/__mocks__/city.mock";

describe("Libs/AsyncStorage: cityStorage", () => {
  it("should return null when don't have a city storaged", async () => {
    const storegeCity = await getStorageCity();

    expect(storegeCity).toBeNull();
  });

  it("should return city storaged", async () => {
    await saveStorageCity(newCity);

    const storegeCity = await getStorageCity();

    expect(storegeCity).toEqual(newCity);
  });

  it("should remove city storaged", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const storegeCity = await getStorageCity();

    expect(storegeCity).toBeNull();
  });
});
