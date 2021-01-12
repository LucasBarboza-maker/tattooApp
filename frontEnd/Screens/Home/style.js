import styled from 'styled-components/native';

export const DivSearchBox = styled.View`

    background-color:#685B5B;

`;

export const Header = styled.View`
    background-color:#597F8C;
    border:2px black;
    margin:0.5px;
    width:22%;
    height:70px;
`;

export const SearchBox = styled.TextInput`
    margin: 10px;
    border: 2px;
    height:40px;
    font-size:20px;
    width:70%;
    background-color:white;
    border-color: gray;
`;

export const Div = styled.View`
    height:100%;
    background-color:#44616A;

`;

export const CardDiv = styled.TouchableOpacity`
    width:100%;
    height:250px;
    margin-top:2%;
    background-color:#6F7B7E;
    flex:1;
    align-items:center;
    border: 2px #3C474A;
`;

export const Photo = styled.View`
    width:150px;
    height:150px;
    margin-top:5px;
    background-color:red;
    border:2px #3C474A;
`;

export const UserName = styled.Text`
    width:95%;
    margin-top:5%;
    text-align:center;
    font-size:25px;
    color:white;
    font-weight:bold;
`;

export const Description = styled.Text`

`;