import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ActivityIndicator, StatusBar } from 'react-native'
import { logIn, isLoggedIn } from '../API/KatysAPI'

class LogInView extends React.Component {

    constructor(props) {
        super(props)
        this.redirect()
        this.state = {
          isLoading: false
        }
        this.mail = ''
        this.password = ''
    }

    render(){
        if (this.state.isLoading) {
            btn = (<View style = { [styles.btn, styles.btnLoad] } >
                        <ActivityIndicator size="large" color="#d8ddef" />
                    </View>)
        } else {
            btn = (<TouchableOpacity style = { styles.btn } onPress = { () => this.onPressBtn() } >
                        <Text style = {styles.textBtn}>CONNEXION</Text>
                    </TouchableOpacity>)
        }
        return (
            <ImageBackground source={require('../assets/LogIn_bg.jpg')} style={ styles.ImageBackground } resizeMode='cover'>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0);" barStyle="light-content" translucent={ true } />
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
                    { btn }
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

    async onPressBtn() {
        this.setState({ isLoading: true })
        console.log(this.mail)
        console.log(this.password)
        response = await logIn(this.mail, this.password)
        console.log(response)
        if (response){
            this.props.navigation.navigate('App')
        } else {
            this.setState({ isLoading: false })
        }
    }

    async redirect() {
        if (await isLoggedIn()){
            this.props.navigation.navigate('App')
        }
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
    btnLoad : {
        backgroundColor: 'rgba(9, 188, 138, 0.6)'
    },
    textBtn : {
        width: '100%',
        fontSize: 24,
        textAlign: 'center',
        color: '#d8ddef'
    }
})

export default LogInView