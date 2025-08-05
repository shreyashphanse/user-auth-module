import { StyleSheet, Pressable, PressableProps, Text } from "react-native";

type CustomButtonProps = {
  //extra properties
  text: string;
} & PressableProps;

export default function CustomButton({
  text,
  ...pressableprops
}: CustomButtonProps) {
  return (
    <Pressable {...pressableprops} style={[styles.button]}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "darkgrey",
  },
  buttonText: {
    color: "darkblue",
    fontSize: 16,
    fontWeight: "600",
  },
});
