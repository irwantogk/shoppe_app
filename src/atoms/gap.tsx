import { View } from "react-native";

export default function Gap({ size, type }: { size: number; type: string }) {
  const gap: any = {};

  switch (type) {
    case "vertical":
      gap.marginVertical = size;
      break;
    case "horizontal":
      gap.marginHorizontal = size;
      break;
    case "right":
      gap.marginRight = size;
      break;
    case "left":
      gap.marginLeft = size;
      break;
    case "top":
      gap.marginTop = size;
      break;
    case "bottom":
      gap.marginBottom = size;
      break;
    default:
      gap.margin = size;
      break;
  }

  console.log(gap);
  return (
    <View
      style={{
        gap,
      }}
    />
  );
}
