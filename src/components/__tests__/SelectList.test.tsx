import { SelectList } from "@components/SelectList";
import { cities } from "@src/__tests__/__mocks__/city.mock";
import { fireEvent, render } from "@testing-library/react-native";

describe("Component: SelectList", () => {
  it("should return the details of the selected city", () => {
    const onPress = jest.fn();
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
