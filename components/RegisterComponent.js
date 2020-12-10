import React, { useState } from 'react'
import { View, Text, StyleSheet,ScrollView, Image } from 'react-native'
import { Icon, CheckBox, Input, Button} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as Permissions from 'expo-permissions';
import * as SecureStore from 'expo-secure-store';
import {baseUrl} from '../shared/baseUrl'

const RegisterComponent = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [remember, setRemember] = useState(false);
    const [imageUrl, setImageUrl] = useState(`${baseUrl}images/logo.png`);
    
    const getImageFromCam = async () => {
        const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
        const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        if(cameraPermission.status==='granted' && cameraRollPermission.status==='granted'){
            let capturedImage = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect:[4,4]
            });
            if(!capturedImage.cancelled){
                console.log(capturedImage);
                // setImageUrl(capturedImage.uri);
                processImage(capturedImage.uri);
            }
        }

    }


    const getImageFromGallery = async () => {
        const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
        const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        if(cameraPermission.status==='granted' && cameraRollPermission.status==='granted'){
            let capturedImage = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect:[4,4]
            });
            if(!capturedImage.cancelled){
                console.log(capturedImage);
                // setImageUrl(capturedImage.uri);
                processImage(capturedImage.uri);
            }
        }

    }

    const processImage = async (imageUrl) => {
        let processImage = await ImageManipulator.manipulateAsync(imageUrl, 
            [ { resize : {width: 400}}], {format : 'png'});

            console.log(processImage.uri);
            setImageUrl(processImage.uri);
    }

    const handleRegister = () => {
        console.log(`${username}  ${password} ${firstName} ${lastName} ${email}`);
        if(remember){
            SecureStore.setItemAsync('userinfo',       
            JSON.stringify({username: username, password: password}))
            .catch((err)=> console.log('Could not save user info', err)); 
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri:imageUrl}} loadingIndicatorSource={require('./images/logo.png')}
                    style={styles.image}/>
                    <Button title="Camera" onPress={()=> getImageFromCam()}/>
                    <Button title="Gallery" onPress={()=> getImageFromGallery()}/>
                </View>
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

            <Input placeholder="First Name"
            leftIcon={{type : 'font-awesome', name: 'user-o'}}
            onChangeText= {(firstName)=> setFirstName(firstName)}
            value={firstName}
            containerStyle={styles.formInput}/>

            <Input placeholder="Last Name"
            leftIcon={{type : 'font-awesome', name: 'user-o'}}
            onChangeText= {(lastName)=> setLastName(lastName)}
            value={lastName}
            containerStyle={styles.formInput}/>

            <Input placeholder="Email"
            leftIcon={{type : 'font-awesome', name: 'envelope-o'}}
            onChangeText= {(email)=> setEmail(email)}
            value={email}
            containerStyle={styles.formInput}/>

            <CheckBox title="Remember Me" center 
            checked={remember}
            onPress={()=> setRemember(!remember)} containerStyle={styles.formCheckbox}/>

            <View style={styles.formButton}>
                <Button 
                onPress={()=> handleRegister()}
                title="Register" color='#512DA8'
                icon={<Icon  name='user-plus' type='font-awesome'  size={24}
                color= 'white'></Icon>}/>
            </View>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        width: '100%'
    },
    image: {
      margin: 10,
      width: 80,
      height: 60
    },
    formInput: {
        margin: 20
    },
    formCheckbox: {
        margin: 20,
        backgroundColor: null
    },
    formButton: {
        margin: 20
    }
});

export default RegisterComponent
