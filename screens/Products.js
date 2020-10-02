import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { TextInput } from 'react-native-paper'


export default function Products() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.banner}>
                    <Text style={styles.headerText}>Halal Products</Text>
                </View>
                <View style={styles.searchBar}>
                    <TextInput style={styles.input} placeholder='Search...' />
                </View>
            </View>
            <View style={styles.productView}>
                <View style={styles.products}>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.productText}>product #</Text>
                    </View>
                </View>
            </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
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
    }
    ,
    searchBar: {
        width: '80%',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        flex: 1,
    },
    input: {
        backgroundColor: '#f0f0f0',
        // borderStyle: 'none',
        // borderTopWidth: '1px',
        // borderBottomWidth: '1px',
        // borderLeftWidth: '1px',
        // borderRightWidth: '1px',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 20,
        shadowOpacity: 0.3,
        elevation: 20
    },
    productView: {
        flex: 2,
        flexDirection: 'column',
        width: '100%',
        // borderStyle: 'none',
        // borderTopWidth: '1px',
        // borderBottomWidth: '1px',
        // borderLeftWidth: '1px',
        // borderRightWidth: '1px',
        marginBottom: '10%',
        overflow: 'hidden',
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 20,
        shadowOpacity: 0.3,
        elevation: 5
    },
    products: {
        flex: 1,
        flexDirection: 'column',
        width: '90%',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    product: {
        width: '90%',
        // borderStyle: 'solid',
        // borderTopWidth: '1px',
        // borderBottomWidth: '1px',
        // borderLeftWidth: '1px',
        // borderRightWidth: '1px',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '3%',
        marginBottom: '2%',
        marginTop:'1%'
    },
    productText: {
        fontSize: 20
    }

})