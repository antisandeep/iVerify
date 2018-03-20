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
  Body
} from "native-base";
import BarCodeScan from "./BarCodeScan";
import History from "./History";
import Settings from "./Settings";

export default class LandingActivity extends Component {
  render() {
    return (
      <Container>         

        <Tabs>
          <Tab heading="Scan">
            <BarCodeScan />
          </Tab>
          <Tab heading="History">
            <History />
          </Tab>
          <Tab heading="Settings">
            <Settings />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
