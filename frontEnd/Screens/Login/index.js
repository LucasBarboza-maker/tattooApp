import React from 'react';
import {View, ScrollView, TextInput, Text, Button} from 'react-native';
import {useState} from 'react';

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function LoginInServer() {
    const URL = 'http://192.168.1.87:3000/login';

    const requestOption = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    }

    fetch(URL, requestOption)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else {
          throw new Error('Something is wrong');
        }
      })
      .then((responseText) => {
        navigation.navigate('Home',
        {
          user: JSON.parse(responseText)
        })
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  function goToSignUpPage(){
    navigation.navigate('SignUp');
  }
  

  return (
    <ScrollView>
      <View>
        <Text>User</Text>
        <TextInput placeholder="Username" onChangeText={(e) => setEmail(e)} />
      </View>

      <View>
        <Text>Password</Text>
        <TextInput placeholder="Password" onChangeText={(e) => setPassword(e)} />
      </View>

      <Button title="Connect" onPress={LoginInServer} />
      <Button title="SignUp" onPress={goToSignUpPage}/>
    </ScrollView>
  );
}
