import React,{useState} from 'react'
import { View, Text, ScrollView,Button } from 'react-native'
import RenderItem from './RenderItem'
import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'


const Home = (props) => {
    
    const [dishes, setDishes] = useState(DISHES);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [leaders, setLeaders] = useState(LEADERS);
 
    const {navigation} =props;

    return (
    <ScrollView>
        <RenderItem item= {dishes.filter((dish)=>dish.featured)[0]}/>
        <RenderItem item= {promotions.filter((promo)=>promo.featured)[0]}/>
        <RenderItem item= {leaders.filter((leader)=>leader.featured)[0]}/>
    </ScrollView>
    )
}

export default Home
