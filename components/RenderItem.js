import React from 'react'
import { View, Text } from 'react-native'
import {Card} from 'react-native-elements';
import {baseUrl} from '../shared/baseUrl'

const RenderItem = (props) => {

    const {item} = props;

    return (
        <View>
            {item!= null ? 
            <Card>
                <Card.Title>{item.name}</Card.Title>
                <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle>
                <Card.Image source={{ uri: baseUrl + item.image}}></Card.Image> 
                <Text style={{margin: 10}}> {item.description}</Text>
            </Card>:<View></View>}
        </View>
    )
}

export default RenderItem
