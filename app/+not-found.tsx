import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function Index() {
  return (
    <>
        <Stack.Screen
            options={{
                title: "Oops! Not Fount",
                headerStyle: {
                    backgroundColor: "#879FEF",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        />
        <View
        style={styles.container}
        >
        <Link href={"/"} style={styles.button}>Go back to home</Link>
        </View>
    </>
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


