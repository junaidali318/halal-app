import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function Login(props) {
    const [data, setData] = useState({
        email: '',
        password: '',
        cnfrmPass: '',
        inputChangeHandler: false,
        secureTextEntry: true,
        cnfrm_secureTextEntry: true
    })

    const emailChangeHandler = value => {
        if (value.length !== 0)
            setData({
                ...data,
                email: value,
                inputChangeHandler: true
            })
        else
            setData({
                ...data,
                email: value,
                inputChangeHandler: false
            })
    }

    const passwordChangeHandler = value => {
        setData({
            ...data,
            password: value
        })
    }

    const confirmPasswordChangeHandler = value => {
        setData({
            ...data,
            cnfrmPass: value
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            cnfrm_secureTextEntry: !data.cnfrm_secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View
                animation='fadeInUpBig'
                style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Email...'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => emailChangeHandler(val)}
                    />
                    {data.inputChangeHandler ?
                        <Animatable.View animation='bounceIn'>
                            <Feather
                                name='check-circle'
                                color='green'
                                size={20}
                            />
                        </Animatable.View> : null}
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='lock'
                        color='#05375a'
                        size={25}
                    />
                    <TextInput
                        placeholder='Your Password...'
                        secureTextEntry={data.secureTextEntry}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={val => passwordChangeHandler(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Feather
                                name='eye-off'
                                color='grey'
                                size={20}
                            /> :
                            <Feather
                                name='eye'
                                color='grey'
                                size={20}
                            />}
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='lock'
                        color='#05375a'
                        size={25}
                    />
                    <TextInput
                        placeholder='Confirm Password...'
                        secureTextEntry={data.cnfrm_secureTextEntry}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={val => confirmPasswordChangeHandler(val)}
                    />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        {data.cnfrm_secureTextEntry ?
                            <Feather
                                name='eye-off'
                                color='grey'
                                size={20}
                            /> :
                            <Feather
                                name='eye'
                                color='grey'
                                size={20}
                            />}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => console.log('Sucessfully Logged In...')}>
                    <View style={styles.button}>
                        <Text style={styles.textSign}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15,
                        borderRadius: 20,
                        padding: '5%'
                    }]}>
                    <Text style={[styles.textSign, { color: 'black' }]}>Sign In</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        marginLeft: '2%',
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        // width:'80%',
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: '#32CD32',
        padding: '5%',
        borderRadius: 20,
        justifyContent: 'center'
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        color: '#fff',
        letterSpacing: 2,
        fontWeight: 'bold'
    }
})