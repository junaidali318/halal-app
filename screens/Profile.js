import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Texttext
} from 'react-native'


export default function Profile() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.banner}>
                    <Text style={styles.headerText}>Your Account</Text>
                </View>
            </View>
            <View style={styles.accountBody}>
                <View style={styles.accountItem}>
                    <Text style={styles.text}>admin</Text>
                </View>
                <View style={styles.accountItem}>
                    <Text style={styles.text}>admin@admin.com</Text>
                </View>
                <View style={styles.accountItem}>
                    <Text style={styles.text}>********</Text>
                </View>

                <View style={styles.accountItem}>
                    <Text style={[styles.text, {
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }]}>Add Ingredient</Text>
                </View>
                <View style={styles.accountItem}>
                    <Text style={[styles.text, {
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }]}>Add Product</Text>
                </View>
                <View style={styles.accountItem}>
                    <Text style={[styles.text, {
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }]}>Sign Out</Text>
                </View>
            </View>
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
        // flexDirection: 'column',
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
    accountBody: {
        flex: 4,
        flexDirection: 'column'
    },
    accountItem: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        width: '80%',
        // marginTop: '2%',
        marginBottom: '5%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        fontSize: 20,
        // fontWeight: 'bold',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 5,
        marginRight: 0,
    }
})