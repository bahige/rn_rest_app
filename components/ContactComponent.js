import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Card, Button, Icon} from 'react-native-elements'
import *  as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';


const ContactComponent = () => {

    const sendEmail = () =>{
        MailComposer.composeAsync({
            recipients:['bahigesaab8@gmail.com'],
            subject:"Enquiry",
            body: "To whom it may concern: "
        })
    }

    return (
        <View style={{marginTop:"10%", marginBottom:"10%"}}>
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <Card>
                <Card.Title> Contact Information </Card.Title>
                <Card.Divider/>
                <Text style={styles.addressItem}>121, Clear Water Bay Road</Text>
                <Text style={styles.addressItem}>Clear Water Bay, Kowloon</Text>
                <Text style={styles.addressItem}>HONG KONG</Text>
                <Text style={styles.addressItem}>Tel: +852 1234 5678</Text>
                <Text style={styles.addressItem}>Fax: +852 8765 4321</Text>
                <Text style={styles.addressItem}>Email:confusion@food.net</Text>
                <Button title="Send Email" buttonStyle={{backgroundColor:"#512DA8"}}
                icon={<Icon name='envelope-o' type='font-awesome' color='white'/>}
                onPress= {()=> sendEmail()}/>
            </Card>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    addressItem :{
        fontWeight:'bold',
        padding: '1%'
    }
})

export default ContactComponent
