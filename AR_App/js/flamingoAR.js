"use strict";

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
} from "react-viro";
var createReactClass = require("create-react-class");
var flamingoAR = createReactClass({
  getInitialState() {
    return {
      text: "Initializing AR...",
    };
  },

  render: function () {
    return (
      <ViroARScene
        onTrackingInitialized={() => {
          this.setState({ text: "Reid Zoo" });
        }}
      >
        <ViroText
          text={this.state.text}
          scale={[0.1, 0.1, 0.1]}
          height={1}
          width={4}
          position={[0, 0.5, -1]}
          style={styles.helloWorldTextStyle}
        />
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
        />

        <Viro3DObject
          source={require("./res/flamingo/3DFlamingo2.0.obj")}
          resources={[
            require("./res/flamingo/FLAMNT.JPG"),
            require("./res/flamingo/FLAM_02.jpg"),
            require("./res/flamingo/FLAM_03.jpg"),
          ]}
          type="OBJ"
          position={[1, 0.5, -1]}
          rotation={[-20, 0, 0]}
          scale={[0.1, 0.1, 0.1]}
          dragType="FixedDistance"
          onDrag={() => {}}
          onLoadStart={this._onLoadStart}
          onLoadEnd={this._onLoadEnd}
          onError={this._onError}
        />
      </ViroARScene>
    );
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 50,
    color: "#034aff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

module.exports = flamingoAR;
