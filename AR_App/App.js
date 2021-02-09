import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  PixelRatio,
  TouchableHighlight,
} from "react-native";
import { ViroARSceneNavigator } from "react-viro";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Sets the default scene you want for AR and VR
var InitialARScene = require("./js/flamingoAR.js");

var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
    };
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._exitViro = this._exitViro.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("./images/welcome-screen-background.png")}
      >
        <View>
          <Text style={styles.header}>
            Find out more about Chilean Flamingos
          </Text>
        </View>
        <View style={styles.loginButton}>
          <TouchableHighlight style={styles.button}>
            <Text> Animal Information</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.textEdit}> Conservation Effect</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text> Zoo Care</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={"#68a0ff"}
          >
            <Text>Click for AR</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: InitialARScene }}
      />
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType,
      });
    };
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET,
    });
  }
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 150,
    borderColor: "black",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    color: "#5b8e3f",
    fontSize: 14,
    marginBottom: 16,
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    //justifyContent:'center',
    flexGrow: 1,
    height: 200,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    fontWeight: "bold",
  },
  textEdit: {
    textAlign: "center",
  },
});

module.exports = ViroSample;
