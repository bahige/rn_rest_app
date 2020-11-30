import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card } from "react-native-elements";


const Comments = (props) => {

   const {navigation, comments} = props;

   const renderCommentItem = ({ item,index }) => (
    <View key={index} style={{margin: 10}}>
    <Text style={{fontSize: 14}}>{item.comment}</Text>
    <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
    <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
</View>
  )

    return (
      <Card>
        <Card.Title>Comments</Card.Title>
        <Card.Divider/>           
        <FlatList data={comments} 
        renderItem={renderCommentItem}
        keyExtractor={item=>item.id.toString()}/>
       </Card>
    )
}

export default Comments

