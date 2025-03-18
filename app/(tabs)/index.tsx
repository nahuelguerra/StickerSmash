import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect, useRef } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";


const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const imageRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState<string | undefined>(PlaceholderImage);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);
  const [permissionresponse, requestPermission] = MediaLibrary.usePermissions();
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    if(!permissionresponse?.granted) requestPermission();
    if(!cameraPermission?.granted) requestCameraPermission();
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  const takePhotoAsync = async () => {
    // Verificar permisos de cámara
    if (!cameraPermission?.granted) {
      const permissionResult = await requestCameraPermission();
      if (!permissionResult.granted) {
        alert("Se necesitan permisos de cámara para tomar fotos");
        return;
      }
    }

    // Lanzar la cámara
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert("No se tomó ninguna foto.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setSelectedImage(PlaceholderImage);
    setPickedEmoji(undefined);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };


  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    if (!imageRef.current) {
      alert("Image reference is not available");
      return;
    }
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });
      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Sticker Smash
      </Text>
      <View ref={imageRef} collapsable={false} style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage} />
        { pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <View style={styles.buttonContainer}>
            <Button
              label="Elegir foto"
              theme="primary"
              onPress={pickImageAsync}
            />
            <Button
              label="Usar cámara"
              icon="camera-retro"
              theme="primary"
              onPress={takePhotoAsync}
            />
          </View>
          <Button
            label="Usar esta foto"
            icon="check-circle"
            theme="primary"
            onPress={() => setShowAppOptions(true)}
            
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#191919",
  },
  imageContainer: {
    flex: 1,
    marginTop: 25
  },
  text:{
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(104, 252, 195)",
    marginTop: 15,
  },
  footerContainer: {
    flex: 0.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  useThisPhotoButton: {
    marginTop: 10,
  },
  optionsContainer:{
    flex: 0.5,
    position: "absolute",
    bottom: 80,
  },
  optionsRow:{
    alignItems: "center",
    flexDirection: "row",
  }
});