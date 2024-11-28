import ButtonAtom from "@/src/atoms/button";
import Gap from "@/src/atoms/gap";
import TextAtom from "@/src/atoms/text";
import { Colors } from "@/src/constants/colors";
import { Text as TextConstant } from "@/src/constants/text";
import { router } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      <Image
        source={require("@/assets/images/shoppe.png")}
        style={styles.logo}
      />
      <View style={styles.logoTitle}>
        <View style={styles.title}>
          <TextAtom
            title="Shoppe"
            size={TextConstant.size.xxl}
            isBold={true}
            isCenter={false}
          />
        </View>
        <View style={{ marginHorizontal: 63 }}>
          <TextAtom
            title="Build Ecommece UI Kit for your online store"
            size={TextConstant.size.semiLarge}
            isBold={false}
            isCenter={true}
          />
        </View>
      </View>
      <Gap type="top" size={100} />
      <ButtonAtom
        title="Get Started"
        color={Colors.blue}
        isOnlyIcon={false}
        action={() => router.push("/register")}
      />
      <Gap type="top" size={18} />
      <View style={styles.registerLink}>
        <TextAtom
          title="I already have an account"
          isBold={false}
          size={TextConstant.size.medium}
          isCenter={true}
        />
        <ButtonAtom
          isOnlyIcon={true}
          action={() => console.log("Button Icon Pressed")}
          color={Colors.blue}
          iconSize={12}
          iconName="arrowright"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 92,
    width: 82,
  },
  logoTitle: {
    alignItems: "center",
  },
  title: {
    marginVertical: 24,
  },
  registerLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
