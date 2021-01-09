import React from 'react';
import {View, Switch} from 'react-native';
import {Form, Div, Text, TextInput, Title} from './style'
import Button from '../globalUtils/button';
import {useState} from 'react'

export default function SignUp({navigation}){

    const [user, setUser] = useState({name:'', password:'', email:'', description:'', PhotoURL: ''});
    
    const [isATattooArtist, setIsATattooArtist] = useState(true);

    const [message, setMessage] = useState('');

    const [passwordCheckMessage, setPasswordCheckMessage] = useState('Password is:');

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

    function Login(){
        navigation.navigate('Login');
    }

    function confirmPassword(e){
        if(e == user.password){
            setPasswordCheckMessage('The Password is: CORRECT');
        }else{
            setPasswordCheckMessage('The Password is: WRONG');
        }
    }


    return(
    <Form>
        <Div>
            <Title>SIGN UP</Title>
            <Text>Name</Text>
            <TextInput placeholder="Name" onChangeText={ e => setUser({...user, name: e})}></TextInput>
            <Text>Password</Text>
            <TextInput placeholder="Password" onChangeText={e => setUser({...user, password: e})}></TextInput>
            <Text>Confirm Password</Text>
            <TextInput placeholder="Password" onChangeText={e => confirmPassword(e)}></TextInput>
            <Text>{passwordCheckMessage}</Text>
            <Text>Email</Text>
            <TextInput placeholder="Email" onChangeText={e => setUser({...user, email: e})}></TextInput>
            <Text>Are you a Tattoo artist?</Text>
            <Switch style={{marginRight:'-3%'}}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={!isATattooArtist ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={!isATattooArtist}
        />
            
        </Div>
            <Button text="SingUP" onPress={signUp}/>
            <Button text="Back" onPress={Login}/>
    </Form>
    )

}
