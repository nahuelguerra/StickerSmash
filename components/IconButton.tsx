import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap,
  label: string;
  onPress?: () => void;
};

export default function Button({ icon, label, onPress }: Props) {

  return (
      <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons
            name={icon}
            size={24}
            color="rgb(104, 252, 195)"

        />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
    iconButton: {
      justifyContent: "center",
      alignItems: "center",
    },
    iconButtonLabel: {
      marginTop: 12,
      color: "rgb(104, 252, 195)"
    }
});