import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Button/Button';

const SignUpScreen = ({ navigation }) => {
    const [passwordShown, setPasswordShows] = useState(false)

    const onTogglePassword = () => {
        setPasswordShows(passwordShown => !passwordShown)
    }

    const onLogIn = () => {
        navigation.replace('login')
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
                <Text style={styles.inputTitle}>Full Name</Text>
                <View style={styles.inputContainer}>
                    <TextInput cursorColor={Colors.PRIMARY} selectionColor={Colors.PRIMARY} placeholder='Enter full name' style={styles.input} />
                </View>
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

            <Button style={styles.loginButton} title={'Sign Up'} />

            <Text style={styles.or}>Or Continue With</Text>

            <View style={styles.socialContainer}>
                <Image source={require('../../../assets/google.png')} style={styles.socialIcon} resizeMode='contain' />
                <Image source={require('../../../assets/facebook.png')} style={styles.socialIcon} resizeMode='contain' />
                <Image source={require('../../../assets/apple.png')} style={styles.socialIcon} resizeMode='contain' />
            </View>

            <Text style={styles.noAccountText}>Already have an account? <Text onPress={onLogIn} style={styles.logInText}>Log In</Text></Text>
        </View>
    )
}

export default SignUpScreen

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
        marginBottom: 20
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
    logInText: {
        color: Colors.PRIMARY,
        textDecorationLine: 'underline'
    }
})