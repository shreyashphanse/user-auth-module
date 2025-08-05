import {
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
  View,
} from "react-native";
import { Controller } from "react-hook-form";

type CustomInputProps = {
  control: any;
  name: string;
} & TextInputProps;

export default function CustomInput({
  control,
  name,
  ...props
}: CustomInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      // rules={{ required: name + " is required" }}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          <TextInput
            {...props}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={[styles.input, props.style]}
          />
          {/* jumps the elements when error appears */}
          {/* {error && <Text style={styles.error}>{error.message}</Text>} */}
          {/* does not jumps the elements when error appears */}
          <Text style={styles.error}>{error?.message}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    borderColor: "#ccc",
  },
  error: {
    color: "crimson",
    paddingLeft: 20,
  },
});
