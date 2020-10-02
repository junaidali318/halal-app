import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'


export default function Camera() {

    return (
        <View style={styles.container}>
            <Text>Camera Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
})