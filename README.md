# WhButton
A simple button component for use with react-native and react-navigation written in typescript. While this component requires react-navigation, it encapsulates the specific navigation implementation, allowing your templates to be agnostic to which router is used.
          
#### required parameters

- `text` button text
- `navTo` route name defined in your react navigation navigator 
          
#### optional parameters

 - `light` (passed with no value) turns the font color black for light backgrounds
 - `color` hex value for overriding the default background color
 - `size` number value for overriding default font size
 
 ## Usage
 
`import WhButton from './wherever/you/put/it/WhButton.tsx`
 
#### Default Example:

    <WhButton
      text="Default Button"
      navTo="RouteName"
    />
    
![Default Button](https://github.com/mattquest/ReactNativeNavButton/blob/master/images/defaultButton.png)
    
#### Blue Example:

    <WhButton
      text="Blue Button"
      navTo="RouteName"
      color="#00acdf"
    />
    
![Blue Button](https://github.com/mattquest/ReactNativeNavButton/blob/master/images/blueButton.png)

#### Light Button With Size

    <WhButton
      text="Light Button"
      navTo="RouteName"
      color="#ccc"
      size={25}
      light
    />

![Light Sized Button](https://github.com/mattquest/ReactNativeNavButton/blob/master/images/lightSizedButton.png)
    
Tested with react-native 0.59.8 & react-navigation 4.0.10
