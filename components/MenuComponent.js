import React, {useState} from 'react'
import { View, Text, FlatList,Button } from 'react-native'
import { ListItem, Avatar, Tile } from "react-native-elements";
import {DISHES} from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';


const Menu = (props) => {

   const {navigation} = props;
  //  const [dishes, setDishes] = useState(DISHES)

  const dishesList = useSelector(state => state.dishReducer);
  const { dishes } = dishesList;

   const renderMenuItem = ({ item }) => (
    // <ListItem bottomDivider onPress={() => navigation.navigate('DishDetails',  {dishId: item.id})}>
    //   <Avatar source={ require('./images/buffet.png')} />
    //   <ListItem.Content>
    //     <ListItem.Title>{item.name}</ListItem.Title>
    //     <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
    //   </ListItem.Content>
    //   <ListItem.Chevron />
    // </ListItem>
        <Tile
          key={index}
          title={item.name}
          caption={item.description}
          featured
          onPress={() => navigation.navigate('Dishdetails', { dishId: item.id })}
          imageSrc={{ uri: baseUrl + item.image}} />
  )

    return (
      <View style={{marginTop:"10%", marginBottom:"10%"}}>
       <FlatList data={dishes} 
        renderItem={renderMenuItem}
        keyExtractor={item=>item.id.toString()}/>
      </View> 
    )
}

export default Menu


//onPress={() => navigation.navigate('DishDetails', {  params: {dishId: item.id}})}
//style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}