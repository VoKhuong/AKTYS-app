import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { logOut, getUser } from '../API/KatysAPI'

class AccountView extends React.Component {

    constructor(props) {
        super(props)
        nullUser = {
            'firstName': '',
            'lastName': '',
            'trigram': ''
        }
        this.state = {
            user: nullUser
        }
        this.fetchData()
    }

    render(){
        return (
            <View style = {styles.background}>
                <LinearGradient style = { styles.profileImgView }
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                colors={['#00F260', '#0575E6']}
                >
                    <Image source={require('../assets/profileIcon.png')} style={ styles.iconImg } />
                </LinearGradient>
                <View style = { styles.profileInfoView }>
                    <View style = { styles.layer }>
                        <Text style = { styles.labelText }>NOM :</Text>
                        <Text style = { styles.dataText }>{ this.state.user.lastName.toUpperCase() }</Text>
                    </View>
                    <View style = { styles.layer }>
                        <Text style = { styles.labelText }>PRENOM :</Text>
                        <Text style = { styles.dataText }>{ this.state.user.firstName.toUpperCase() }</Text>
                    </View>
                    <View style = { styles.layer }>
                        <Text style = { styles.labelText }>ID :</Text>
                        <Text style = { styles.dataText }>{ this.state.user.trigram.toUpperCase() }</Text>
                    </View>
                </View>
                <View style = { styles.buttonView }>
                    <TouchableOpacity style = { styles.btn } onPress = { () => this.onPressBtnDeco() } >
                        <Text style = {styles.textBtn}>DECONNEXION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    onPressBtnDeco(){
        logOut()
        this.props.navigation.navigate('Auth')
    }

    async fetchData(){
        this.setState({ user: await getUser() })
    }
}

const styles = StyleSheet.create({
    background : {
        backgroundColor: '#d8ddef',
        flex: 1
    },
    profileImgView : {
        backgroundColor: 'blue',
        flex: 2,
        justifyContent: 'center'
    },
    iconImg : {
        height: '60%',
        width: 'auto',
        resizeMode: 'contain',
        marginTop: '5%'
    },
    profileInfoView : {
        flex: 2,
        justifyContent: 'center'
    },
    layer : {
        flexDirection: 'row',
        marginBottom: 10
    },
    labelText : {
        flex: 2,
        fontSize: 20,
        paddingLeft: 40,
        paddingRight: 40,
        color: '#231f20'
    },
    dataText : {
        flex: 3,
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#09bc8a'
    },
    buttonView : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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

export default AccountView