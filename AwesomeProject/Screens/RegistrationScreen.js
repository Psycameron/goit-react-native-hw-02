import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import BackgroundImage from "../assets/images/bg.jpg";

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isFocusedInput, setIsFocusedInput] = useState("");

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const handleInputFocus = (inputName) => {
    setIsFocusedInput(inputName);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={BackgroundImage} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formWrapper,
                marginTop: isShowKeyboard ? 150 : 250,
              }}
            >
              <View style={styles.avatar}>
                <TouchableOpacity>
                  <AntDesign
                    style={styles.addButton}
                    name="pluscircleo"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Реєстрація</Text>

              <TextInput
                style={[
                  styles.input,
                  isFocusedInput === "login" && styles.inputFocused,
                ]}
                placeholder="Логін"
                onFocus={() => {
                  setIsShowKeyboard(true);
                  handleInputFocus("login");
                }}
                onBlur={() => {
                  handleInputFocus("");
                }}
              />
              <TextInput
                style={[
                  styles.input,
                  isFocusedInput === "email" && styles.inputFocused,
                ]}
                placeholder="Адреса електронної пошти"
                onFocus={() => {
                  setIsShowKeyboard(true);
                  handleInputFocus("email");
                }}
                onBlur={() => {
                  handleInputFocus("");
                }}
              />
              <TextInput
                style={[
                  styles.input,
                  styles.lastInput,
                  isFocusedInput === "password" && styles.inputFocused,
                ]}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  handleInputFocus("password");
                }}
                onBlur={() => {
                  handleInputFocus("");
                }}
              />
              <Text
                style={styles.showPass}
                onPress={() => {
                  setIsShowPassword((prevState) => !prevState);
                }}
              >
                {isShowPassword ? "Показати" : "Сховати"}
              </Text>
              <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.textButton}>Зареєстуватися</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.link} activeOpacity={0.7}>
                <Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  formWrapper: {
    alignItems: "center",

    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 78,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    position: "absolute",
    top: -65,
    // zIndex: -1,

    width: 120,
    height: 120,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addButton: {
    position: "absolute",
    left: 107,
    bottom: -100,
    zIndex: 3,

    width: 25,
    height: 25,

    color: "#FF6C00",
  },
  title: {
    marginBottom: 33,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    width: "100%",
    height: 50,
    padding: 16,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
  },
  lastInput: {
    marginBottom: 43,
  },
  inputFocused: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
  showPass: {
    position: "absolute",
    top: 308,
    right: 32,

    fontFamily: "Roboto",
    lineHeight: 19,
    fontSize: 16,
    color: "#1B4371",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: 51,
    marginBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  textButton: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  link: {},
  textLink: {
    fontFamily: "Roboto",

    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
});
