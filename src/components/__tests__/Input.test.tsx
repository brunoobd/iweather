import { Input } from "@components/Input";
import { render } from "@testing-library/react-native";

describe("Component: Input", () => {
  it("should render without the ActivityIndicator when not loading", () => {
    const { queryByTestId } = render(<Input />);
    const activityIndicator = queryByTestId("activity-indicator");

    expect(activityIndicator).toBeNull();
  });

  it("should render with the ActivityIndicator when loading", () => {
    const { getByTestId } = render(<Input isLoading />);
    const activityIndicator = getByTestId("activity-indicator");

    expect(activityIndicator).toBeTruthy();
  });
});
