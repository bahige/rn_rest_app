import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';

const Main= () => {

const [dishes, setDishes] = useState(DISHES);
console.log(dishes);

    return (
      <Menu dishes={dishes}></Menu> 
    )
}

export default Main

