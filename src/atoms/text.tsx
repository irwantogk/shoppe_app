import { Text } from "react-native";

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
}: {
  title: string;
  size: number;
  isBold?: boolean;
  isCenter?: boolean;
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
