import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

class CourseItem extends React.Component {

    render(){
        const course = this.props.course
        // traitement
        if (course.subject == 'Informatique') {
            img = require('../assets/infoIcon.png')
        } else if (course.subject == 'Mathématiques') {
            img = require('../assets/mathIcon.png')
        } else if (course.subject == 'Droit') {
            img = require('../assets/lawIcon.png')
        } else {
            img = require('../assets/courseIcon.png')
        }

        if (course.teacher.id == '1') {
            colorArray = ['#fc4a1a', '#f7b733'] // yellowOrange
        } else {
            colorArray = ['#00F260', '#0575E6'] // greenBlue
        }

        // fin traitement
        return (
            <View style = { styles.container }>
                <View style = { styles.content } >
                    <View style = { styles.iconContainer }>
                        <Image style = { styles.icon } source={ img } />
                    </View>
                    <View style = { styles.info }>
                        <Text style = { styles.info1 } >{ course.subject }</Text>
                        <Text style = { styles.info2 } >9:00 - 12:30</Text>
                        <Text style = { styles.info2 } >{ course.teacher.firstName } { course.teacher.lastName.toUpperCase() }</Text>
                    </View>
                    <View style = { styles.nbStudents }>
                        <Text style = { styles.textFirst } >{ course.present }</Text>
                        <Text style = { styles.textSecond }>/ { course.expected }</Text>
                    </View>
                </View>
                <LinearGradient
                    style = { styles.footer }
                    start = {[0, 0]}
                    end = {[1, 1]}
                    colors={colorArray}
                >
                    <Text style = { styles.footerTxt } >{ course.id }</Text>
                </LinearGradient>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container : {
        height : 100,
        width: 'auto',
        backgroundColor: 'white',
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
        elevation : 6
    },
    content: {
        flex: 8,
        flexDirection: 'row'
    },
    iconContainer: {
        flex: 1,
        borderTopLeftRadius: 3,
        padding: 6
    },
    icon: {
        resizeMode: 'contain',
        height: '100%',
        width: 'auto'
    },
    info: {
        flex: 2
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
        color: '#878485'
    },
    nbStudents: {
        flex: 1,
        borderTopRightRadius: 3
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
        borderBottomRightRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerTxt: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center'
    }
})

export default CourseItem