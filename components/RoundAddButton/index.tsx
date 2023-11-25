import { Button, Icon } from "@rneui/base";
import { styles } from "./RoundAddButton.styles";
import { props } from "./RoundAddButton.types";

export function RoundAddButton({ onPress }: props) {
  return (
    <Button buttonStyle={styles.root} radius={"xl"} size="lg" onPress={onPress}>
      <Icon name="add" color="white" />
    </Button>
  );
}
