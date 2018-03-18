import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { width, height, totalSize } from 'react-native-dimension';
import {StyleSheet, View,Text, TextInput, Image ,TouchableHighlight} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class UserInput extends Component {
    render(){
        return(        
            <View> 
                <Text style={{fontSize: 30}}>
                    <FontAwesome>{Icons.lock}</FontAwesome>                        
                </Text> 
            </View>  
        );
    }
} 
