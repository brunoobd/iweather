import { getNextDays } from "@utils/getNextDays";

it("Should be return the next five days", () => {
  const days = getNextDays();

  expect(days.length).toBe(5);
});
