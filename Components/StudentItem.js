import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { getStudent } from '../API/KatysAPI'
import LinearGradient from 'react-native-linear-gradient'

class StudentItem extends React.Component {
    constructor(props) {
        super(props)
        this.studentId = this.props.student
        console.log(this.studentId)
        console.log(this.status)
        this.state = {
            student: {
                firstName: '',
                lastName: '',
                mail: ''
            }
        }
        this.img = require('../assets/errorIcon.png')
        this._getStudent(this.studentId)
    }

    render() {
        console.log(this.state.student)
        return (
            <View style = { styles.container } >
                <View style = { styles.content } >
                    <View style = { styles.iconContainer }>
                        <Image style = { styles.icon } source={ require('../assets/studentIcon.png') } />
                    </View>
                    <View style = { styles.info }>
                        <Text style = { styles.info1 } >{ this.state.student.firstName + ' ' + this.state.student.lastName }</Text>
                        <Text style = { styles.info2 } >{this.state.student.mail}</Text>
                    </View>
                    <View style = { styles.status }>
                        <Image style = { styles.iconStatus } source={ this.img } />
                    </View>
                </View>
                <LinearGradient
                    style = { styles.footer }
                    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} 
                    colors={ ['#f7ff00', '#db36a4'] }
                >
                    <Text style = { styles.footerTxt } >{ this.studentId }</Text>
                </LinearGradient>
            </View>
        )
    }

    async _getStudent(id) {
        tmp = await getStudent(id)
        this.setState({
            student: tmp
        })
    }
}

const styles = StyleSheet.create({
    container : {
        height : 120,
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
    iconStatus: {
        resizeMode: 'contain',
        height: '60%'
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
    status: {
        flex: 1,
        borderTopRightRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
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

export default StudentItem