import styled from 'styled-components/native';

export const DivHeader = styled.View`
 background-color: #648F9C; 
 padding-bottom:4%;
`;

export const Div = styled.View`
    margin-top:2%;
    background-color: #648F9C;
    padding-bottom:15px;
    
`;

export const DivGallery = styled.View`
    flex-direction:row;
    align-self:center;
`;

export const Description = styled.Text`
    
    font-size:20px;
    text-align:center;
    color:white;

`;

export const Title = styled.Text`
    font-weight: bold;
    font-size:25px;
    text-align:center;
    color:white;
    margin-top:2%;
`;

export const Photo = styled.View`
    margin-top:2%;
    align-self: center;
    background-color:red;
    width:190px;
    height:200px;
    
`;

export const GalleryPhoto = styled.View`
    margin-top:2%;
    margin-left:1%;
    background-color:red;
    width:120px;
    height:130px;
`;

export const AddressDiv = styled.View`
    background-color:red;
    align-self:center;
    width:90%;
    height:300px;
`;

export const Background = styled.ScrollView`
    background-color:#44616A;
    height:100%;
`;