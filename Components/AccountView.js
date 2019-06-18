import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

class AccountView extends React.Component {

    render(){
        return(
            <View style = {styles.background}>
                <View style = { styles.profileImgView }>
                    <Image source={require('../assets/profileIcon.png')} style={ styles.iconImg } />
                </View>
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
                    <TouchableOpacity style = { styles.btn } onPress = { () => this.onPressBtn() } >
                        <Text style = {styles.textBtn}>DECONNEXION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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
        justifyContent: 'flex-end'
    },
    iconImg : {
        height: '60%',
        width: 'auto',
        resizeMode: 'contain'
    },
    profileInfoView : {
        flex: 2,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    layer : {
        backgroundColor: 'green',
        flexDirection: 'row',
        marginBottom: 10
    },
    labelText : {
        flex: 2,
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    dataText : {
        flex: 3,
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    buttonView : {
        flex: 1,
        backgroundColor: 'yellow'
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
        backgroundColor: 'red',
        color: '#d8ddef'
    }
})

export default AccountView