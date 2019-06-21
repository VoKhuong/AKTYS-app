import React from 'react'
import { View, StyleSheet, FlatList, Image, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CourseItem from './CourseItem'
import { getAllCourse } from '../API/KatysAPI'

class HistoryView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          allCourse: []
        }
        this._getAllCourse()
    }

    render(){
        return (
            <View style = { styles.container }>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0);" barStyle="light-content" translucent={ true } />
                <LinearGradient style = { styles.header }
                    start={{x: 0.0, y: 0.0}}
                    end={{x: 1.0, y: 1.0}}
                    colors={['#00F260', '#0575E6']}
                >
                    <Image style = { styles.iconImg } source={require('../assets/historyBigIcon.png')} />
                </LinearGradient>
                <FlatList
                    data={ this.state.allCourse }
                    renderItem={ ({item}) => <CourseItem course = { item } /> }
                    keyExtractor={ (item) => item.id }
                    onRefresh = {() => this._getAllCourse()}
                    refreshing = { false }
                />
            </View>
        )
    }

    async _getAllCourse() {
        this.setState({ allCourse: await getAllCourse() })
        console.log('Updated list')
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