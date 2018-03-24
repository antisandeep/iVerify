import React, { Component } from "react"
import { Keyboard } from 'react-native'
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body,
  TabHeading,
  Text
} from "native-base"
import BarCodeScan from "../../containers/BarCodeScan"
import History from "./History"
import Settings from "./Settings"  
import styles from '../common/CustomStyleSheet'


export default class LandingActivity extends Component {
  constructor(props){
    super(props);
    {Keyboard.dismiss}
  }

  

  render() {
    const { navigate } = this.props.navigation

    return (
      <Container style={styles.container}>         
         
        <Tabs>
            <Tab heading={
              <TabHeading>
                <Icon name="ios-qr-scanner" />
                <Text>Scan</Text>
              </TabHeading>
            }>
            <BarCodeScan navigation={this.props.navigation}/>
          </Tab>
          <Tab heading={
              <TabHeading>
                <Icon name="bookmarks" />
                <Text>History</Text>
              </TabHeading>
            }>
            <History />
          </Tab>
          <Tab heading={
              <TabHeading>
                <Icon name="settings" />
                <Text>Settings</Text>
              </TabHeading>
            }>
            <Settings />
          </Tab>
  
        </Tabs>
      </Container>
    );
  }
}
