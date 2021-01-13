import React from 'react';
import {View, Text} from 'react-native';
import {useState,useEffect} from 'react';
import {Background, Photo, Title, DivHeader, Div, Description, GalleryPhoto, DivGallery, AddressDiv} from './style'

export default function profile({route, navigation}){

   const {userInfo, user} = route.params;
   
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