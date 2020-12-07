import React,{useState, useEffect} from 'react'
import { View, Text, ScrollView,Button } from 'react-native'
import RenderItem from './RenderItem'
import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'
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

    useEffect(() => {
        dispatch(fetchDishes());
        dispatch(fetchPromos());
        dispatch(fetchLeaders());
      }, [])


    return (
    <ScrollView>
        {loadingDishes ? <LoadingComponent/> :
         dishError ? <View> {dishError} </View> : 
         <RenderItem item= {dishes.filter((dish)=>dish.featured)[0]}/>}

        <RenderItem item= {promos.filter((promo)=>promo.featured)[0]}/>

        <RenderItem item= {leaders.filter((leader)=>leader.featured)[0]}/>
    </ScrollView>
    )
}

export default Home
