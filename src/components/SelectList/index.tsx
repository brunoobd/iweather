import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Input } from "@components/Input";
import { CityProps } from "@services/getCityByNameService";

type Props = {
  isLoading?: boolean;
  placeholder?: string;
  value?: string;
  data: CityProps[];
  onChange: (value: string) => void;
  onPress: (value: CityProps) => void;
};

export const SelectList = ({
  isLoading,
  placeholder,
  value,
  data,
  onChange,
  onPress,
}: Props) => (
  <View style={styles.container}>
    <Input
      placeholder={placeholder}
      onChangeText={onChange}
      isLoading={isLoading}
      value={value}
    />

    <View style={styles.options} testID="options">
      {data.map((item) => (
        <TouchableOpacity
          key={item.latitude}
          activeOpacity={0.7}
          onPress={() => onPress(item)}
        >
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);
