import React from 'react';
import {View, Text, Button} from 'react-native';
import {useState,useEffect} from 'react';
import {Background, Photo, Title, DivHeader, Div, Description, GalleryPhoto, DivGallery, AddressDiv} from './style'
import DocumentPicker from 'react-native-document-picker';

export default function profile({route, navigation}){

   const {userInfo, user} = route.params;
   const [photo, setPhoto] = useState(null);
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

        try{
            const res = await DocumentPicker.pick({

                type: [DocumentPicker.types.allFiles],

            });

            alert('res : ' + JSON.stringify(res));
            setPhoto(res);
        }catch(err){
            setPhoto(null);

            if(DocumentPicker.isCancel(err)){
                alert('Canceled');
            }else{
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }

    }

    let uploadImage = async () => {

        if(photo != null){
            
            const fileToUpload = photo;
            const data = new FormData();
            data.append('imageUpload',fileToUpload)
            alert(JSON.stringify(data));
            let res = await fetch(
                
                `http://192.168.1.87:3000/upload`,
                
                {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                }
            );
            let responseJson = await res.json();

            if(responseJson.status == 1){
                alert('Upload Successful');
            }
        }else{
            alert('Please Select File first');
        }
    };


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
                <Button title="Chose Photo" onPress={chosePhoto}></Button>
                <Button title="Upload Photo" onPress={uploadImage}></Button>
               
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