import React,{useState, useEffect, useRef} from 'react'
import { View, StyleSheet, Easing, ScrollView } from 'react-native'
import RenderItem from './RenderItem';
import {useSelector, useDispatch} from 'react-redux'
import {fetchDishes} from '../redux/dish/dishActions';
import {fetchLeaders} from '../redux/leaders/leaderActions';
import {fetchPromos} from '../redux/promos/promoActions';
import LoadingComponent from './LoadingComponent'



const Home = (props) => {
    
    // const [dishes, setDishes] = useState(DISHES);
    // const [promotions, setPromotions] = useState(PROMOTIONS);
    // const [leaders, setLeaders] = useState(LEADERS);
 
    const dishesList = useSelector(state => state.dishReducer);
    const {isLoading: loadingDishes,  dishes: dishes, errorMessage: dishError } = dishesList;
    console.log("dishes", dishes);

    const promotionsList = useSelector(state => state.promoReducer);
    const {isLoading: loadingPromos,  promos: promos, errorMessage: promoError } = promotionsList;

    const leadersList = useSelector(state => state.leaderReducer);
    const {isLoading: loadingLeaders,  leaders: leaders, errorMessage: leaderError } = leadersList;

    const dispatch = useDispatch();

   /* const animatedValue = useRef(new Animated.Value(0)).current;

    const animate = () =>{
        animatedValue.setValue(0);
        Animated.timing(
            animatedValue,
            { toValue : 8,
            duration: 8000,
            easing: Easing.linear}
        ).start(() => animate());
    }

    const xpos1 = animatedValue.interpolate({
        inputRange: [0,1,3,5,8],
        outputRange: [1200, 600, 0, -600, -1200]
    })

    const xpos2 = animatedValue.interpolate({
        inputRange: [0, 2, 4, 6, 8],
        outputRange: [1200, 600, 0, -600, -1200]
    })

    const xpos3 = animatedValue.interpolate({
        inputRange: [0, 3, 5, 7, 8],
        outputRange: [1200, 600, 0, -600, -1200 ]
    }) */

    useEffect(() => {
        dispatch(fetchDishes());
        dispatch(fetchPromos());
        dispatch(fetchLeaders());
        // animate();
      }, [])


    return (
    // <View style={styles.container}>
    <ScrollView>
        {loadingDishes ? <LoadingComponent/> :
         dishError ? <View> {dishError} </View> : 

        //  <Animated.View style={{ width: '100%', transform: [{translateX: xpos1}]}}>
         <RenderItem item= {dishes.filter((dish)=>dish.featured)[0]}/>
        // </Animated.View> 
    }

         {/* <Animated.View style={{ width: '100%', transform: [{translateX: xpos2}]}}> */}
        <RenderItem item= {promos.filter((promo)=>promo.featured)[0]}/>
        {/* </Animated.View> */}

         {/* <Animated.View style={{ width: '100%', transform: [{translateX: xpos3}]}}> */}
        <RenderItem item= {leaders.filter((leader)=>leader.featured)[0]}/>
        {/* </Animated.View> */}


    {/* </View> */}
    </ScrollView>
    )
}


const styles = StyleSheet.create({
    container :{
        flex:1,
        flexDirection:"column",
        justifyContent:"center"
    }
})

export default Home
