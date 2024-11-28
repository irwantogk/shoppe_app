import { Text } from "react-native";
import { Colors } from "../constants/colors";

interface ITextAtom {
  title: string;
  size: string;
  isBold: boolean;
  isCenter: boolean;
}

export default function TextAtom({
  title,
  size = 24,
  isBold = false,
  isCenter = false,
  color = Colors.black,
}: {
  title: string;
  size: number;
  isBold?: boolean;
  isCenter?: boolean;
  color?: string;
}) {
  return (
    <Text
      style={{
        fontSize: size,
        fontFamily: isBold ? "Nunito-Bold" : "Nunito-Regular",
        textAlign: isCenter ? "center" : "auto",
        color: color,
      }}
    >
      {title}
    </Text>
  );
}
