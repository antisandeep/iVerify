import React, { Component } from "react"
import { TouchableOpacity, Image, Dimensions } from "react-native"
import {
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Left,
    Right,
    Body,
    Thumbnail
} from "native-base"

import Images from '@assets/images'
import styles from '../common/CustomStyleSheet'
const deviceWidth = Dimensions.get("window").width

const ProductSummary = (
        {
            product,
            navigateToReward=f=>f,
            navigateToProductInfo=f=>f
        }
    ) => (
            <Card>
                <CardItem bordered>
                    <Left>
                        <TouchableOpacity onPress={navigateToReward}>
                        
                            <Thumbnail source={Images.awardImage} />
                        </TouchableOpacity>
                        <Body>
                            <Text>{product.Name}</Text>
                            <Text note>{product.Brand_Name__c}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Image
                            style={{
                                alignSelf: "center",
                                height: 200,
                                resizeMode: "cover",
                                width: deviceWidth / 3,
                                marginVertical: 5
                            }}
                            source={Images.bottleLogo}
                        />
                        <Text>{`Manufactured on : ${product.Manufacturing_Date__c}`}
                        </Text>
                        <Text>Pack of : 1</Text>
                        <Text>{`MRP : ${product.Price__c}`}</Text>
                    </Body>
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                    <Left>
                        <Button onPress={navigateToProductInfo}>
                            <Text>More Info</Text>
                        </Button>

                    </Left>
                    <Right>
                        <Button>
                            <Text>Retailer Info</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        )
    

export default ProductSummary