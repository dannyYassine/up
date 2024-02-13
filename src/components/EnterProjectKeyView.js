import { Component } from 'react';
import { Button, ImageBackground, StyleSheet, TextInput, View } from 'react-native';
import backgroundImage from '../../assets/home.png';

export default class EnterProjectKeyView extends Component {
  state = {
    text: ''
  };

  onChangeText(text) {
    this.setState({
      text
    });
  }

  onButtonPressed() {
    this.props.route.params.onKeyEntered('yo');
    this.props.navigation.pop();
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#B0B0B0"
            placeholder="Enter api key..."
            value={this.state.text}
            onChangeText={(value) => this.onChangeText(value)}
          />
        </View>
        <View style={styles.container}>
          <Button title="Done" style={styles.button} background="red" onPress={() => this.onButtonPressed()} />
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
  input: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Verdana'
  }
});
