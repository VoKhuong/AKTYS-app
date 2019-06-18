import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import CourseItem from './CourseItem'

class HistoryView extends React.Component {

    render(){
        return (
            <View style = { styles.container }>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={ ({item}) => <CourseItem film = { item } /> }
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d8ddef',
        flex: 1
    }
})

export default HistoryView