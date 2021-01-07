import React from 'react'
import {View, Text, Button} from 'react-native'
import {useState, useEffect} from 'react'


export default function Home({route, navigation}){

    const {user} = route.params;
    const [data, setData] = useState([]);

    useEffect(() => {
        const URL = 'http://192.168.1.87:3000/';

        const requestOption = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'x-acess-token': user.token
            },
        }

        fetch(URL, requestOption)
        .then((response) => {
            if (response.status === 200) {
                return response.text();
              } else {
                throw new Error('Something is wrong');
              }
        }).then((response) => {
            
            setData(JSON.parse(response));
            
        })
        .catch((error) => {
            console.error(error.message);
          });
          
    }, [])


    function goToProfile(userInfo){
        navigation.navigate('Profile',
        {
            userInfo: userInfo,
            user: user
        }
     );
    }



    return(
    <View>
        <Text>
            {data.map(user => <View key={user.id}><Button onPress={() => goToProfile(user)} title={user.name}/></View>)}
        </Text>
    </View>);
}