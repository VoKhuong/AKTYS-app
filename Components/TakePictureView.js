import React from 'react'
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import StudentItem from './StudentItem'
import ImagePicker from 'react-native-image-picker'
import { detectStudent, getAbsent, postAbsent } from '../API/KatysAPI'

class TakePictureView extends React.Component {

    constructor(props) {
        super(props)
        this.course = this.props.navigation.getParam('course', 'NOTHING')
        if(this.course == 'NOTHING') {
            this.props.navigation.navigate('Picture')
        }

        // A ENLEVER
        this.course.expected = [ 1, 2, 3, 4, 5 ]
        // A ENLEVER

        this.state = {
            absent: [1, 2, 3, 4, 5],
            expected: this.course.expected
        }

        this._getAbsent(this.course.id)
    }

    async _getAbsent(id) {
        tmp = await getAbsent(id)
        console.log(tmp)
        this.setState({
            absent: tmp
        })
    }

    render(){
        console.log('rrr')
        return (
            <View style = { styles.background }>
                <LinearGradient style = { styles.header }
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                colors={['#f7ff00', '#db36a4']}
                >
                    <Image source={require('../assets/trainingIcon.png')} style={ styles.iconImg } />
                </LinearGradient>
                <View style = { styles.buttonView }>
                    <TouchableOpacity style = { styles.btn } onPress = { () => this.takePhoto() } >
                        <Text style = {styles.textBtn}>PRENDRE PHOTO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { styles.btn } onPress = { () => this.exit() } >
                        <Text style = {styles.textBtn}>FINI</Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.allStudentView } >
                    <FlatList
                    style = { styles.allStudent }
                        data={ this.state.absent }
                        renderItem={ ({item}) => <StudentItem student = { item } status = { this.getStatus(item) } /> }
                        keyExtractor={ (item) => item.toString() }
                        onRefresh = {() => this._getAbsent(this.course.id)}
                        refreshing = { false }
                    />
                </View>
            </View>
        )
    }

    getStatus(item) {
        return (!this.state.absent.includes(item))
    }

    async takePhoto() {
        ImagePicker.showImagePicker({quality : 0.1}, (response) => {
            if (response.didCancel) {
              console.log('L\'utilisateur a annulé')
            }
            else if (response.error) {
              console.log('Erreur : ', response.error)
            }
            else {
                console.log(response.data.length)
                console.log(response.fileName)
                console.log(this.course.name)
            }
        })
        // DO API CALL
        detectedId = await detectStudent(response.data, response.fileName)
        // UPDATE STATE
        if (detectedId != 0) {
            if (this.state.absent.indexOf(detectedId) > -1) {
                tmp = this.state.absent
                tmp.splice(this.state.absent.indexOf(detectedId), 1);
                this.setState({ absent: tmp })
            }
        }
    }

    exit() {
        // UPDATE SERVER DATABASE
        postAbsent(this.state.absent, this.course.id)
        this.props.navigation.navigate('PictureStack')
    }
}

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

const styles = StyleSheet.create({
    background : {
        backgroundColor: '#d8ddef',
        flex: 1
    },
    header : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImg : {
        height: '60%',
        resizeMode: 'contain',
        marginTop: '5%'
    },
    allStudentView : {
        flex: 3,
        backgroundColor: '#d8ddef'
    },
    allStudent : {
        flex : 1
    },
    buttonView : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#E2E6F3',
        borderWidth: 0.5,
        borderColor: '#C5C9DA',
    },
    btn : {
        width: '40%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#09bc8a'
    },
    textBtn : {
        width: '100%',
        fontSize: 14,
        textAlign: 'center',
        color: '#d8ddef'
    }
})

export default TakePictureView