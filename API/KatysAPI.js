const url = 'https://katys-server.herokuapp.com/'
import AsyncStorage from '@react-native-community/async-storage';

// https://facebook.github.io/react-native/docs/asyncstorage

// Source: http://stackoverflow.com/questions/497790
var dates = {
    convert:function(d) {
        // Converts the date in d to a date-object. The input can be:
        //   a date object: returned without modification
        //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
        //   a number     : Interpreted as number of milliseconds
        //                  since 1 Jan 1970 (a timestamp) 
        //   a string     : Any format supported by the javascript engine, like
        //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
        //  an object     : Interpreted as an object with year, month and date
        //                  attributes.  **NOTE** month is 0-11.
        return (
            d.constructor === Date ? d :
            d.constructor === Array ? new Date(d[0],d[1],d[2]) :
            d.constructor === Number ? new Date(d) :
            d.constructor === String ? new Date(d) :
            typeof d === "object" ? new Date(d.year,d.month,d.date) :
            NaN
        );
    },
    compare:function(a,b) {
        // Compare two dates (could be of any type supported by the convert
        // function above) and returns:
        //  -1 : if a < b
        //   0 : if a = b
        //   1 : if a > b
        // NaN : if a or b is an illegal date
        // NOTE: The code inside isFinite does an assignment (=).
        return (
            isFinite(a=this.convert(a).valueOf()) &&
            isFinite(b=this.convert(b).valueOf()) ?
            (a>b)-(a<b) :
            NaN
        );
    },
    inRange:function(d,start,end) {
        // Checks if date in d is between dates in start and end.
        // Returns a boolean or NaN:
        //    true  : if d is between start and end (inclusive)
        //    false : if d is before start or after end
        //    NaN   : if one or more of the dates is illegal.
        // NOTE: The code inside isFinite does an assignment (=).
       return (
            isFinite(d=this.convert(d).valueOf()) &&
            isFinite(start=this.convert(start).valueOf()) &&
            isFinite(end=this.convert(end).valueOf()) ?
            start <= d && d <= end :
            NaN
        );
    }
}

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
    return (("00" + date1.getUTCDate()).slice(-2) + "/" + 
    ("00" + (date1.getUTCMonth() + 1)).slice(-2) + "/" + 
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
          return []
      }
}

export async function getFutureCourse() {
    const request = url + 'courses/byTeacher/' + id.toString()
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
            return []
        }
        result = []
        for (item of json) {
            // METTRE A 1
            if (dates.compare(new Date(item.end), new Date(Date.now())) == -1) {
                result.push(item)
            }
        }
        return result
    } catch (error) {
        return []
    }
}

export async function getStudent(id) {
    const request = url + 'students/' + id.toString()
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
            return {
                firstName: 'Error',
                lastName: 'Error',
                mail: 'error@error.com'
            }
        }
        return json
    } catch (error) {
        return {
            firstName: 'Error',
            lastName: 'Error',
            mail: 'error@error.com'
        }
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