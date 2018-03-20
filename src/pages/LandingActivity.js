import React, { Component } from "react";
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
} from "native-base";
import BarCodeScan from "./BarCodeScan";
import History from "./History";
import Settings from "./Settings";

export default class LandingActivity extends Component {
  render() {
    return (
      <Container>         

        <Tabs>
            <Tab heading={
              <TabHeading>
                <Icon name="barcode" />
                <Text>Scan</Text>
              </TabHeading>
            }>
            <BarCodeScan />
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
