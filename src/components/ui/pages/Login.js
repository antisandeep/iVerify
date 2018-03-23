import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Body,
    Left,
    Right,
    Item,
    Input,
    Form,
    Text,
    Thumbnail,
    View,
    Toast
} from "native-base";
import styles from '../common/CustomStyleSheet';
import Images from '@assets/images'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this._onpressLogin = this._onpressLogin.bind(this);
        this.state = {
            showToast: false
        }

    }
    _onpressLogin() {
        Toast.show({
            text: 'Login with Guest',
            position: 'bottom',
            buttonText: 'login msg'
        })
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content padder style={{ margin: 40 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-end', marginTop: 20 }}>
                        <Text style={styles.logoText}> iVerify</Text>
                        <Thumbnail source={Images.appLogo} style={styles._logo} />
                    </View>
                    <Form style={styles.loginForm}>
                        <Item>
                            <Icon active name="person" />
                            <Input placeholder="Username" />
                        </Item>
                        <Item>
                            <Icon active name="lock" />
                            <Input placeholder=" Password" secureTextEntry={true} />
                        </Item>
                    </Form>
                    <Button block success style={styles.loginButton} onPress={this._onpressLogin}>
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

