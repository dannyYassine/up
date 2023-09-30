import { Component } from 'react';
import { Text, ImageBackground, StyleSheet, View, Button } from 'react-native';
import backgroundImage from '../../assets/home.png';

export default class Home extends Component {
  onButtonPressed() {
    this.props.navigation.navigate('Modal');
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} resizeMode="fill" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>up</Text>
        </View>
        <View style={styles.container}>
          <Button title="Let's start" style={styles.button} background="red" onPress={() => this.onButtonPressed()} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: 'Verdana'
  },
  button: {
    marginTop: 40,
    backgroundColor: 'red'
  }
});
