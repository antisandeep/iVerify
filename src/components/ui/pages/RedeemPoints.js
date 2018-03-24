import React, { Component } from "react"
import { StyleSheet } from "react-native"
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Body
} from "native-base"

import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../common/CustomStyleSheet'

export default class RedeemPoints extends Component {
    static navigationOptions = {
        title: 'Redeem Points',
    }
    render() {
        return (
          <Container style={styles.container}>
            <Content padder>
              <Card>                
                <CardItem>
                  <Left>
                    <Icon active name="film" style={{fontSize:30}}/>
                    <Text>Movie Tickets</Text>
                  </Left>
                  <Right>
                    <Icon name="angle-double-right" />
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                    <Icon active name="shopping-bag" style={{fontSize:30}}/>
                    <Text>Marchendise</Text>
                  </Left>
                  <Right>
                  <Icon name="angle-double-right" />
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                    <Icon active name="bus" style={{fontSize:30}}/>
                    <Text>Bus Tickets</Text>
                  </Left>
                  <Right>
                  <Icon name="angle-double-right" />
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                    <Icon active name="gift" style={{fontSize:30}}/>
                    <Text>Gift Card</Text>
                  </Left>
                  <Right>
                  <Icon name="angle-double-right" />
                  </Right>
                </CardItem>
              </Card>
              <Card>
                 <CardItem>
                  <Left>
                    <Icon active name="plane" style={{fontSize:30}}/>
                    <Text>Air Tickets</Text>
                  </Left>
                  <Right>
                  <Icon name="angle-double-right" />
                  </Right>
                </CardItem>
              </Card>
              <Card>
                 <CardItem>
                  <Left>
                    <Icon active name="hotel" style={{fontSize:30}}/>
                    <Text>Hotel Bookings</Text>
                  </Left>
                  <Right>
                  <Icon name="angle-double-right" />
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                    <Icon active name="mobile" style={{fontSize:30}}/>
                    <Text>Mobile Recharge</Text>
                  </Left>
                  <Right>
                  <Icon name="angle-double-right" />
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                    <Icon active name="tv" style={{fontSize:30}}/>
                    <Text>DTH Recharge</Text>
                  </Left>
                  <Right>
                  <Icon name="angle-double-right" />
                  </Right>
                </CardItem>                 
              </Card>
            </Content>
          </Container>
        )
      }
}