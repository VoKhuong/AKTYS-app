import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

class AccountView extends React.Component {

    render(){
        return(
            <View style = {styles.background}>
                <LinearGradient style = { styles.profileImgView }
                start = {[0, 0]}
                start = {[1, 1]}
                colors={['#00F260', '#0575E6']}
                >
                    <Image source={require('../assets/profileIcon.png')} style={ styles.iconImg } />
                </LinearGradient>
                <View style = { styles.profileInfoView }>
                    <View style = { styles.layer }>
                        <Text style = { styles.labelText }>NOM :</Text>
                        <Text style = { styles.dataText }>ZEROUALI</Text>
                    </View>
                    <View style = { styles.layer }>
                        <Text style = { styles.labelText }>PRENOM :</Text>
                        <Text style = { styles.dataText }>SORAYA</Text>
                    </View>
                    <View style = { styles.layer }>
                        <Text style = { styles.labelText }>ID :</Text>
                        <Text style = { styles.dataText }>NTM</Text>
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
        this.props.navigation.navigate('Auth')
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