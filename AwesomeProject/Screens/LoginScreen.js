import { useCallback, useState } from "react";

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

// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export default function LoginScreen() {
  //   const [fontsLoaded] = useFonts({
  //     RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
  //     RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
  //     RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  //   });

  //   //   const onLayoutRootView = useCallback(async () => {
  //   //     if (fontsLoaded) {
  //   //       await SplashScreen.hideAsync();
  //   //     }
  //   //   }, [fontsLoaded]);

  //   if (!fontsLoaded) {
  //     return null;
  //   }

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
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
                marginTop: isShowKeyboard ? 273 : 323,
              }}
            >
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
              />
              <TextInput
                style={[styles.input, styles.lastInput]}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
              />
              <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.textButton}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.link} activeOpacity={0.7}>
                <Text style={styles.textLink}>
                  Немає акаунту? Зареєструватися
                </Text>
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
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 144,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginBottom: 33,

    // fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
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
  button: {
    alignItems: "center",
    justifyContent: "center",

    height: 51,
    marginBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  textButton: {
    // fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  link: {},
  textLink: {
    // fontFamily: "Roboto",

    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
});
