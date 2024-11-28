import { Button } from "galio-framework";
import { Colors } from "../constants/colors";

interface ButtonAtomProps {
  title?: string;
  action: () => void;
  color: string;
  isOnlyIcon?: boolean;
  iconSize?: number;
  iconName?: string;
  buttonWidth?: any;
}

export default function ButtonAtom({
  title,
  action,
  color = Colors.blue,
  isOnlyIcon = false,
  iconSize = 24,
  iconName = "home",
  buttonWidth = undefined,
}: ButtonAtomProps) {
  return (
    <Button
      color={color}
      onlyIcon={isOnlyIcon}
      icon={isOnlyIcon ? iconName : undefined}
      iconFamily={isOnlyIcon ? "antdesign" : undefined}
      iconSize={iconSize ? iconSize : undefined}
      onPress={action}
      style={[
        { borderRadius: 10 },
        buttonWidth != undefined ? { width: buttonWidth } : undefined,
      ]}
    >
      {!isOnlyIcon && title}
    </Button>
  );
}
