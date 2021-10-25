import React, {useState, useEffect} from 'react'
import Payment from './Payment'
import Finish from './Finish'
import {SmallTextGreyed, BackContainer, TextLine,Label, InputTextarea, ContentContainer, ContentColumn1, ContentColumn2, ContentColumn3,StepImg,
TitleText,StepText,StepContainer, StepIndicatorBlur,Input,SmallText,
BG, Container, Step, StepIndicator, InputContainer,Warning,} from './style/styled-component'
import Arrow from './/style/image/keyboard_arrow_right.svg'
import Square from './/style/image/square-regular.png'
import SquareCheck from './/style/image/check-square-regular.png'
import InputCheck from './/style/image/check.png'
import InputWrong from './/style/image/clear.png'
import BackArrow from './/style/image/arrow_back.png'

import './/style/Main.scss'
import { useForm, useFormState, useWatch } from 'react-hook-form';




function Main() {
    function AddressWatched({ control }) {
        const Address = useWatch({
          control,
          name: "Address", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
          defaultValue: 0 // default value before the render
        });
      
        return <div>character : {Address.length} </div>; // only re-render at the component level, when firstName changes
      }

const { register, handleSubmit, getValues,setValue,control,formState: { errors, isDirty } } = useForm({
defaultValues: {
Email: localStorage.getItem("Email"),
Phone: localStorage.getItem("Phone"),
Address: localStorage.getItem("Address"),
DropshiperName: localStorage.getItem("DropshiperName"),
DropshipperPhone: localStorage.getItem("DropshiperPhone"),

}

,shouldUseNativeValidation: true,
mode: "onChange"
});
const { dirtyFields, } = useFormState({
control
});

const onSubmit = data => console.log(data)
// localStorage.setItem("email", data.Email);
;
console.log(errors);
// console.log(useForm.Email);



const [page, setPage] = useState(1)
const [dropshipper, setDropshipper] = useState(false);
const Cogs = 500000;


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

            <form onSubmit={handleSubmit(onSubmit)}>

                <ContentContainer>
                    <ContentColumn1>
                        <BackContainer>
                            <img style={{width:'18px', height:'18px', marginRight:'10px'}} alt="" src={BackArrow} />
                            <SmallTextGreyed>Back to Cart</SmallTextGreyed>
                        </BackContainer>
                            <TitleText>Delivery details</TitleText>
                            <TextLine/>
                              {/*
                            <Checkbox label="Send as dropshipper" value={dropshipper} onChange={handleDropshipper}
                                borderColor={dropshipper ? "#1BD97B" : '#CCCCCC' } /> */}
                        
                        {/* input Email */}
                        <InputContainer 
                        borderColor={dirtyFields.Email ? (errors.Email ? "#FF8A00" : "#1BD97B" ) : '#CCCCCC' }>
                            <div>
                                {dirtyFields.Email ?<Label color={errors.Email ? "#FF8A00" : "#1BD97B" }>Email</Label> :
                                null}
                                <Input onChange={localStorage.setItem("Email", getValues(["Email"]))}
                                    borderColor={dirtyFields.Email ? (errors.Email ? "#FF8A00" : "#1BD97B" ) : '#CCCCCC' }
                                    type="text" placeholder="Email" {...register("Email", {required: true,
                                    pattern: /[^@]+@[^@]+\.[^@]+/i})} />
                            </div>
                            {dirtyFields.Email ? (errors.Email ? <img alt="" src={InputWrong} /> : <img alt=""
                                src={InputCheck} />) : null}
                        </InputContainer>
                        {errors.Email?.type === 'required' && "Email name is required"}
                        {errors.Email?.type === 'pattern' && "Please enter valid email "}

                        {/* input Phone Number */}
                        <InputContainer 
                        borderColor={dirtyFields.Phone ? (errors.Phone ? "#FF8A00" : "#1BD97B" ) : '#CCCCCC' }>
                        <div>
                                {dirtyFields.Phone ?<Label color={errors.Phone ? "#FF8A00" : "#1BD97B" }>Phone Number</Label> :
                                null}
                        <Input onChange={localStorage.setItem("Phone", getValues(["Phone"]))}
                            borderColor={dirtyFields.Phone ? (errors.Phone ? "#FF8A00" : "#1BD97B" ) : '#CCCCCC' }
                            type="tel" placeholder="Phone number" {...register("Phone", {required: true,minLength: 6, maxLength: 12,
                            pattern: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i})}/> 
                            </div>
                          {dirtyFields.Phone ? (errors.Phone ? <img alt="" src={InputWrong} /> : <img alt=""
                                src={InputCheck} />) : null}
                        </InputContainer>
                             {errors.Phone?.type==='minLength' && <Warning>Minimum number is 6</Warning> } 
                             {errors.Phone?.type==='maxLength' && <Warning>Maximum number is 12</Warning> } 

                            {errors.Phone?.type==='required' && <Warning>Phone number is required</Warning> } 
                            {errors.Phone?.type==='pattern'&& <Warning>Only Accepet Number (0-9) & Character( - , + , () )</Warning> } 
                            
                        {/* input Address */} 
                        <InputTextarea
                            onChange={localStorage.setItem("Address", getValues(["Address"]))} type="text"
                            borderColor={dirtyFields.Address ? (errors.Address ? "#FF8A00" : "#1BD97B" ) : '#CCCCCC' }
                            placeholder="Delivery Address" {...register("Address", { required: true, maxLength: 120})}>
                        </InputTextarea>
                        {/* <h1>{getValues("Address").length} </h1>
                        <h1>{addressLength.address?.length}</h1> */}
                        
                        <AddressWatched style={{margin:'-2rem 0 0 0 '}} control={control} />

                        {/* {`${delivery.text}`} */}
                    </ContentColumn1>
                    <ContentColumn2>
                        <div className="Checkbox--Container">
                            {dropshipper ? <img alt="" className="checkbox__mod"
                                onClick={()=>{setDropshipper(false);setValue('DropshiperName', '', { shouldDirty: false
                            })}} src={SquareCheck}/> : <img alt="" className="checkbox__mod"
                                onClick={()=>setDropshipper(true)} src={Square}/>}
                            <SmallText>Send as dropshipper</SmallText>
                        </div>
                        <InputContainer 
                        borderColor={dirtyFields.DropshiperName ? (errors.DropshiperName ? "#FF8A00" : "#1BD97B" ) : '#CCCCCC' }>
                        <div>
                                {dirtyFields.DropshiperName ?<Label color={errors.DropshiperName ? "#FF8A00" : "#1BD97B" }>Dropshipper name</Label> :
                                null}
                        <Input disabled={dropshipper ? false : true} onChange={localStorage.setItem("DropshiperName",
                            getValues(["DropshiperName"]))} 
                            type="text"
                            placeholder="Dropshiper name" {...register("DropshiperName", { })} />
                         </div>
                          {dirtyFields.DropshiperName ? (errors.DropshiperName ? <img alt="" src={InputWrong} /> : <img alt=""
                                src={InputCheck} />) : null}
                        </InputContainer>


                        {/* input Dropshipper Phone Number */}
                             <InputContainer 
                        borderColor={dirtyFields.DropshipperPhone ? (errors.DropshipperPhone ? "#FF8A00" : "#1BD97B" ) : '#CCCCCC' }>
                        <div>
                                {dirtyFields.DropshipperPhone ?<Label color={errors.DropshipperPhone ? "#FF8A00" : "#1BD97B" }>Dropshipper phone number</Label> :
                                null}
                        <Input
                        required={dropshipper ? false : true}
                        disabled={dropshipper ? false : true} 
                         onChange={localStorage.setItem("DropshipperPhone", getValues(["DropshipperPhone"]))}
                            borderColor={dirtyFields.DropshipperPhone ? (errors.DropshipperPhone ? "#FF8A00" : "#1BD97B" ) : '#CCCCCC' }
                            type="tel" placeholder="Phone number" {...register("DropshipperPhone", {minLength: 6, maxLength: 12,
                            pattern: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i})}/> 
                            </div>
                          {dirtyFields.DropshipperPhone ? (errors.DropshipperPhone ? <img alt="" src={InputWrong} /> : <img alt=""
                                src={InputCheck} />) : null}
                        </InputContainer>
                             {errors.DropshipperPhone?.type==='minLength' && <Warning>Minimum number is 6</Warning> } 
                             {errors.DropshipperPhone?.type==='maxLength' && <Warning>Maximum number is 12</Warning> } 
                            {errors.DropshipperPhone?.type==='required' && <Warning>Phone number is required</Warning> } 
                            {errors.DropshipperPhone?.type==='pattern'&& <Warning>Only Accepet Number (0-9) & Character( - , + , () )</Warning> } 
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