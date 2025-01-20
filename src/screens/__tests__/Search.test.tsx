import { Search } from "@screens/Search";
import { mockCityAPIResponse } from "@services/__tests__/__mocks__/cityAPIResponse.mock";
import { api } from "@services/api";
import { fireEvent, render, waitFor } from "@src/__tests__/utils/customRender";

describe("Screen: Search", () => {
  it("should show city option", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    const { getByTestId, findByText } = render(<Search />);
    const searchInput = getByTestId("search-input");

    fireEvent.changeText(searchInput, "São Paulo");

    const option = await waitFor(() => findByText(/são paulo/i));

    expect(option).toBeTruthy();
  });
});
