import { Component } from 'react';
import { Text, ImageBackground, StyleSheet, View, Button } from 'react-native';
import backgroundImage from '../../assets/home.png';

export default class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Modal');
    }, 1000);
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} resizeMode="fill" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>up</Text>
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
    justifyContent: 'center',
    marginBottom: 200
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: 'Verdana'
  }
});
