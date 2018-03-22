

import React, { Component } from 'react';
 
import {
  StyleSheet,
} from 'react-native';
 
const Styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 40,
        fontSize: 30,
        backgroundColor: '#FFF'
    },
    image: {
        height: 100,
        width: 100,
        alignSelf: 'flex-end',
    },
     container: {
        backgroundColor: "#FFF",

    },
    loginButton : {
        marginTop: 10
    },
    _logo : { 
        width : 120,
        height: 150
    },
    logoText : {
        fontSize : 30,
        marginTop:100,
        fontWeight:'bold',
        color: 'orange'
    },
    loginForm : {
        marginTop: 20,
        borderRadius : 4,
        borderWidth: 0.5,
        borderColor: '#e8f2ef',
        backgroundColor : '#e8f2ef'
    },
    ScanCodeTopMargin : {
        marginTop : 20,
    },
    ScanPreview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'  
  }

});
 
export default Styles;

