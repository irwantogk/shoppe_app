import { Button } from "galio-framework";

export default function ButtonAtom({
  title,
  action,
  color,
  isOnlyIcon,
  iconSize,
  iconName,
}: {
  title?: string;
  action: any;
  color: string;
  isOnlyIcon?: boolean;
  iconSize?: number;
  iconName?: string;
}) {
  return (
    <Button
      color={color}
      onlyIcon={isOnlyIcon}
      icon={isOnlyIcon ? iconName : undefined}
      iconFamily={isOnlyIcon ? "antdesign" : undefined}
      iconSize={iconSize ? iconSize : undefined}
      onPress={action}
    >
      {!isOnlyIcon && title}
    </Button>
  );
}
