import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import GroupItem from './GroupItem'
import { getFutureCourse } from '../API/KatysAPI'


class PictureView extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            allCourse: []
        }
        this._getFutureCourse()
    }

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
                    data={ this.state.allCourse }
                    renderItem={ ({item}) => <GroupItem group = { item } /> }
                    keyExtractor={(item) => item.id }
                />
            </View>
        )
    }

    async _getFutureCourse() {
        this.setState({ allCourse: await getFutureCourse() })
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