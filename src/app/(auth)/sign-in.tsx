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
import { useAuth } from "@/providers/AuthProvider";

// zod var
const signInSchema = z.object({
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
});

type SignInFeilds = z.infer<typeof signInSchema>;

export default function SignInScreen() {
  const { signIn } = useAuth();

  // onPressed function
  const onSign_in = (data: SignInFeilds) => {
    console.log("Signed-in", data.email, data.password);
    signIn();
  };

  // controller
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFeilds>({
    // defaultValues: {
    //   email: "abc@gmail.com",
    //   password: "",
    // },
    resolver: zodResolver(signInSchema),
  });
  console.log(errors);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* statusbar */}
      <Text style={styles.title}>Sign-In</Text>
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
      </View>
      <CustomButton text="Sign-In" onPress={handleSubmit(onSign_in)} />
      <Link href={"/sign-up"} style={styles.goto2}>
        Don't have an account,Sign-up
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
  goto2: {
    fontSize: 15,
    fontWeight: 500,
    color: "#4353fd",
    height: 30,
  },
});
