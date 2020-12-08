import React from 'react'
import { View, Animated, FlatList, StyleSheet, I18nManager, Alert } from 'react-native'
import {ListItem,Avatar, Icon} from 'react-native-elements';
import LoadingComponent from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { useSelector, useDispatch } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {deleteFavorite} from '../redux/favorites/favoriteActions';
import * as Animatable from 'react-native-animatable';

const FavoriteComponent = (props) => {

    const {navigation}= props;  
    const dishesList = useSelector(state => state.dishReducer);
    const { isLoading: isLoading, errorMessage: errorMessage, dishes: dishes } = dishesList;

    const favoritesList = useSelector(state => state.favoritesReducer);
    const { favorites: favorites } = favoritesList;

    const dispatch = useDispatch();

    const AnimatedIcon = Animated.createAnimatedComponent(Icon);

    const showAlert = (item) => {
      
      Alert.alert(
        "Deletete Favorite?",
        `Are you sure you want to delete this favorite dish ${item.name} ?`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => dispatch(deleteFavorite(item.id)) }
        ],
        { cancelable: true } // The Alert can be cancelled by tapping outside the Alert Dialogue Box.
      );
  

    }



    const renderMenuItem = ({item}) =>{
      console.log("item", item);
      const renderRightActions = (progress, dragX) =>{
        const scale = dragX.interpolate({
          inputRange: [-200, 0],
          outputRange: [1, 0],
        })

        return (
          <RectButton style={styles.rightAction} onPress={()=>showAlert(item)}>
            <View>
            <AnimatedIcon name="delete" size={30} color="#fff" style={[styles.actionIcon, {transform:[{translateX:scale}]}]}/>
            <Animated.Text style={{color:'#fff'}}>
              Delete
            </Animated.Text>
            </View>
          </RectButton>
        );
    }

    return (
    <Swipeable renderRightActions={renderRightActions}>
    <Animatable.View duration={2000}  animation="fadeInRightBig">
    <ListItem bottomDivider onPress={() => navigation.navigate('DishDetails',  {dishId: item.id})}>
      <Avatar source={{ uri: baseUrl + item.image}} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    </Animatable.View>
    </Swipeable>
    )
  }

    return (
        <View style={{marginTop:"10%", marginBottom:"10%"}}>
        {isLoading ? <LoadingComponent/> : errorMessage ? 
        <View>{errorMessage}</View> : 
        <FlatList data={dishes.filter(dish => favorites.some(el => el === dish.id))} 
         renderItem={renderMenuItem}
         keyExtractor={item=>item.id.toString()}/>}
       </View> 
    )
}


const styles = StyleSheet.create({
  actionIcon: {
    width: 30,
    marginHorizontal: 10
  },
  rightAction: {
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    backgroundColor: '#dd2c00',
    width:150,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})

export default FavoriteComponent

// onPress={this.close}