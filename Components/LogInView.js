import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { logIn } from '../API/KatysAPI'

class LogInView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          isLoading: false
        }
        this.mail = ''
        this.password = ''
      }

    render(){
        return (
            <ImageBackground source={require('../assets/LogIn_bg.jpg')} style={ styles.ImageBackground } resizeMode='cover'>
                <View style={ styles.LogoView }>
                    <Image source={require('../assets/logo.png')} style={ styles.LogoImg } />
                </View>
                <View style={ styles.formView }>
                    <TextInput
                        placeholder = "email@email.com"
                        onChangeText={(text) => this._mailChanged(text)}
                        autoFocus = { true }
                        style = { styles.TextInput }
                    />
                    <TextInput
                        placeholder = "Password"
                        onChangeText={(text) => this._passwordChanged(text)}
                        secureTextEntry = { true }
                        style = { styles.TextInput }
                    />
                    <TouchableOpacity style = { styles.btn } onPress = { () => this.onPressBtn() } >
                        <Text style = {styles.textBtn}>CONNEXION</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

    _mailChanged(text) {
        this.mail = text
    }

    _passwordChanged(text) {
        this.password = text
    }

    onPressBtn() {
        this.setState({ isLoading: true })
        console.log(this.mail)
        console.log(this.password)
        logIn(this.mail, this.password).then(data => {
            console.log(data)
        })
        //this.props.navigation.navigate('App')
    }

}

const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1,
    },
    LogoView: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    LogoImg: {
        height: '60%',
        width: 'auto',
        resizeMode: 'contain',
    },
    formView : {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInput : {
        height: 50,
        borderRadius: 25,
        paddingLeft: 25,
        paddingRight: 25,
        width: '80%',
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.25)'
    },
    btn : {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#09bc8a'
    },
    textBtn : {
        width: '100%',
        fontSize: 24,
        textAlign: 'center',
        color: '#d8ddef'
    }
})

export default LogInView