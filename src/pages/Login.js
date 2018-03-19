import React, { Component } from 'react';
import { Container, Header, Content, Icon } from 'native-base';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Image
} from 'react-native';
import CustomContainer from '../components/CustomContainer';
import Button from '../components/Button';
import Label from '../components/Label';
// import vv from './imgages/'



export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { Username: 'GUEST' }
    }

    _handlePress(event) {
        alert('Login Successful with: ' + this.state.Username);
    }
    render() {
        return (

            <Container>
                <Header />
                <Content>
                  <Icon name='home' />
                  <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
                </Content>
                <ScrollView style={styles.scroll}>
                      
                      {/* <Container>
                        <Image 
                        Source={require('/imgages/appicon.png')}
                        />
                    </Container>   */}
                    <CustomContainer>
                        <Label text="Username or Email" />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(Username)=>this.setState({Username})}
                        />
                    </CustomContainer>
                    <CustomContainer>
                        <Label text="Password" />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textInput}
                        />
                    </CustomContainer>
                     <CustomContainer>
                        <Button
                            label="Login"
                            styles={{ button: styles.alignRight, label: styles.label }}
                            onPress={this._handlePress.bind(this)} />
                    </CustomContainer> 
                </ScrollView>
            </Container>
            
        );
    }
}

const styles = StyleSheet.create({
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

});
