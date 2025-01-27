import { api } from "@services/api";
import { Dashboard } from "@screens/Dashboard";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockWeatherAPIResponse } from "@services/__tests__/__mocks__/weatherAPIResponse.mock";
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@src/__tests__/utils/customRender";
import { mockCityAPIResponse } from "@services/__tests__/__mocks__/cityAPIResponse.mock";
import { cities } from "@src/__tests__/mocks/city.mock";

describe("Screen: Dashboard", () => {
  beforeAll(async () => {
    const newCity = cities[1];

    await saveStorageCity(newCity);
  });

  it("should show city weather", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const { findByText } = render(<Dashboard />);
    const cityName = await findByText(/rio de janeiro/i);

    expect(cityName).toBeTruthy();
  });

  it("should show another selected weather city", async () => {
    jest
      .spyOn(api, "get")
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

    const { queryByTestId, getByTestId, getByText } = render(<Dashboard />);
    const cityName = "São Paulo";

    await waitForElementToBeRemoved(() => queryByTestId("loading"));

    await waitFor(() => {
      const search = getByTestId("search-input");
      fireEvent.changeText(search, cityName);
    });

    await waitFor(() => {
      fireEvent.press(getByText(cityName, { exact: false }));
    });

    await waitForElementToBeRemoved(() => queryByTestId("loading"));

    expect(getByText(cityName, { exact: false })).toBeTruthy();
  });
});
