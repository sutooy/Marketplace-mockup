import styled from 'styled-components';
import "inter-ui/inter.css";



const BG = styled.div `
background-color : #FFFAE6;
height : 100vh;
display : flex;
justify-content: center;
    align-items: center;
    flex-direction:column;
`
const Container = styled.div `
background-color : #FFFFFF;
height : 550px;
width : 1100px;
box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
border-radius: 4px;
padding : 1.8rem 2.5rem 1.25rem 2.5rem
`
const ContentContainer = styled.div `
display:flex;
flex-direction : row;
justify-content: space-between

`

const Step = styled.div `
width : 500px;
height : 70px;
margin-bottom:-2rem;
background-color : #FFFAE6;
z-index: 1;
border-radius: 35px;
display: flex;
justify-content: space-around

`

const StepContainer = styled.div `
display:flex;
align-items: center;

`
const StepText = styled.p `
font-family: "Inter", "system-ui";
font-size: 16px;
line-height: 19px;
color:#FF8A00;
margin-left:1rem;
`
const StepImg = styled.img `
height : 16px;
width : 16px;
align-self: center;
`

const TitleText = styled.h1 `
font-family: 'Montserrat', sans-serif;
font-weight: bold;
font-size: 36px;
line-height: 44px;
color:#FF8A00;
`
const StepIndicator = styled.div `
width : 30px;
height : 30px;
border-radius : 15px;
box-shadow: 0px 2px 4px rgba(255, 138, 0, 0.3);
background: #FF8A00;
z-index: 1;
display : flex;
justify-content: center;
align-items: center;
color:white;
`
const StepIndicatorBlur = styled(StepIndicator)
`
opacity: 0.2;
`
const ContentColumn1 = styled.div `
width : 40%;
border : 1px solid red;
`
const ContentColumn2 = styled.div `
width : 30%;
border : 1px solid green;

`
const ContentColumn3 = styled.div `
width : 30%;
border : 1px solid blue;

`
const Checkbox = styled.input.attrs (props => ({
        // we can define static props
        type: "checkbox",
    
 
    }))`
    width: 200px;
    height: 200px;
    filter: invert(66%) sepia(85%) saturate(442%) hue-rotate(92deg) brightness(90%) contrast(93%);


    
    `

    
// const Input = styled.input.attrs(props => ({
//     // we can define static props
//     type: "text",
//     patern: /\S+@\S+\.\S+/,

//     // or we can define dynamic ones
//     borderColor: props.borderColor,
// }))
// `width:90%;
//     font-size: 1em;
//     border: 2px solid;
//     border-color: ${props => props.borderColor};
//     &:hover {
//         border-color: blue;
//     }
//     &:active{
//         border-color: blue;
//     }
//     border-radius: 3px;

//     /* here we use the dynamically computed prop */
//     margin: ${props => props.size};
//     padding: ${props => props.size};
//   `
const InputContainer = styled.div `
border: 1px solid ${props => props.borderColor || '#CCCCCC'};
`
const Input = styled.input `
width:90%;
height: 60px;
    font-size: 1rem;
    border: 1px solid;
    border-color: ${props => props.borderColor || '#CCCCCC'};
    border-radius: 3px;
    outline:none;
   
    `
    // &:valid{
    //     border: 10px solid blue;
    // }
    // &:invalid{
    //     border: 10px solid red;
    // }
const InputTextarea = styled.textarea `width:90%;
    height: 120px;
        font-size: 1rem;
        border: 1px solid;
        border-color: ${props => props.borderColor || '#CCCCCC' };
        outline:none;

        border-radius: 3px;
      
    
      `;

export {
    Input,
    InputTextarea,
    BG,
    Container,
    Step,
    StepIndicator,
    StepContainer,
    StepIndicatorBlur,
    StepText,
    TitleText,
    StepImg,
    ContentColumn1,
    ContentColumn2,
    ContentColumn3,
    ContentContainer,
    InputContainer,
    Checkbox,
};