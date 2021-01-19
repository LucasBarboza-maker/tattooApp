import React from 'react';
import {View, Text, Button} from 'react-native';
import {useState,useEffect} from 'react';
import {Background, Photo, Title, DivHeader, Div, Description, GalleryPhoto, DivGallery, AddressDiv} from './style'
import DocumentPicker from 'react-native-document-picker';

export default function profile({route, navigation}){

   const {userInfo, user} = route.params;
   const [photo, setPhoto] = useState([]);
   const [data, setData] = useState([{}]);

    useEffect(() =>{

        const URL = `http://192.168.1.87:3000/profile/${userInfo.idUser}`;

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
            setData(JSON.parse(response));
        })
        .catch((error) => {
            console.error(error.message);
        })},[])

    async function chosePhoto(){
        const chosenPhoto = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
        });

        setPhoto(chosenPhoto);

    }

    return(
        <Background>
            <DivHeader>
                <Photo></Photo>
                <Title>{data[0].name}</Title>
            </DivHeader>

            <Div>
                <Title>Description</Title>
                <Description>{data[0].description}</Description>
            </Div>

            <Div>
                <Title>Gallery</Title>
                <Button title="Upload Photos" onPress={() => chosePhoto()}></Button>
                <Text>Chosen Photo: {"\n"+photo.name}</Text>
                <DivGallery>
                    <GalleryPhoto></GalleryPhoto> 
                    <GalleryPhoto></GalleryPhoto>
                    <GalleryPhoto></GalleryPhoto>
                </DivGallery>

                <DivGallery>
                    <GalleryPhoto></GalleryPhoto> 
                    <GalleryPhoto></GalleryPhoto>
                    <GalleryPhoto></GalleryPhoto>
                </DivGallery>
            </Div>

            <Div>
                <Title>Address</Title>
                <AddressDiv></AddressDiv>
            </Div>

        </Background>
    );
}