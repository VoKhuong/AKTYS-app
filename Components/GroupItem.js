import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {
    StackNavigator, NavigationEvents, createAppContainer, createStackNavigator,
    createBottomTabNavigator, createSwitchNavigator, withNavigation
} from 'react-navigation'
import { renderCourseLogo } from '../API/KatysAPI'

class GroupItem extends React.Component {

    render() {
        const group = this.props.group

        // traitement
        img = renderCourseLogo(group.subject)

        if (group.teacher.id == '1') {
            colorArray = ['#16222A', '#3A6073'] // yellowOrange
        } else {
            colorArray = ['#00F260', '#0575E6'] // greenBlue
        }


        // fin traitement
        return (
            <LinearGradient style = { styles.container }
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                colors={['#f5f7fa', '#c3cfe2']}
            >
                <TouchableOpacity style = { styles.touch } >
                <View style={styles.second}>
                    <Text style={styles.appel} >Faire l'appel </Text>
                </View>
                <View style={styles.second}>
                    <Image style={styles.icon} source={img} />
                </View>
                <View style={styles.first}>
                    <Text style={styles.info1} >{group.subject}</Text>
                    <Text style={styles.info2} >9:00 - 12:30</Text>
                </View>
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 'auto',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 3,
        shadowColor: 'black',

        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 6
    },
    icon: {
        resizeMode: 'contain',
        height: '80%'
    },
    first : {
        flex: 4,
        flexDirection: 'column'
    },
    info1: {
        flex: 2,
        fontSize: 22,
        padding: 6,
        color: '#231f20'
    },
    info2: {
        flex: 1,
        paddingBottom: 4,
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 12,
        color: '#231f20'//'#878485'
    },
    appel:{
        color:'#66877e',
        fontSize:30,
        display:'flex',
        textAlign:'center'
    },
    textFirst: {
        flex: 3,
        fontSize: 38,
        paddingLeft: 10,
        color: '#09bc8a'
    },
    textSecond: {
        flex: 2,
        fontSize: 26,
        textAlign: 'right',
        paddingRight: 10,
        paddingBottom: 8,
        color: '#4CCEA9'
    },
    second : {
        flex : 3,
        justifyContent: 'center',
        alignItems : 'center'
    },
    touch : {
        flex: 1,
        flexDirection: 'row'
    }
})

//export default GroupItem
export default withNavigation(GroupItem)
