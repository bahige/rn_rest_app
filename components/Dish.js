import React from 'react'
import { View, Text} from 'react-native'
import {Card, Icon} from 'react-native-elements';



const Dish = (props) => {

    const {dishes ,dishId, favorite, onPress} = props ;
    // const dishId = route.params.dishId;

    // const [dishes, setDishes] = useState(DISHES);

    console.log("dishId",dishId);
    console.log("dishes", dishes);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
            {dishes!=null ? <Card>
                        <Card.Title>{dishes[+dishId].name}</Card.Title>
                        <Card.Image source={require('./images/buffet.png')}></Card.Image>
                        <Text style={{margin:10}}>
                            {dishes[+dishId].description}
                        </Text>
                        <Icon
                            raised //button like display of icon
                            reverse //reverse color
                            name={ favorite ? 'heart' : 'heart-o'}
                            type='font-awesome'
                            color='#f50'
                            onPress={() => favorite ? console.log('Already favorite') : onPress()}
                        />
                    </Card> : <View></View>}
            
        </View>
    )
}

export default Dish
