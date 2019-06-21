const url = 'https://katys-server.herokuapp.com/'
import AsyncStorage from '@react-native-community/async-storage';

// https://facebook.github.io/react-native/docs/asyncstorage

export async function logIn(mail, password) {
  const request = url + 'login/'
  try {
        const response = await fetch(request, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: mail,
                password: password,
            }),
        })
        json = await response.json()
        console.log(json)
        if (json.token) {
            console.log('OK')
            await AsyncStorage.setItem('id', json.id.toString());
            await AsyncStorage.setItem('token', json.token);
            return true;
        }
        return false
    }
    catch (error) {
        console.log(error)
        return false;
    }
}

export async function isLoggedIn() {
    try{
        result = (await AsyncStorage.getItem('token') !== null)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function logOut() {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('id')
}

export async function getUser() {
    const id = await AsyncStorage.getItem('id')
    const request = url + 'teachers/' + id.toString()
    try {
        const response = await fetch(request, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        json = await response.json()
        console.log(json)
        if(json.error) {
            return {
                "firstName": "error",
                "lastName": "error",
                "trigram": "err"
              }
        }
            return json
      } catch (error) {
        return {
            "firstName": "error",
            "lastName": "error",
            "trigram": "err"
          }
      }
}

export async function getAllCourse() {
    return (
        [
            {
                'id': '1',
                'subject': 'Informatique', 
                'teacher': {'firstName': 'Jean-Jacques', 'lastName': 'gogo', 'id': '1'}, 
                'present': 12, 'expected': 20
            }, 
            {
                'id': '2', 
                'subject': 'Mathématiques', 
                'teacher': {'firstName': 'Jean-Jacques', 'lastName': 'gogo', 'id': '2'}, 
                'present': 12, 'expected': 20
            }, 
            {
                'id': '3', 
                'subject': 'Droit',
                'teacher': {'firstName': 'Jean-Jacques', 'lastName': 'gogo', 'id': '3'},
                'present': 12, 
                'expected': 20
            }, 
            {
                'id': '4', 
                'subject': 'dunno', 
                'teacher': {'firstName': 'Jean-Jacques', 'lastName': 'gogo', 'id': '4'}, 
                'present': 12, 
                'expected': 20
            }
        ]
    )
}

export async function getFutureCourse() {
    return {

    }
}

export function renderCourseLogo(subject) {
    if (subject == 'Informatique') {
        return require('../assets/infoIcon.png')
    } else if (subject == 'Mathématiques') {
        return require('../assets/mathIcon.png')
    } else if (subject == 'Droit') {
        return require('../assets/lawIcon.png')
    } else {
        return require('../assets/courseIcon.png')
    }
}