import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
 const TouchableElement = Platform.select({
  ios: TouchableHighlight,
  android: TouchableNativeFeedback,
});
const Button = (props) => {
     
    function getContent(){
        if(props.children){
            return props.children;
        }
        return <Text style={props.styles.label}>{props.label}</Text>
    }
 
    return (
        <TouchableElement 
            underlayColor="#ccc"
            onPress={props.onPress} 
            style={[
                props.noDefaultStyles ? '' : styles.button, 
                props.styles ? props.styles.button : '']}
        >
            { getContent() }
        </TouchableElement>
    );
}
 
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
});
 
export default Button;