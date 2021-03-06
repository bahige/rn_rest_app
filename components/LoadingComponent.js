import React from 'react'
import { View, Text, ActivityIndicator,StyleSheet } from 'react-native'

const LoadingComponent = () => {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color="#512DA8"/>
            <Text style={styles.loadingText}>Loading...</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      },
      loadingText: {
        color: '#512DA8',
        fontSize: 14,
        fontWeight: 'bold'
      }
})

export default LoadingComponent
