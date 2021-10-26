import styled from 'styled-components';
import "inter-ui/inter.css";


const BG = styled.div `
background-color : #FFFAE6;
height : 100vh;
display : flex;
justify-content: center;
    align-items: center;
    flex-direction:column;
    overflow: auto;
`
const CenterContainer = styled(BG)`
background-color : transparent;
height: auto;
width: 100%;
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
const SmallContentContainer = styled(ContentContainer) `
width : 70%;
padding-right:20px;
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
const BackContainer = styled.div `
display : flex;
margin : -1rem 0 0rem 0;
align-items: center;
cursor: pointer;
width:10rem;
`
const SubmitButton = styled.button `
width:100%;
height: 60px;
background: #FF8A00;
color: #FFFFFF;
box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
border-radius: 4px;
display:flex;
justify-content: center;
align-items: center;
cursor:pointer;
font-family: "Inter", "system-ui";
font-size:18px;
outline : none;
border : none;
margin-top:30px;
`
const chooseButton = styled.button `
background: ${props => props.background};
border: 1px solid ${props => props.borderColor || '#CCCCCC'};
width:100%;
height: 60px;

`
const TitleText = styled.h1 `
font-family: 'Montserrat', sans-serif;
font-size: 36px;
line-height: 44px;
color:#FF8A00;
margin:0;
`
const MidTitleText = styled(TitleText) `
font-size: 24px;
line-height: 29px;
`
const TextLine = styled.div `
height:8px;
width:280px;
background: #EEEEEE;
margin: -0.75rem 0 2rem 0;
`
const Separator = styled.div `
height:1px;
width:80px;
background: #D8D8D8;
margin: ${props => props.margin};
`

const SmallText = styled.p `
font-family: "Inter", "system-ui";
font-size: 14px;
line-height: 21px;
margin:${props => props.margin};;
opacity: ${props => props.opacity};
color:#000000;
`
const SmallTextGreyed = styled(SmallText)
`opacity: 0.6;
`
const SmallTextBold = styled(SmallText)
`
font-weight:700;
opacity: 1;
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
width : 50%;
`
// border : 1px solid red;

const ContentColumn2 = styled.div `
width : 45%;
`
// border : 1px solid green;

const ContentColumn3 = styled.div `
width : 30%;
Height: 32rem;
border-left: 1px solid rgba(255, 138, 0, 0.2);
padding-left:19px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top:2.5rem;
`
const Space = styled.span `
color : transparent;
`

const InputContainer = styled.div `
border: 1px solid ${props => props.borderColor || '#CCCCCC'};
height: 60px;
width:90%;
border-radius: 3px;
padding : 0 15px;
display:flex;
margin-top:1rem;
align-items: center;
justify-content: space-between;
background:${props => props.background };
`
const chooseContainer = styled(InputContainer) `
border-radius: 0px;
border: 1px solid black;
display:flex;

background: ${props => props.borderColor || 'transparent'};
`
const InfoContainer = styled(InputContainer) `
border : none;
height: 20px;
width: 100%;
padding : 0;
margin-top:8px;
`
const Label = styled.p `
color : ${props => props.color};
font-weight: 500;
font-size: 13px;
font-family: "Inter", "system-ui";
margin-bottom: 0;
opacity : ${props => props.opacity || 1};
`
const LabelMedium = styled(Label) `
font-size: 16px;
opacity : ${props => props.opacity || 1};
color : ${props => props.color};
margin:0;

`
const Warning = styled.p `
color : red;
font-size: 0.75rem;
margin:0 0 0 1rem;
`

const Input = styled.input.attrs(props => ({
 
}))
` 
width:90%;
    font-size: 1rem;
    font-weight:700;
    color: #2D2A40;
    border: none;
    border-color: ${props => props.borderColor || '#CCCCCC'};
    border-radius: 3px;
    outline:none;
   font-family: "Inter", "system-ui";
    `

const InputTextarea = styled.textarea `
    width:88%;
    height: 120px;
    font-weight:700;
    font-size: 1rem;
    border: 1px solid;
    border-color: ${props => props.borderColor || '#CCCCCC' };
    outline:none;
    font-family: "Inter", "system-ui";
    border-radius: 3px;
    background-color:transparent;
    margin-top:1rem;
    padding:20px;
    `

export {
    Label,
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
    SmallText,
    Warning,
    TextLine,
    BackContainer,
    SmallTextGreyed,
    MidTitleText,
    SubmitButton,
    InfoContainer,
    SmallTextBold,
    SmallContentContainer,
    Space,
    LabelMedium,
    chooseContainer,
    Separator,
    CenterContainer,
};