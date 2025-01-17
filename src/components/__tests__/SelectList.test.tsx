import { SelectList } from "@components/SelectList";
import { CityProps } from "@services/getCityByNameService";
import { fireEvent, render } from "@testing-library/react-native";
import { View } from "react-native";

describe("Component: SelectList", () => {
  it("should return the details of the selected city", () => {
    const onPress = jest.fn();
    const cities: Array<CityProps> = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 321 },
      { id: "2", name: "São Paulo", latitude: 456, longitude: 654 },
    ];
    const { getByText } = render(
      <SelectList data={cities} onChange={() => {}} onPress={onPress} />
    );
    const selectedCity = getByText(cities[0].name);

    fireEvent.press(selectedCity);
    expect(onPress).toHaveBeenCalledWith(cities[0]);
  });

  it("should not render the list when it is empty", () => {
    const { getByTestId } = render(
      <SelectList data={[]} onChange={() => {}} onPress={() => {}} />
    );
    const options = getByTestId("options");

    expect(options).toBeEmptyElement();
  });
});
