import ButtonAtom from "@/src/atoms/button";
import TextAtom from "@/src/atoms/text";
import { Colors } from "@/src/constants/colors";
import { router } from "expo-router";
import { Block, Input, Text } from "galio-framework";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";

export default function SignIn() {
  return (
    <ImageBackground
      source={require("@/assets/images/bubbles.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.signInContainer}>
        <Text h1 bold>
          Login
        </Text>
        <Text color={Colors.black} size={19}>
          Good to see you back! ♡
        </Text>

        <View style={styles.formLogin}>
          <Input placeholder="Email" rounded borderless />
        </View>

        <View style={styles.actionBtnLogin}>
          <ButtonAtom
            title="Next"
            color={Colors.blue}
            action={() => router.push("/emailconfirm")}
            buttonWidth="auto"
          />

          <Pressable onPress={() => router.back()} style={styles.cancelBtn}>
            <TextAtom title="Cancel" size={16} isBold={false} isCenter={true} />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 55,
    marginHorizontal: 20,
  },
  formLogin: {
    marginTop: 20,
  },
  actionBtnLogin: {
    marginTop: 36,
  },
  cancelBtn: {
    marginTop: 14,
  },
});
