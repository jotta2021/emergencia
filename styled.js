import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color:${props => props.theme.background};
`
export const Informations = styled.View`
flex-direction:row;
margin-left: 20;
align-items:center;


`

export const Temp = styled.Text`
font-family:'OpenSans_500Medium';
font-size: 85rem;
color:white;


`

export const Date = styled.Text`
 margin-left: 30;
 color:white;
 font-size: 18;
 font-family:'OpenSans_500Medium';


`
export const ContainerIcon = styled.View`
align-items:center;

`
export const Clima = styled.Text`
color:white;
font-size: 20;
margin-top:2;
font-family:'OpenSans_500Medium';

`
export const NextDays = styled.View`

width: 350;
height:200;

margin-top: 30;
border-radius: 20rem;
justify-content:center;
align-items:center;
margin-left:30


`
export const ForecastDay = styled.View`
flex-direction: row;
align-items:center;
`
export const Umidity = styled.Text`
color:white;
font-size: 20
`
export const ForecastContainer = styled.View`
flex-direction: row;
justify-content: center;
gap:20;
margin-top: 20
`