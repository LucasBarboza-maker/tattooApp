import React from 'react';
import {useState, useEffect} from 'react';
import {SearchBox, Div, CardDiv, UserName, Photo} from '../Home/style.js';


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


    function profileCard(user){
            return(
            <CardDiv key={user.IdUser}>
                <Photo/>
                <UserName>{user.name}</UserName>
            </CardDiv>
            );
    }

    return(
    <Div>
        <SearchBox/>
        {data.map(user => profileCard(user))}
    </Div>);
}