import React, {useState} from 'react'
import { View, Text, FlatList,Button } from 'react-native'
import { ListItem, Avatar } from "react-native-elements";
import {DISHES} from '../shared/dishes';


const Menu = (props) => {

   const {navigation} = props;
   const [dishes, setDishes] = useState(DISHES)

   const renderMenuItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => navigation.navigate('DishDetails', { dishId: item.id })}>
      {/* <Avatar source={ require('./images/buffet.png')} /> */}
      {/* <Avatar source={{uri: require('./images/buffet.png')}} /> */}
      {/* <Avatar source={{uri: require('./' +  item.image)}} /> */}
      <Avatar source={{uri: item.image}} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
        <FlatList data={dishes} 
        // renderItem={({item}) => <Text >{item.name}</Text>}
        renderItem={renderMenuItem}
        keyExtractor={item=>item.id.toString()}/>
      </View> 
    )
}

export default Menu
