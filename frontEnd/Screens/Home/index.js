import React from 'react';
import {useState, useEffect} from 'react';
import {ScrollView, Button, View} from 'react-native';
import ButtonIcon from '../globalUtils/buttonIcon'
import {SearchBox, Div, CardDiv, UserName, Photo, Header} from '../Home/style.js';


export default function Home({route, navigation}){

    const {user} = route.params;
    const [data, setData] = useState([]);
    const [searchBoxValue, setSearchBoxValue] = useState('');

    
    useEffect(() => {

        searchUsers();

    }, [searchBoxValue]);

    function searchUsers(){

        setData([]);

        if(searchBoxValue === ''){
            return;
        }
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
          
    }

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
            <CardDiv key={user.idUser} onPress={() => goToProfile(user)}>
                <Photo/>
                <UserName>{user.name}</UserName>
            </CardDiv>
            );
    }

    function myProfile(user){

        goToProfile(user);

    }

    return(
    <Div>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:20}}>
            <ButtonIcon text="Profile" width='50%' height='100%' onPress={() => myProfile(user)}/>
        </View>
        <View style={{flexDirection:'row'}}>
            <SearchBox onChangeText={(e) => setSearchBoxValue(e)}/>
            <ButtonIcon text="Submit" width='23%' onPress={searchUsers}/>
        </View>    
            <ScrollView>
            {data.map(user => profileCard(user))}
            </ScrollView>
    </Div>);
}