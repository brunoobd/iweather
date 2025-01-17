import { render } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";
import { days } from "@src/__mocks__/day.mock";

describe("Component: NextDays", () => {
  it("should render days", () => {
    const { getByText } = render(<NextDays data={days} />);

    expect(getByText("19/07")).toBeTruthy();
  });
});
