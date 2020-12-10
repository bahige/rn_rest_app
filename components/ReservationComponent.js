import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Switch, Button, Modal, Alert, Platform } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Datepicker from 'react-native-datepicker';
import * as Animatable from 'react-native-animatable';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import * as Calendar from 'expo-calendar';

const ReservationComponent = () => {
    const [guests, setGuests] = useState(1);
    const [smoking, setSmoking] = useState(false);
    const [date, setDate] = useState(Date.now());
    const [modalVisible, setModalVisible] = useState(false);

  

    const handleReservation=() => {
        console.log(`A reservation for ${guests} guests, ${smoking} class was made on ${date}.`);
        addReservationToCalendar(date);
        presentLocalNotification(date);
        resetForm();
    }

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    const resetForm= () => {
        setGuests(1);
        setSmoking(false);
        setDate(Date.now());
    }

    const openAlert = ()=>{
        Alert.alert(
            "Is Your Reservation OK?",
            `Number of Guests: ${guests} \n Smoking? ${smoking? "Yes" :"No"} \n Date and Time: ${date}.`,
            [ {
                text: "Cancel",
                onPress: () => resetForm(),
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => {handleReservation();},
                style: "cancel"
            },
        ],
            {cancelable: false}
        )
    }

    const obtainNotificationPermission= async () => {
        let permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);

        if(permission.status!== 'granted'){
            permission = await Permissions.askAsync (Permissions.USER_FACING_NOTIFICATIONS);
            if (permission.status !== 'granted') {
                Alert.alert("Permission not granted to show notifications.")
            }
        }
        return permission;
    }


    const presentLocalNotification = async (date) => {
        await obtainNotificationPermission();
        Notifications.presentNotificationAsync({
            title: 'Your Reservation',
            body: 'Reservation for '+ date + ' requested',
            ios: {
                sound: true
            },
            android: {
                sound: true,
                vibrate: true,
                color: '#512DA8'
            }
        })
    }


    const obtainCalendarPermission = async () => {
        let permission = await Permissions.getAsync(Permissions.CALENDAR);

        if(permission.status!== 'granted'){
            permission = await Permissions.askAsync (Permissions.CALENDAR);
            if (permission.status !== 'granted') {
                Alert.alert("Permission not granted to access calendar.")
            }
        }
        return permission;

    }

    const obtainDefaultCalendar = async () =>{
        let calendar = null;
        if (Platform.OS === 'ios'){
            calendar = await Calendar.getDefaultCalendarAsync();
        } else {
            calendars = await Calendar.getCalendarsAsync();
            calendar= calendars ? calendars.find((cal)=> cal.isPrimary) || calendars[0] : null;
        }

        return calendar ? calendar.id.toString() : null;
    }


    const addReservationToCalendar = async (date) => {
        await obtainCalendarPermission();
        let calendarId = await obtainDefaultCalendar();
        const startDate = new Date(Date.parse(date));
        const endDate = new Date(Date.parse(date) + 2 * 60 * 60 * 1000);
        const newcalendarId = await Calendar.createEventAsync(calendarId, {
            title: "Confusion Table Reservation",
            location: '121, Clear Water Bay Road, Clear Water Bay, Kowloon, Hong Kong',
            startDate: startDate,
            endDate: endDate,
            timeZone: 'Asia/Hong_Kong',
        });
    
    }

    return (
    <ScrollView>
        <Animatable.View duration={2000} animation="zoomIn">
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
            onPress={()=>openAlert()}
            accessibilityLabel="Learn More about this purple button" ></Button>
        </View>
    </Animatable.View>

        {/* <Modal animationType="slide" transparent={false} visible={modalVisible}
        onRequestClose={()=> {toggleModal(); resetForm()}}>
        <View style={styles.modal}>
            <Text style={styles.modalTitle}> Your Reservation </Text>
            <Text style={styles.modalText}> Number of Guests : {guests} </Text>
            <Text style={styles.modalText}> Smoking? : {smoking ===true ? "Yes" : "No"} </Text>
            <Text style={styles.modalText}> Date : {date.toString()} </Text>
            <Button   color="#512DA8" title="Close" onPress={()=> {toggleModal(); resetForm()}}/>
        </View>
        </Modal> */}
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
