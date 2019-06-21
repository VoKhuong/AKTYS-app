import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { renderCourseLogo, getId, formatDateStr, getUserDisplay } from '../API/KatysAPI'

class CourseItem extends React.Component {

    constructor(props){
        super(props)
        const course = this.props.course
        this.state = {
            colorArray: ['#00F260', '#0575E6'],
            teacherName: ''
        }
        this.setFooter(course.teacherId)
        this.getTeacherName(course.teacherId)
        this.begin = formatDateStr(course.begin)
        this.end = formatDateStr(course.end)
    }

    async getTeacherName(id) {
        strTmp = await getUserDisplay(id)
        console.log(strTmp)
        this.setState({ teacherName: strTmp })
    }

    async setFooter(receivedId) {
        id = await getId()
        if (id == receivedId) {
            this.setState({ colorArray: ['#fc4a1a', '#f7b733'] })
        } else {
            this.setState({ colorArray: ['#00F260', '#0575E6'] })
        }
    }

    render(){
        const course = this.props.course
        // traitement
        img = renderCourseLogo(course.name)

        // fin traitement
        return (
            <View style = { styles.container }>
                <View style = { styles.content } >
                    <View style = { styles.iconContainer }>
                        <Image style = { styles.icon } source={ img } />
                    </View>
                    <View style = { styles.info }>
                        <Text style = { styles.info1 } >{ course.name }</Text>
                        <Text style = { styles.info2 } >{this.begin}</Text>
                        <Text style = { styles.info2 } >{this.end}</Text>
                        <Text style = { styles.info2 } >{ this.state.teacherName }</Text>
                    </View>
                    <View style = { styles.nbStudents }>
                        <Text style = { styles.textFirst } >1</Text>
                        <Text style = { styles.textSecond }>/ 20</Text>
                    </View>
                </View>
                <LinearGradient
                    style = { styles.footer }
                    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                    colors={ this.state.colorArray }
                >
                    <Text style = { styles.footerTxt } >{ course.id }</Text>
                </LinearGradient>
            </View>
        )
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