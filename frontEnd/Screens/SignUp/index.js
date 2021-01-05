import React from 'react';
import {View, Text, Button, TextInput, Switch} from 'react-native';
import {useState} from 'react'

export default function SignUp(){

    const [user, setUser] = useState({name:'', password:'', email:'', description:'', isATattooArtist: false, PhotoURL: ''});



    return(
    <View>
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
        //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        //onValueChange={toggleSwitch}
       // value={isEnabled}
      />
        <Text>Photo</Text>
        <TextInput placeholder="Photo" onChangeText={e => setUser({...user, photoURL: e})}></TextInput>

    </View>
    )

}
