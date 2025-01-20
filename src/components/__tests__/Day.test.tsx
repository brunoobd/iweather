import { render } from "@testing-library/react-native";
import { Day } from "@components/Day";
import { day } from "@src/__tests__/mocks/day.mock";

describe("Component: Day", () => {
  it("should render day", () => {
    const { getByText } = render(<Day data={day} />);

    expect(getByText("18/07")).toBeTruthy();
  });
});
