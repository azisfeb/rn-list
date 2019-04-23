import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from "expo";

import Pomodoro from "./src/component/PomodoroTimer";
import Contact from "./src/component/Contact";

export default class App extends React.Component {
  render() {
    return (
        <Contact />
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },
});
