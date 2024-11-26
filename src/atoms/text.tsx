import { Text } from "react-native";

export default function TextAtom({
  title,
  size,
  isBold,
  isCenter,
}: {
  title: string;
  size: number;
  isBold: boolean;
  isCenter: boolean;
}) {
  return (
    <Text
      style={{
        fontSize: size,
        fontFamily: isBold ? "Nunito-Bold" : "Nunito-Regular",
        textAlign: isCenter ? "center" : "auto",
      }}
    >
      {title}
    </Text>
  );
}
