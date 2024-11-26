import ButtonAtom from "@/src/atoms/button";
import Gap from "@/src/atoms/gap";
import TextAtom from "@/src/atoms/text";
import { Colors } from "@/src/constants/colors";
import { Text as TextConstant } from "@/src/constants/text";
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
          <TextAtom title="Shoppe" size={TextConstant.size.xxl} isBold={true} />
        </View>
        <TextAtom
          title="Build Ecommece UI Kit for your online store"
          size={TextConstant.size.medium}
          isBold={false}
        />
      </View>
      <Gap type="top" size={20} />
      <ButtonAtom
        title="Get Started"
        color={Colors.blue}
        action={() => console.log("Button is pressed")}
      />
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
});
