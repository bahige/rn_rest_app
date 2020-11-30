import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Card} from 'react-native-elements'

const ContactComponent = () => {
    return (
        <View style={{marginTop:"10%", marginBottom:"10%"}}>
            <Card>
                <Card.Title> Contact Information </Card.Title>
                <Card.Divider/>
                <Text style={styles.addressItem}>121, Clear Water Bay Road</Text>
                <Text style={styles.addressItem}>Clear Water Bay, Kowloon</Text>
                <Text style={styles.addressItem}>HONG KONG</Text>
                <Text style={styles.addressItem}>Tel: +852 1234 5678</Text>
                <Text style={styles.addressItem}>Fax: +852 8765 4321</Text>
                <Text style={styles.addressItem}>Email:confusion@food.net</Text>
            </Card>
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
