import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Button/Button';

const LoginScreen = ({ navigation }) => {
    const [passwordShown, setPasswordShows] = useState(false)

    const onTogglePassword = () => {
        setPasswordShows(passwordShown => !passwordShown)
    }

    const onSignUp = () => {
        navigation.replace('signup')
    }

    const onLogin = () => {
        navigation.replace('AppStack')
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/pizza-logo.png')}
                    style={[styles.logo]}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.inputRowContainer}>
                <Text style={styles.inputTitle}>Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput cursorColor={Colors.PRIMARY} selectionColor={Colors.PRIMARY} placeholder='Enter email address' style={styles.input} />
                </View>
            </View>

            <View style={styles.inputRowContainer}>
                <Text style={styles.inputTitle}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput secureTextEntry={!passwordShown} cursorColor={Colors.PRIMARY} selectionColor={Colors.PRIMARY} placeholder='Enter password' style={styles.input} />
                    <Ionicons onPress={onTogglePassword} name={passwordShown ? "eye-outline" : 'eye-off-outline'} size={24} color={Colors.SECONDARY_TEXT} />
                </View>
            </View>

            <Text style={styles.forgetPassword}>Forget Password?</Text>

            <Button style={styles.loginButton} title={'Login'} onPress={onLogin} />

            <Text style={styles.or}>Or Continue With</Text>

            <View style={styles.socialContainer}>
                <Image source={require('../../../assets/google.png')} style={styles.socialIcon} resizeMode='contain' />
                <Image source={require('../../../assets/facebook.png')} style={styles.socialIcon} resizeMode='contain' />
                <Image source={require('../../../assets/apple.png')} style={styles.socialIcon} resizeMode='contain' />
            </View>

            <Text style={styles.noAccountText}>Don't have an account? <Text onPress={onSignUp} style={styles.signUpText}>Sign Up</Text></Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 15
    },
    imageContainer: {
        width: "60%",
        aspectRatio: 1,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.PRIMARY,
        marginBottom: 40
    },
    logo: {
        height: '90%',
        width: '90%'
    },
    inputRowContainer: {
        width: "100%",
        marginBottom: 15
    },
    inputTitle: {
        fontSize: 16,
        color: Colors.PRIMARY,
        marginBottom: 6
    },
    inputContainer: {
        width: '100%',
        backgroundColor: "#dfdfdf",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 11,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: 19,
    },
    forgetPassword: {
        width: '100%',
        textAlign: 'right',
        color: Colors.PRIMARY,
        marginBottom: 40
    },
    or: {
        width: "100%",
        fontSize: 17,
        textAlign: "center",
        marginBottom: 25,
        fontWeight: "bold"
    },
    loginButton: {
        marginBottom: 20
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center",
        width: "100%",
        marginBottom: 30
    },
    socialIcon: {
        width: 45,
        aspectRatio: 1
    },
    noAccountText: {
        fontSize: 17,
        color: Colors.SECONDARY_TEXT
    },
    signUpText: {
        color: Colors.PRIMARY,
        textDecorationLine: 'underline'
    }
})