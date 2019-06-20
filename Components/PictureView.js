import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CourseItem from './CourseItem'

class PictureView extends React.Component{
render(){
    return (
        <View style = { styles.container }>
            <LinearGradient style = { styles.header }
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                colors={['#00F260', '#0575E6']}
            >
                <Image style = { styles.iconImg } source={require('../assets/historyBigIcon.png')} />
            </LinearGradient>
            <FlatList
                data={[{subject: 'Informatique', teacher: {firstName: 'Jean-Jacques', lastName: 'gogo', id: '1'}, present: 12, expected: 20}, {subject: 'Mathématiques', teacher: {firstName: 'Jean-Jacques', lastName: 'gogo', id: '2'}, present: 12, expected: 20}, {subject: 'Droit', teacher: {firstName: 'Jean-Jacques', lastName: 'gogo', id: '3'}, present: 12, expected: 20}, {subject: 'dunno', teacher: {firstName: 'Jean-Jacques', lastName: 'gogo', id: '4'}, present: 12, expected: 20}]}
                renderItem={ ({item}) => <CourseItem course = { item } /> }
            />
        </View>
    )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d8ddef',
        flex: 1
    },
    header: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImg: {
        height: '60%',
        resizeMode: 'contain',
        marginTop: '5%'
    }
})



export default PictureView