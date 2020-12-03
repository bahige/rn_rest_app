import React,{useState} from 'react'
import { View, Text, ScrollView,Button } from 'react-native'
import RenderItem from './RenderItem'
import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'
import {useSelector, useDispatch} from 'react-redux'



const Home = (props) => {
    
    // const [dishes, setDishes] = useState(DISHES);
    // const [promotions, setPromotions] = useState(PROMOTIONS);
    // const [leaders, setLeaders] = useState(LEADERS);
 
    const dishesList = useSelector(state => state.dishReducer);
    const { dishes } = dishesList;
    const promotionsList = useSelector(state => state.promoReducer);
    const { promos } = promotionsList;
    const leadersList = useSelector(state => state.leaderReducer);
    const { leaders } = leadersList;

    const {navigation} =props;

    return (
    <ScrollView>
        <RenderItem item= {dishes.filter((dish)=>dish.featured)[0]}/>
        <RenderItem item= {promos.filter((promo)=>promo.featured)[0]}/>
        <RenderItem item= {leaders.filter((leader)=>leader.featured)[0]}/>
    </ScrollView>
    )
}

export default Home
