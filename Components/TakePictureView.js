import React from 'react'
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import StudentItem from './StudentItem'
import ImagePicker from 'react-native-image-picker'

class TakePictureView extends React.Component {

    constructor(props) {
        super(props)
        this.course = this.props.navigation.getParam('course', 'NOTHING')
        if(this.course == 'NOTHING') {
            this.props.navigation.navigate('Picture')
        }

        // A ENLEVER
        this.course.present = [ 1 ]
        this.course.expected = [ 1, 1, 1 ]
        // A ENLEVER

        this.state = {
            present: this.course.present,
            expected: this.course.expected
        }
    }

    render(){
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
                        data={ this.state.expected }
                        renderItem={ ({item}) => <StudentItem student = { item } status = { this.getStatus(item) } /> }
                        keyExtractor={ (item) => item.toString() }
                    />
                </View>
            </View>
        )
    }

    getStatus(item) {
        return this.course.present.includes(item)
    }

    takePhoto() {
        ImagePicker.showImagePicker({quality : 0.1}, (response) => {
            if (response.didCancel) {
              console.log('L\'utilisateur a annulé')
            }
            else if (response.error) {
              console.log('Erreur : ', response.error)
            }
            else {
                console.log(response.data.length)
                console.log(this.course.name)
            }
        })
        // DO API CALL
        // UPDATE STATE
    }

    exit() {
        // UPDATE SERVER DATABASE
        this.props.navigation.navigate('PictureStack')
    }
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