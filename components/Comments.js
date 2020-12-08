import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card, Rating } from "react-native-elements";


const Comments = (props) => {

   const {comments} = props;

   const renderCommentItem = ({ item,index }) => (
    <View key={index} style={{margin: 10}}>
    <Text style={{fontSize: 14}}>{item.comment}</Text>
    <Rating readonly imageSize={14} count={5} startingValue={item.rating}/>
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

