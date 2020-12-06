import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Switch, Button, Modal } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Datepicker from 'react-native-datepicker';

const ReservationComponent = () => {
    const [guests, setGuests] = useState(1);
    const [smoking, setSmoking] = useState(false);
    const [date, setDate] = useState(Date.now());
    const [modalVisible, setModalVisible] = useState(false);

    const handleReservation=() => {
        console.log(`A reservation for ${guests} guests, ${smoking} class was made on ${date}.`);
    }

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    const resetForm= () => {
        setGuests(1);
        setSmoking(false);
        setDate(Date.now());
    }


    return (
    <ScrollView>
        <View style={styles.formRow}>
            <Text style={styles.formLabel}>Number of Guests </Text>
            <Picker style={styles.formItem} selectedValue={guests}
            onValueChange={(itemValue, itemIndex)=>{setGuests(itemValue)}}>
                <Picker.Item label='1' value='1'/>
                <Picker.Item label='2' value='2'/>
                <Picker.Item label='3' value='3'/>
                <Picker.Item label='4' value='4'/>
                <Picker.Item label='5' value='5'/>
                <Picker.Item label='6' value='6'/>
            </Picker>
        </View>
        <View style={styles.formRow}>
            <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
            <Switch style={styles.formItem} value={smoking}
            trackColor='#512DA8' onValueChange={(value)=>{setSmoking(value)}} ></Switch>
        </View>
        <View style={styles.formRow}>
            <Text style={styles.formLabel}>Date and Time</Text>
            <Datepicker style={{flex:2, marginRight:20}}
            date={date}
            mode='date'
            format=''
            placeholder='Select Date and Time'
            minDate='2020-01-01'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={
                {dateIcon:{
                    position:"absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput:{
                    marginLeft:36
                } }
            }
            onDateChange={(date)=>{setDate(date)}}/>
        </View>
        <View style={styles.formRow}>
            <Button title="Reserve" color='#512DA8' 
            onPress={()=>{handleReservation(); toggleModal(); resetForm()}}
            accessibilityLabel="Learn More about this purple button" ></Button>
        </View>

        <Modal animationType="slide" transparent={false} visible={modalVisible}
        onRequestClose={()=> {toggleModal(); resetForm()}}>
        <View style={styles.modal}>
            <Text style={styles.modalTitle}> Your Reservation </Text>
            <Text style={styles.modalText}> Number of Guests : {guests} </Text>
            <Text style={styles.modalText}> Smoking? : {smoking ===true ? "Yes" : "No"} </Text>
            <Text style={styles.modalText}> Date : {date.toString()} </Text>
            <Button   color="#512DA8" title="Close" onPress={()=> {toggleModal(); resetForm()}}/>
        </View>
        </Modal>
    </ScrollView>
    )
}


const styles = StyleSheet.create({
    formRow: {
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
        flexDirection: "row",
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem:{
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
     },
     modalTitle: {
         fontSize: 24,
         fontWeight: 'bold',
         backgroundColor: '#512DA8',
         textAlign: 'center',
         color: 'white',
         marginBottom: 20
     },
     modalText: {
         fontSize: 18,
         margin: 10
     }   
})

export default ReservationComponent
