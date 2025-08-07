import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/Custombutton";
// react-hok-form
import { useForm } from "react-hook-form";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";

// zod var
const signUpSchema = z.object({
  email: z
    .string({ message: "email is required" })
    .nonempty("the email cannot be empty")
    // just a advanced version for email validation
    // .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "invalid email"),
    .email("invalid email"),

  password: z
    .string("password is required")
    .min(8, "password should be minimum 8 characters")
    .nonempty("the password cannot be empty"),
  age: z
    .number("the age is invalid")
    .min(2, "more than 99")
    .nonnegative("less than 0"),
});

type signUpFields = z.infer<typeof signUpSchema>;

export default function SignUpScreen() {
  // onPressed function
  const onSign_up = (data: signUpFields) => {
    console.log("Signed-up", data.email, data.password);
  };
  // controller
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFields>({
    // defaultValues: {
    //   email: "abc@gmail.com",
    //   password: "",
    // },
    resolver: zodResolver(signUpSchema),
  });
  console.log(errors);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* statusbar */}
      <Text style={styles.title}>Create an account</Text>
      <View style={styles.form}>
        <CustomInput
          control={control}
          name="email"
          placeholder="Email"
          autoFocus
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
        />

        <CustomInput
          control={control}
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          multiline={false}
          keyboardType="default"
        />

        {/* <CustomInput
          control={control}
          name="age"
          placeholder="Age"
          keyboardType="number-pad"
        /> */}
      </View>
      <CustomButton text="Sign-Up" onPress={handleSubmit(onSign_up)} />
      <Link href={"/sign-in"} style={styles.goto1}>
        Already have an account,Sign-in
      </Link>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    padding: 20,
    // paddingTop: 80,
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 30,
    color: "darkblue",
    fontWeight: "600",
    alignItems: "center",
  },
  form: {
    gap: 5,
  },
  goto1: {
    fontSize: 15,
    fontWeight: 500,
    color: "#4353fd",
    height: 30,
  },
});
