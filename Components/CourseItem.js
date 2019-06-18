import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

class CourseItem extends React.Component {

    render(){
        const course = this.props.course
        // traitement
        colorArray = ['#00F260', '#0575E6']
        // fin traitement
        return (
            <LinearGradient style = { styles.container }
            elevation = { 12 }
            start = {[0, 0]}
            end = {[1, 1]}
            colors={colorArray}
            >
            </LinearGradient>
        )
    }

}

const styles = StyleSheet.create({
    container : {
        height : 80,
        width: 'auto',
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 3,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 3,
        shadowOpacity: 1
    }
})

export default CourseItem