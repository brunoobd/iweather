import { act, render, screen, waitFor } from "src/__tests__/utils/customRender";
import { Routes } from "@routes/index";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@services/__tests__/__mocks__/weatherAPIResponse.mock";
import { city } from "@src/__tests__/__mocks__/city.mock";

describe("Routes", () => {
  it("should render Search screen when not city selected", async () => {
    const { findByText } = render(<Routes />);
    const title = await waitFor(() => findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });

  it("should render Dashboard screen when has city selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    await saveStorageCity(city);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(city.name);

    expect(title).toBeTruthy();
  });
});
