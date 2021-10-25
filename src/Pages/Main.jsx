import React, {useState, useEffect} from 'react'
import Payment from './Payment'
import Finish from './Finish'
import {InputTextarea, ContentContainer, ContentColumn1, ContentColumn2, ContentColumn3,StepImg,
TitleText,StepText,StepContainer, StepIndicatorBlur,Input,
BG, Container, Step, StepIndicator, InputContainer, Checkbox } from './style/styled-component'
import Arrow from './/style/image/keyboard_arrow_right.svg'
import Square from './/style/image/check-square-regular.svg'

import { useForm, useFormState } from 'react-hook-form';




function Main() {

const { register, handleSubmit, control,formState: { errors, isDirty } } = useForm({
defaultValues: {
// Email: "",

Email: localStorage.getItem("email"),
Phone: null,
}
,shouldUseNativeValidation: true,
mode: "onChange"
});

const { dirtyFields,  } = useFormState({
control
});

const onSubmit = data => localStorage.setItem("email", data.Email);
;
console.log(errors);
// console.log(useForm.Email);



const [page, setPage] = useState(1)
const [dropshipper, setDropshipeer] = useState(false);
const handleDropshipper = () => {
    setDropshipeer(!dropshipper);
  };
  console.log(dropshipper)
 
return (
<BG>
    <Step>
        <StepContainer>
            <StepIndicator>1</StepIndicator>
            <StepText>Delivery</StepText>
        </StepContainer>
        <StepImg src={Arrow} alt='' />
        <StepContainer>
            {page === 2 || page === 3 ? <StepIndicator>2</StepIndicator> : <StepIndicatorBlur>2</StepIndicatorBlur> }
            <StepText>Payment</StepText>
        </StepContainer>
        <StepImg src={Arrow} alt='' />
        <StepContainer>
            {page === 3 ? <StepIndicator>3</StepIndicator> : <StepIndicatorBlur>3</StepIndicatorBlur> }
            <StepText>Finish</StepText>
        </StepContainer>
    </Step>

    <Container>
 
        {page === 1 ?
        <div>
            <div>
                <TitleText>Delivery details</TitleText>
                {/* <img src={Square}/> */}
                <Checkbox
        label="Send as dropshipper"
        value={dropshipper}
        onChange={handleDropshipper}
        borderColor={dropshipper ? "#1BD97B" : '#CCCCCC'}
      />
      <h1>{dropshipper}</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <ContentContainer>
                    <ContentColumn1>
                        <InputContainer></InputContainer>

                        {/* input Email */}
                        <Input 
                        borderColor={dirtyFields.Email ? (errors.Email ? "red" : "green") : '#CCCCCC' 
                        }
                        type="text"
                        placeholder="Email"
                        {...register("Email", {required: true, pattern: /[^@]+@[^@]+\.[^@]+/i})} />
                        {errors.Email?.type === 'required' && "Email name is required"}
                        {errors.Email?.type === 'pattern' && "Please enter valid email "}

                        {/* input Phone Number */}

                        <Input borderColor={dirtyFields.Phone ? (errors.Phone ? "red" : "green" ) : '#CCCCCC' } type="tel"
                            placeholder="Phone number" {...register("Phone", {required: true, maxLength: 12,
                            pattern: /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g})}/> 
                            {errors.Phone?.type==='required' && "Phone number is required" } 
                            {errors.Phone?.type==='pattern' && "Only Accepet Number (0-9) & Character( - + () )" } 
                            
                        {/* input Address */}
                        <InputTextarea
                        type="text"
                            borderColor={dirtyFields.Address ? (errors.Address ? "red" : "green" ) : '#CCCCCC' } 
                             placeholder="Delivery Address" {...register("Address", { required: true, maxLength:
                            120})} ></InputTextarea>
                        {/* {`${delivery.text}`} */}
                    </ContentColumn1>
                    <ContentColumn2>
                    <Input borderColor={dirtyFields.DropshiperName ? (errors.DropshiperName ? "red" : "green" ) : '#CCCCCC' } type="text"
                            placeholder="Dropshiper name" {...register("DropshiperName", {required: true, })}/>                    
                             </ContentColumn2>
                    <ContentColumn3> 
       
                        <input type="submit" />
                    </ContentColumn3>
                </ContentContainer>
            </form>
      
        </div>


        : (page === 2 ?
        <Payment /> :
        <Finish />) }




    </Container>

</BG>
)
}

export default Main