import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import { useState } from "react";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    // We receive an object in which different options are specified.
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, //user can crop images when on android and iOS
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      <Button
        label={"Choose a photo"}
        theme="primary"
        onPress={pickImageAsync}
      />
      <Button label={"Use this photo"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
