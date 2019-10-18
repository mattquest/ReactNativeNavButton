# WhButton
A simple button component for use with react-native and react-navigation written in typescript. While this component requires react-navigation, it encapsulates the specific navigation impelmentation, allowing your templates to be agnostic to which router is used.
          
#### required parameters

- `text` button text
- `navTo` route name defined in your react navigation navigator 
          
#### optional parameters

 - `light` (passed with no value) turns the font color black for light backgrounds
 - `color` hex value for overriding the default background color
 - `size` number value for overriding default font size
 
 
### Simple Example:

    <WhButton
      text="ButtonText"
      navTo="RouteName"
    />
    
### With Optional Parameters:

    <WhButton
      text="ButtonText"
      navTo="RouteName"
      color="#ccc"
      size={20}
      light
    />
    
    
    
Tested with react-native 0.59.8 & react-navigation 4.0.10
