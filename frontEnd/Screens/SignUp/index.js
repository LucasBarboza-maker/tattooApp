import React from 'react';
import {View, Text, Button, TextInput, Switch} from 'react-native';
import {useState} from 'react'

export default function SignUp(){

    const [user, setUser] = useState({name:'', password:'', email:'', description:'', PhotoURL: ''});
    
    const [isATattooArtist, setIsATattooArtist] = useState(true);

    const [message, setMessage] = useState('');
    
    function toggleSwitch(){
        setIsATattooArtist(previousState => !previousState);
    }

    function signUp(){

        const URL = 'http://192.168.1.87:3000/signUp';

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                 name:user.name, password:user.password,
                 description:user.description,
                email:user.email, isATattooArtist: isATattooArtist,
                photo: user.photoURL})
        }

        setMessage(requestOptions.body);

        fetch(URL, requestOptions)
        .then((response) => {
            if (response.status === 200) {
            return response.text();
            } else {
            throw new Error('Something is wrong');
            }
        })
        .then((responseText) => {
            setMessage(responseText);
        })
        .catch((error) => {
            console.error(error.message);
        });



    }


    return(
    <View>
        <Text>{message}</Text>
        <Text>SIGN UP</Text>
        <Text>{user.name}, {user.email}, {user.password}, {user.description}, {user.photoURL}</Text>
        <Text>Name</Text>
        <TextInput placeholder="Name" onChangeText={ e => setUser({...user, name: e})}></TextInput>
        <Text>Password</Text>
        <TextInput placeholder="Password" onChangeText={e => setUser({...user, password: e})}></TextInput>
        <Text>Email</Text>
        <TextInput placeholder="Email" onChangeText={e => setUser({...user, email: e})}></TextInput>
        <Text>Description</Text>
        <TextInput placeholder="Description" onChangeText={e => setUser({...user, description: e})}></TextInput>
        <Text>Are you a Tattoo artist?</Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={!isATattooArtist ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={!isATattooArtist}
      />
        <Text>Photo</Text>
        <TextInput placeholder="Photo" onChangeText={e => setUser({...user, photoURL: e})}></TextInput>

        <Button title="SingUP" onPress={signUp}/>
    </View>
    )

}
