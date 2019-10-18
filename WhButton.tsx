import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

interface Props {
  text: string,    // button text
  navTo: string,   // react-navagation route name
  color?: string,  // override default background color
  light?: boolean  // turns text black for light background colors
  size?: number    // override default font size
}

const WhButton:React.FC<Props & NavigationInjectedProps> = props => {
  const buttonStyles:{backgroundColor?: string} = {};
  const textStyles:{color?: string, fontSize?: number} = {};
  
  if (props.color) {
    buttonStyles.backgroundColor = props.color
  }
  if (props.light) {
    textStyles.color = '#000'
  }
  if (props.size) {
    textStyles.fontSize = props.size
  }

  return(
    <TouchableOpacity
      style={[styles.button, buttonStyles]}
      onPress={ () => props.navigation.navigate(props.navTo) }
    >
        <Text style={[styles.buttonText, textStyles]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default withNavigation(WhButton);

const styles = StyleSheet.create({
  button: {
    margin: 7,
    padding: 7,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: '#333',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  }
})
