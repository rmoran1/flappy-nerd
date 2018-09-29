import React from "react";
import { StyleSheet, View } from "react-native";
import Files from "./Files";
import * as THREE from "three"; // 0.88.0
import Expo from "expo";
import { Group, Node, Sprite, SpriteView } from "./GameKit";

const SPEED = 1.6;
const GRAVITY = 1100;
const FLAP = 320;
const SPAWN_RATE = 2600;
const OPENING = 120;
const GROUND_HEIGHT = 64;

export default class Game extends React.Component {
 
  componentWillMount() {
  }

  onSetup = async ({ scene }) => {
 	// Give us global reference to the scene
	this.scene = scene;
	await this.setupBackground();
  };

  setupBackground = async () => {

	const { scene } = this;
	const { size } = scene;

	const bg = await this.setupStaticNode({
		image: Files.sprites.bg,
		size,
		name: 'bg',
	});

	scene.add(bg);

  };

  updateGame = delta => {
   
  };

  setupStaticNode = async ({ image, size, name }) => {

	const sprite = new Sprite();

	await sprite.setup({
		image,
		size,
	});

	// 2
	const node = new Node({
		sprite,
	});

	node.name = name;

	return node;

  };

  render() {
    //@(Evan Bacon) This is a dope SpriteView based on SpriteKit that surfaces touches, render, and setup!
    return (
      <View style={StyleSheet.absoluteFill}>
        <SpriteView
          touchDown={({ x, y }) => {}}
          touchMoved={({ x, y }) => {}}
          touchUp={({ x, y }) => {}}
          update={this.updateGame}
          onSetup={this.onSetup}
        />
      </View>
    );
  }
}
