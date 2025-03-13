import { Text, View, StyleSheet } from "react-native";


export default function AboutScreen() {
  return (
    <View
      style={styles.container}
    >
        <Text style={styles.text}>About screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#191919",
  
  },
  text:{
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  button:{
    marginTop: 15,
    backgroundColor: "#B4EAFF",
    padding: 5,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "black",
  }
});


