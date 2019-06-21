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

export async function getId() {
    return await AsyncStorage.getItem('id')
}

export function formatDateStr(dateStr) {
    date1 = new Date(dateStr)
    return (("00" + (date1.getUTCMonth() + 1)).slice(-2) + "/" + 
    ("00" + date1.getUTCDate()).slice(-2) + "/" + 
    date1.getUTCFullYear() + " " + 
    ("00" + date1.getUTCHours()).slice(-2) + ":" + 
    ("00" + date1.getUTCMinutes()).slice(-2) + ":" + 
    ("00" + date1.getUTCSeconds()).slice(-2))
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

export async function getUserDisplay(id) {
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
        if(json.error) {
            return 'error error'
        }
        return (json.firstName + ' ' +json.lastName)
      } catch (error) {
        return 'ERROR ERROR'
      }
}

export async function getAllCourse() {
    const request = url + 'courses/'
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
            return json
        }
            return json
      } catch (error) {
          return 'ERROR'
      }
}

export async function getFutureCourse() {
    return {

    }
}

export function renderCourseLogo(subject) {
    if (subject == 'CPOA') {
        return require('../assets/infoIcon.png')
    } else if (subject == 'Mathématiques') {
        return require('../assets/mathIcon.png')
    } else if (subject == 'COMMUNICATION') {
        return require('../assets/lawIcon.png')
    } else {
        return require('../assets/courseIcon.png')
    }
}