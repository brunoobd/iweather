import { DayProps } from "@components/Day";
import clearDay from "@assets/clear_day.svg";

export const day: DayProps = {
  day: "18/07",
  min: "30°c",
  max: "34°c",
  icon: clearDay,
  weather: "Céu limpo",
};

export const days: Array<DayProps> = [
  day,
  {
    day: "19/07",
    min: "35°c",
    max: "39°c",
    icon: clearDay,
    weather: "Céu limpo",
  },
  {
    day: "20/07",
    min: "39°c",
    max: "37°c",
    icon: clearDay,
    weather: "Céu limpo",
  },
  {
    day: "21/07",
    min: "21°c",
    max: "30°c",
    icon: clearDay,
    weather: "Chuva fraca",
  },
  {
    day: "22/07",
    min: "15°c",
    max: "20°c",
    icon: clearDay,
    weather: "Nublado",
  },
];
