import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {
    StackNavigator, NavigationEvents, createAppContainer, createStackNavigator,
    createBottomTabNavigator, createSwitchNavigator, withNavigation
} from 'react-navigation'
import { renderCourseLogo, formatDateStr } from '../API/KatysAPI'
import ImagePicker from 'react-native-image-picker'

class GroupItem extends React.Component {

    constructor(props) {
        super(props)
        this.group = this.props.group
        this.begin = formatDateStr(this.group.begin)
        this.end = formatDateStr(this.group.end)
        this.img = renderCourseLogo(this.group.name)
    }

    render() {

        // traitement

        // fin traitement
        return (
                <TouchableOpacity style = { styles.touch } onPress={ () => this.doAllStuff() } >
                    <View style={styles.container}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={ this.img } />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.info1} >{this.group.name}</Text>
                            <Text style={styles.info2} >{ this.begin }</Text>
                            <Text style={styles.info2} >{ this.end }</Text>
                        </View>
                    </View>
                    <LinearGradient style = { styles.footer }
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                colors={['#667eea', '#764ba2']} />
            </TouchableOpacity>
        )
    }

    doAllStuff() {
        this.props.navigation.navigate('TakePicture', { course : this.group })
    }
}

const styles = StyleSheet.create({
    touch: {
        height: 100,
        width: 'auto',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 3,
        shadowColor: 'black',
        backgroundColor: 'white',

        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 6,
        
    },
    container: {
        flex: 4,
        flexDirection: 'row'
    },
    footer: {
        flex: 1,
        width: 'auto',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        marginRight: 0,
        marginLeft: 0,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    icon: {
        resizeMode: 'contain',
        height: '80%'
    },
    info: {
        flex: 3,
        flexDirection: 'column'
    },
    info1 : {
        flex: 2,
        fontSize: 22,
        padding: 6,
        color: '#231f20'
    },
    info2 : {
        flex: 1,
        paddingBottom: 4,
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 12,
        color: '#878485'
    }
})

//export default GroupItem
export default withNavigation(GroupItem)
