import React, { Component } from "react";
import { StyleSheet, Image,TouchableOpacity,Dimensions } from "react-native";
import styles from './../components/CustomStyleSheet'; 
import {
    Container,
    Header,
    Title,
    Content,
    Button, 
    Form,
    Body,
    Left,
    Right,
    IconNB,
    Item,
    Input,
    Text,
    Card,
    CardItem,
    Thumbnail
} from "native-base";
const deviceWidth = Dimensions.get("window").width; 
import Icon from 'react-native-vector-icons/FontAwesome';

const mapImage = require("./../images/map.png");

export default class RetailerInfo extends Component{ 
    render() {
        return (
          <Container style={styles.container}>             
            <Content padder>
                <Text> Locality </Text>
                <Card style={styles.mb}>
                    <CardItem header bordered>
                        <Text>Sholinallur, Chennai, TN</Text>
                    </CardItem>
                </Card>
                 
                <Text style={{marginTop:10}}> Store </Text>
                <Card>
                    <CardItem header bordered>
                        <Text>Nilgiri's, Modal School Rd.</Text>
                    </CardItem>
                </Card> 

                <Card style={styles.mb}>
                    <CardItem bordered>
                    <Left>
                        <Icon active name="map" style={{fontSize:30}}/>
                        <Body>
                            <Text>Trace your packet back to its origin! </Text>                         
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                        <Body>                 
                        <Image
                            style={{
                                alignSelf: "center",
                                height: 150,
                                resizeMode: "cover",
                                width: deviceWidth / 1.18,
                                marginVertical: 5
                            }}
                            source={mapImage}
                            />
                        </Body>
                    </CardItem>              
                </Card>         
            </Content>
          </Container>
        );
    }
}