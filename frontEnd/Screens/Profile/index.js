import React from 'react';
import {View, Text} from 'react-native';
import {useState,useEffect} from 'react';

export default function profile({route, navigation}){

   const {userInfo, user} = route.params;
   
   const [data, setData] = useState('');

    useEffect(() =>{

        const URL = `http://192.168.1.87:3000/profile/${userInfo.IdUser}`;

        const requestOptions = {
            method: 'GET',
            headers: {
                'x-acess-token': user.token,
                'Content-Type': 'application/json'
              }
         }
        
     fetch(URL,requestOptions)
        .then((response) => {
            if(response.status === 200){
                return response.text();
            }else{
                throw new Error("Something is wrong " + response.status)
            }
        })
        .then((response) => {
            setData(response);
        })
        .catch((error) => {
            console.error(error.message);
        })},[])


    return(
        <View>
            <Text>{data}</Text>
        </View>
    );
}