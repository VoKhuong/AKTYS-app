import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import CourseItem from './CourseItem'

class HistoryView extends React.Component {

    render(){
        return (
            <View style = { styles.container }>
                <LinearGradient style = { styles.header }
                    start = {[0, 0]}
                    end = {[1, 1]}
                    colors={['#00F260', '#0575E6']}
                >
                    <Image style = { styles.iconImg } source={require('../assets/historyBigIcon.png')} />
                </LinearGradient>
                <FlatList
                    data={[{id: '1', subject: 'Informatique', teacher: {firstName: 'Jean-Jacques', lastName: 'gogo', id: '1'}, present: 12, expected: 20}, {id: '2', subject: 'Mathématiques', teacher: {firstName: 'Jean-Jacques', lastName: 'gogo', id: '2'}, present: 12, expected: 20}, {id: '3', subject: 'Droit', teacher: {firstName: 'Jean-Jacques', lastName: 'gogo', id: '3'}, present: 12, expected: 20}, {id: '4', subject: 'dunno', teacher: {firstName: 'Jean-Jacques', lastName: 'gogo', id: '4'}, present: 12, expected: 20}]}
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

export default HistoryView