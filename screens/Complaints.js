import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'


export default function Complaints() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.banner}>
                    <Text style={styles.headerText}>Complaints</Text>
                </View>
            </View>
            <View style={styles.complaintBody}>
                <View style={styles.complaintItem}>
                    <TextInput style={styles.input} placeholder='Name...' />
                </View>
                <View style={styles.complaintItem}>
                    <TextInput style={styles.input} placeholder='Email...' />
                </View>
                <View style={styles.complaintItem}>
                    <TextInput style={styles.input} placeholder='In which regard...' />
                </View>
                <View style={[styles.complaintItem, { flex: 3 }]}>
                    <TextInput style={styles.input} placeholder='Complaint description...' />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => { console.log('submitted') }}>
                <View style={styles.button}>
                    <Text style={styles.textSign}>Submit</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    header: {
        flex: 1,
        flexDirection: 'column',
    },
    banner: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        letterSpacing: 1
    },
    button: {
        flex: 1,
        width: '80%',
        alignItems: 'center',
        // marginTop: 50,
        backgroundColor: '#32CD32',
        padding: '7%',
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    textSign: {
        fontSize: 18,
        color: '#fff',
        letterSpacing: 5,
        fontWeight: 'bold'
    },
    complaintBody: {
        flex: 3,
        flexDirection: 'column',
    },
    complaintItem: {
        flex: 1,
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        // flex: 1,
        width: '80%',
        height: '80%',
        // flexDirection: 'column',
        backgroundColor: '#f0f0f0',
        // borderStyle: 'none',
        // borderTopWidth: '1px',
        // borderBottomWidth: '1px',
        // borderLeftWidth: '1px',
        // borderRightWidth: '1px',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 10
    }
})