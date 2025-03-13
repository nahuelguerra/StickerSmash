import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";



const PlaceholderImage = require("../../assets/images/background-image.png")
export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result)
    }else{
      alert("You did not select any image.")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage} />
      </View>
      {
        showAppOptions ? (
          <View />
        ) : (
          <View style={styles.footerContainer}>
          <View style={styles.buttonContainer}>
            <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}/>
            <Button label="Use this photo" theme="primary" onPress={() => setShowAppOptions(true)}/>
          </View>
        </View>
        )
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#191919",
  },
  imageContainer:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer:{
    flex: 0.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row", // Cambio clave para colocar elementos en horizontal // Espacio entre los botones
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap:10
  }
});