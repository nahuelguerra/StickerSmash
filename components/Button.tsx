import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
type Props = {
  label: string;
  theme?: "primary";
  icon?:keyof typeof FontAwesome.glyphMap,
  onPress?: () => void;
};

export default function Button({ label,icon = "picture-o", theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer,{ borderWidth: 4, borderColor: "black", borderRadius: 18}]}>
        <Pressable style={[styles.button,{backgroundColor: "rgb(104, 252, 195)", borderColor: "white"}]} onPress={onPress}>
          <FontAwesome
            name={icon}
            size={18}
            color="#191919"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel,{color: "#191919"}]}>{label}</Text>
        </Pressable>
      </View>
    )
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
      <FontAwesome
            name={icon}
            size={18}
            color="white"
            style={styles.buttonIcon}
          />
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer:{
    width:150,
    height:68,
    alignItems: "center",
    justifyContent: "center",
    padding: 1
  },
  button:{
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon:{
    paddingRight: 8
  },
  buttonLabel:{
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
});