import React from 'react';
import {View, ScrollView, TextInput, Text, Button} from 'react-native';
import {useState} from 'react';

export default function Login({navigation}) {
  const [message, setMessage] = useState('Nada');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');

  function connectToServer() {
    const url = 'http://192.168.1.87:3000/login';

    const requestOption = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    }

    fetch(url, requestOption)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else {
          throw new Error('Something is wrong');
        }
      })
      .then((responseText) => {
        setMessage(responseText);
        setData(JSON.parse(responseText));
        navigation.navigate('HomeScreen')
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  

  return (
    <ScrollView>
      <Text>{data.email}</Text>
      <View>
        <Text>User</Text>
        <TextInput placeholder="Username" onChangeText={(e) => setEmail(e)} />
      </View>

      <View>
        <Text>Password</Text>
        <TextInput placeholder="Password" onChangeText={(e) => setPassword(e)} />
      </View>

      <Button title="Connect" onPress={connectToServer} />
    </ScrollView>
  );
}
