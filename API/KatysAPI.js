const url = 'https://katys-server.herokuapp.com/'
import {AsyncStorage} from 'react-native';

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
    result = (await AsyncStorage.getItem('token') !== null)
    console.log(result)
    return result
}

export async function logOut() {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('id')
}