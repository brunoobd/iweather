import { Text, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { styles } from "./styles";

export type DayProps = {
  icon: React.FC<SvgProps>;
  day: string;
  weather: string;
  max: string;
  min: string;
};

type Props = {
  data: DayProps;
};

export const Day = ({ data }: Props) => {
  const { icon, day, max, min } = data;
  const Icon = icon;

  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day}</Text>

      <Icon width={56} height={56} />

      <Text style={styles.max}>{max}</Text>

      <Text style={styles.min}>{min}</Text>
    </View>
  );
};
