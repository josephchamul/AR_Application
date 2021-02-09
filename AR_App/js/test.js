import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Linking,
  Image,
} from "react-native";

function Info({ navigation }) {
  const url = "https://reidparkzoo.org/";
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          style={styles.background}
          source={require("../images/welcome-screen-background.png")}
        >
          <Image
            style={styles.logo}
            source={require("../images/reid-park-logo.jpg")}
          />

          <Text style={styles.header}>
            Find out more about Chilean Flamingos
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Animal Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Conservation Effect</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Zoo Care</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Augmanted Reality</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(url)}
          >
            <Text style={styles.buttonText}>More</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  logo: {
    width: 70,
    height: 70,
    position: "absolute",
    top: 120,
    bottom: 150,
    left: 40,
    right: 120,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
    fontWeight: "bold",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
  },
  button: {
    width: 150,
    height: 150,
    borderColor: "pink",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Info;
