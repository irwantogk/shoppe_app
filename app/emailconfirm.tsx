import ButtonAtom from "@/src/atoms/button";
import { Colors } from "@/src/constants/colors";
import { router } from "expo-router";
import { Text } from "galio-framework";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function EmailConfirm() {
  return (
    <ImageBackground
      source={require("@/assets/images/bubbles2.png")}
      style={styles.emailConfirmBg}
    >
      <View style={styles.userContainer}>
        <View style={styles.innerFrame} />
        <Image
          source={require("@/assets/images/user.png")}
          style={styles.image}
        />
      </View>
      <Text h3 bold style={styles.textGreet}>
        Hello, Romina!!
      </Text>
      <Text h6 style={{ marginTop: 30 }}>
        Type your password
      </Text>

      <View style={styles.otpInputContainer}>
        <OtpInput
          numberOfDigits={4}
          focusColor="green"
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}
          theme={
            {
              // containerStyle: styles.container,
              // pinCodeContainerStyle: styles.pinCodeContainer,
              // pinCodeTextStyle: styles.pinCodeText,
              // focusStickStyle: styles.focusStick,
              // focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            }
          }
        />
      </View>

      <View style={styles.notYou}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text h6> Not you? </Text>
          <ButtonAtom
            isOnlyIcon={true}
            action={() => router.push("/signin")}
            color={Colors.blue}
            iconSize={12}
            iconName="arrowright"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  emailConfirmBg: {
    flex: 1,
    paddingTop: 110,
    alignItems: "center",
    height: "50%",
  },
  userContainer: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    width: 106,
    height: 106,
    borderRadius: 100,
    overflow: "hidden",
  },
  innerFrame: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 100,
    borderWidth: 7,
    borderColor: "white",
    zIndex: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  textGreet: {
    marginTop: 28,
  },
  otpInputContainer: {
    marginHorizontal: 81,
    marginTop: 25,
  },
  notYou: { flex: 1, justifyContent: "flex-end", marginBottom: 40 },
});
