import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer placeholderImageSource={PlaceholderImage}/>
      <Text style={{ color: "#fff" }}>
        Open up App.js to start working on your app!
      </Text>
      <Button label={'Choose a photo'} theme="primary"/>
      <Button label={'Use this photo'}/>
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
    flex: 1/3,
    alignItems: 'center',
  },
});
