import { View } from "react-native";

export default function Gap({ size, type }: { size: number; type: string }) {
  const dynamicSize = () => {
    switch (type) {
      case "vertical":
        return { marginVertical: size };
        break;
      case "horizontal":
        return { marginHorizontal: size };
        break;
      case "right":
        return { marginRight: size };
        break;
      case "left":
        return { marginLeft: size };
        break;
      case "top":
        return { marginTop: size };
        break;
      case "bottom":
        return { marginBottom: size };
        break;
      default:
        return { margin: size };
        break;
    }
  };

  return <View style={dynamicSize()} />;
}
