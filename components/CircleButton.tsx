import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
type Props = {
  onPress?: () => void;
};

export default function Button({ onPress }: Props) {

  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
      <MaterialIcons
            name="add"
            size={38}
            color="#191919"
          />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer:{
    width:84,
    height:84,
    marginHorizontal:60,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 42,
    padding:3
  },
  circleButton:{
    flex:1,
    borderRadius: 42,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(104, 252, 195)", 
    borderColor: "white"
    
  },
});