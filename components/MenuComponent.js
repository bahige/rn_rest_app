import React, {useState} from 'react'
import { View, Text, FlatList,Button } from 'react-native'
import { ListItem, Avatar } from "react-native-elements";
import {DISHES} from '../shared/dishes';


const Menu = (props) => {

   const {navigation} = props;
   const [dishes, setDishes] = useState(DISHES)

   const renderMenuItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => navigation.navigate('DishDetails',  {dishId: item.id})}>
      <Avatar source={ require('./images/buffet.png')} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )

    return (
      <View style={{marginTop:"10%", marginBottom:"10%"}}>
        <Button title="Toggle Drawer"  onPress={() => navigation.toggleDrawer()}/>
        <FlatList data={dishes} 
        renderItem={renderMenuItem}
        keyExtractor={item=>item.id.toString()}/>
      </View> 
    )
}

export default Menu


//onPress={() => navigation.navigate('DishDetails', {  params: {dishId: item.id}})}
//style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}