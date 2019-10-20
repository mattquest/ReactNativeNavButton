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
  const styles = StyleSheet.create({
    button: {
      margin: 7,
      padding: 7,
      borderRadius: 5,
      paddingHorizontal: 15,
      backgroundColor: props.color ? props.color: '#333',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: props.size || 18,
      color: props.light ? '#000':'#fff',
      fontWeight: '700',
    }
  })

  return(
    <TouchableOpacity
      style={styles.button}
      onPress={ () => props.navigation.navigate(props.navTo) }
    >
        <Text style={styles.buttonText}>
          {props.text}
        </Text>
    </TouchableOpacity>
  )
}

export default withNavigation(WhButton);