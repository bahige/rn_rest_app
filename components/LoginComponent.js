import React, {useEffect, useState} from 'react'
import { View, Button, StyleSheet } from 'react-native'
import {Card, Icon, Input, CheckBox } from 'react-native-elements'
import * as SecureStore from 'expo-secure-store'

const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);


    useEffect(() => {
        SecureStore.getItemAsync('userInfo')
        .then((userData)=> {
            let userInfo = JSON.parse(userData);
            if(userInfo){
                setUsername(userInfo.username);
                setPassword(userInfo.password);
                setRemember(true);
            }
        })
    }, [])

    const handleLogin = () =>{
        console.log(`${username}  ${password}`);
        if(remember){
            SecureStore.setItemAsync('userinfo', 
            JSON.stringify({username: username, password: password}))
            .then(()=> {setUsername(''); setPassword('');})
            .catch((error)=> {
                console.log('Could not save user info', error);
            })
        }
        else {
            SecureStore.deleteItemAsync('userinfo')
            .then(()=>{setUsername(''); setPassword('');})
            .catch((error)=> {
                console.log('Could not delete user info', error);
            })
        }

    }


    return (
        <View style={styles.container}>
            <Input placeholder="Username"
            leftIcon={{type : 'font-awesome', name: 'user-o'}}
            onChangeText= {(username)=> {setUsername(username)}}
            value={username}
            containerStyle={styles.formInput}/>
                       
            <Input placeholder="Password"
            leftIcon={{type : 'font-awesome', name: 'key'}}
            onChangeText= {(password)=> setPassword(password)}
            value={password}
            containerStyle={styles.formInput}/>

            <CheckBox title="Remember Me" center 
            checked={remember}
            onPress={()=> setRemember(!remember)} containerStyle={styles.formCheckbox}/>

            <View style={styles.formButton}>
                <Button 
                onPress={()=> handleLogin()}
                title="Login" color='#512DA8'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    formInput: {
        margin: 40
    },
    formCheckbox: {
        margin: 40,
        backgroundColor: null
    },
    formButton: {
        margin: 60
    }
  });

export default LoginComponent
