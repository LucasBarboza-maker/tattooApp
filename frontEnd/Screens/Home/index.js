import React from 'react';
import {useState, useEffect} from 'react';
import {ScrollView, Button} from 'react-native';
import {SearchBox, Div, CardDiv, UserName, Photo} from '../Home/style.js';


export default function Home({route, navigation}){

    const {user} = route.params;
    const [data, setData] = useState([]);
    const [searchBoxValue, setSearchBoxValue] = useState('undefined');

    
    useEffect(() => {
        setData([]);
        const URL = 'http://192.168.1.87:3000/search';

        const requestOption = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'x-acess-token': user.token
            },
         body: JSON.stringify({name: searchBoxValue})
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
          
    }, [searchBoxValue]);


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
            <CardDiv key={user.IdUser} onPress={(user) => goToProfile(user)}>
                <Photo/>
                <UserName>{user.name}</UserName>
            </CardDiv>
            );
    }

    return(
    <Div>
        <SearchBox onChangeText={(e) => setSearchBoxValue(e)}/>
            <Button title="Submit"/>
            <ScrollView>
            {data.map(user => profileCard(user))}
            </ScrollView>
    </Div>);
}