import ButtonAtom from "@/src/atoms/button";
import TextAtom from "@/src/atoms/text";
import { Colors } from "@/src/constants/colors";
import { Picker } from "@react-native-picker/picker";
import { Link, router } from "expo-router";
import { Block, Button, Input, Text } from "galio-framework";
import { useRef, useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import CountryPicker, { CountryCode } from "react-native-country-picker-modal";
import PhoneInput from "react-native-phone-input";

export default function Register() {
  const [selectedItem, setSelectedItem] = useState();

  const [phoneCountryCode, setPhoneCountryCode] = useState<CountryCode>("FR");
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = useRef<PhoneInput>(null);

  const handleCountrySelect = (country: any) => {
    setPhoneCountryCode(country.cca2);
    const newPhoneNumber = `+${country.callingCode[0]}`;
    setPhoneNumber(newPhoneNumber);
    if (phoneInput.current) {
      phoneInput.current.selectCountry(country.cca2.toLowerCase());
      phoneInput.current.setValue(newPhoneNumber);
    }

    setShowPhoneCountryPicker(false);
  };

  const flags = () => {
    return (
      <Image
        source={require("@/assets/images/upload-photo.png")}
        style={{ height: 24, width: 24 }}
      />
    );
  };

  return (
    <View style={styles.reisterContainer}>
      <Text h1 bold style={{ width: "80%" }}>
        Create Account
      </Text>
      <Block style={styles.cameraIcon}>
        <Image
          source={require("@/assets/images/upload-photo.png")}
          style={{
            height: 90,
            width: 90,
          }}
        />
      </Block>
      <Block>
        <Input placeholder="Email" rounded borderless />
        <Input placeholder="Password" password rounded borderless viewPass />

        <PhoneInput
          ref={phoneInput}
          style={styles.phoneInput}
          initialValue={phoneNumber}
          initialCountry={phoneCountryCode.toLowerCase()}
          onPressFlag={() => setShowPhoneCountryPicker(true)}
          onChangePhoneNumber={(text) => {
            setPhoneNumber(text);
          }}
        />

        <CountryPicker
          countryCode={phoneCountryCode}
          visible={showPhoneCountryPicker}
          onSelect={handleCountrySelect}
          onClose={() => setShowPhoneCountryPicker(false)}
          withFlagButton={false}
          withFilter
        />
      </Block>

      <View style={styles.actionBtnRegister}>
        <ButtonAtom
          title="Done"
          color={Colors.blue}
          action={() => console.log("button pressed")}
          buttonWidth="auto"
        />

        <Pressable onPress={() => router.back()} style={styles.cancelBtn}>
          <TextAtom title="Cancel" size={16} isBold={false} isCenter={true} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reisterContainer: {
    marginTop: 80,
    marginHorizontal: 20,
  },
  cameraIcon: {
    marginTop: 55,
    marginBottom: 32,
    marginLeft: 10,
  },
  phoneInput: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
  },
  actionBtnRegister: {
    marginTop: 50,
  },
  cancelBtn: {
    marginTop: 24,
  },
});
