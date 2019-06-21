import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import {
    StackNavigator, NavigationEvents, createAppContainer, createStackNavigator,
    createBottomTabNavigator, createSwitchNavigator, withNavigation
} from 'react-navigation'
import PictureView from './PictureView';
import TakePictureView from './TakePictureView';




class GroupItem extends React.Component {

    render() {
        const group = this.props.group

        // traitement
        if (group.subject == 'J2E') {
            img = require('../assets/javaIcon.png')
        } else if (group.subject == 'UML') {
            img = require('../assets/UMLIcon.png')
        } else if (group.subject == 'CPOA') {
            img = require('../assets/CPOAIcon.png')
        } else {
            img = require('../assets/groupIcon.png')
        }


        if (group.teacher.id == '1') {
            colorArray = ['#16222A', '#3A6073'] // yellowOrange
        } else {
            colorArray = ['#00F260', '#0575E6'] // greenBlue
        }


        // fin traitement
        return (
            <View style={styles.container}>
            <LinearGradient style = { styles.header }
                start = {[0, 0]}
                end = {[1, 1]}
                colors={['#f5f7fa', '#c3cfe2']}
            >
                <View style={styles.content} >

                <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Auth')} title='Faire appel'>
                        <Text style={styles.appel} >Faire l'appel </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Auth')} title='Faire appel'>
                            <Image style={styles.icon} source={img} />
                        </TouchableOpacity>
                    </View>



                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Auth')} title='Faire appel'>
                        <View style={styles.info}>
                            <Text style={styles.info1} >{group.subject}</Text>
                            <Text style={styles.info2} >9:00 - 12:30</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <LinearGradient
                    style={styles.footer}
                    start={[0, 0]}
                    end={[1, 1]}
                    colors={colorArray}
                />
            </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',//gris
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
    content: {
        flex: 8,
        flexDirection: 'row'
    },
    iconContainer: {
        flex: 1,
        borderTopLeftRadius: 3,
        padding: 6,
    },
    icon: {
        resizeMode: 'contain',
        height: '100%',
        width: 'auto'
    },
    info: {
        flex: 5,
        backgroundColor: 'transparent',
        textAlign:'right'
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
    FaireAppel: {
        flex: 1,
        borderTopRightRadius: 3,
        padding: 6,
    },
    action: {
        backgroundColor: 'transparent'
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
    footer: {
        flex: 2,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    header: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

//export default GroupItem
export default withNavigation(GroupItem)
