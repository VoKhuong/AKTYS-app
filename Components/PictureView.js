import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import GroupItem from './GroupItem'


class PictureView extends React.Component{
render(){
    return (
        <View style = { styles.container }>
            <LinearGradient style = { styles.header }
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                colors={['#667eea', '#764ba2']}
            >
                <Image style = { styles.iconImg } source={require('../assets/bookIcon.png')} />
            </LinearGradient>
            <FlatList
                data={[
                    {id: '1', subject: 'J2E', time:'9h30-11h', teacher: {action: 'Faire l"appel', id: '1'}, expected: 20},
                    {id: '2', subject: 'UML', time:'9h30-11h', teacher: {action: 'Faire l"appel', id: '1'}, expected: 17},
                    {id: '3', subject: 'CPOA', time:'11h-12h30',teacher: {action: 'Faire l"appel', id: '1'}, expected: 13}, 
                    {id: 'soleil', subject: 'Java',time:'14h-15h30', teacher: {action: 'Faire l"appel', id: '1'}, expected: 19}]}
                renderItem={ ({item}) => <GroupItem group = { item } /> }
                keyExtractor={(item) => item.id }
            />
        </View>
    )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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