//sample button from react-native docs

import React, { Component } from 'react';
import {StyleSheet,Button,View,SafeAreaView,Text,Alert} from 'react-native';
import Constants from 'expo-constants';

export default class Button extends Component {
    _handlePress() {
        console.log('button_press');
    }
    render() {
        return (
            <Button
                title="Button"
                color="#cccccc"
                onPress={() => this._handlePress()}
            />
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
});


//Exponent.registerRootComponent(App)