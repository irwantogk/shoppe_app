import { Text } from "react-native";

export default function TextAtom({
  title,
  size,
  isBold,
}: {
  title: string;
  size: number;
  isBold: boolean;
}) {
  return (
    <Text
      style={{
        fontSize: size,
        fontFamily: isBold ? "Nunito-Bold" : "Nunito-Regular",
      }}
    >
      {title}
    </Text>
  );
}
