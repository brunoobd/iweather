import {
  View,
  TextInput,
  TextInputProps,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { theme } from "@styles/theme";

type Props = TextInputProps & {
  isLoading?: boolean;
};

export const Input = ({ isLoading = false, ...rest }: Props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors.gray_400}
      {...rest}
    />

    {isLoading && (
      <ActivityIndicator
        color={theme.colors.blue_light}
        testID="activity-indicator"
      />
    )}
  </View>
);
