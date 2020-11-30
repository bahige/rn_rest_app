import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';



const DishDetail = (props) => {

    const {navigation, route} = props ;
    const dishId = route.params.dishId;

    const [dishes, setDishes] = useState(DISHES);

    console.log("dishId",dishId);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
            {dishes!=null ? <Card>
                        <Card.Title>{dishes[+dishId].name}</Card.Title>
                        <Card.Image source={require('./images/buffet.png')}></Card.Image>
                        <Text style={{margin:10}}>
                            {dishes[+dishId].description}
                        </Text>
                    </Card> : <View></View>}
            <Button title="Menu"  onPress={() => navigation.navigate('Menu')}/>
            
        </View>
    )
}


// function RenderDish(props) {

//     const dish = props.dish;
    
//         if (dish != null) {
//             return(
//                 <Card
//                 featuredTitle={dish.name}
//                 image={require('./images/uthappizza.png')}>
//                     <Text style={{margin: 10}}>
//                         {dish.description}
//                     </Text>
//                 </Card>
//             );
//         }
//         else {
//             return(<View></View>);
//         }
// }

// function DishDetail(props) {
//     return(<RenderDish dish={props.dish} />);
// }
export default DishDetail
