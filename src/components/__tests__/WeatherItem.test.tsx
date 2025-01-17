import { render } from "@testing-library/react-native";
import { WeatherItem } from "@components/WeatherItem";
import dropIcon from "@assets/drop.svg";

describe("Component: WeatherItem", () => {
  it("should render show title and value", () => {
    const { getByText } = render(
      <WeatherItem icon={dropIcon} title="Umidade do ar" value="81%" />
    );
    const title = getByText("Umidade do ar");
    const value = getByText("81%");

    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
