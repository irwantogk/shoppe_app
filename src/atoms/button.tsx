import { Button } from "galio-framework";

export default function ButtonAtom({
  title,
  action,
  color,
}: {
  title: string;
  action: any;
  color: string;
}) {
  return (
    <Button color={color} onPress={action}>
      {title}
    </Button>
  );
}
