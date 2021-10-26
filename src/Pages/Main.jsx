import React, {useState, useEffect} from 'react'
import Payment from './Payment'
import Finish from './Finish'
import Arrow from './/style/image/keyboard_arrow_right.svg'
import Square from './/style/image/square-regular.png'
import SquareCheck from './/style/image/check-square-regular.png'
import InputCheck from './/style/image/check.png'
import InputWrong from './/style/image/clear.png'
import BackArrow from './/style/image/arrow_back.png'
import './/style/Main.scss'
import { useForm, useFormState, useWatch } from 'react-hook-form';
import {CenterContainer, Separator, LabelMedium, Space, SmallContentContainer,SmallTextBold, InfoContainer, SubmitButton, MidTitleText,SmallTextGreyed, BackContainer, TextLine,Label,
InputTextarea, ContentContainer, ContentColumn1, ContentColumn2, ContentColumn3,StepImg,
TitleText,StepText,StepContainer, StepIndicatorBlur,Input,SmallText,
BG, Container, Step, StepIndicator, InputContainer,Warning,} from './style/styled-component'




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
DropshipperPhone: localStorage.getItem("DropshipperPhone"),

}

,shouldUseNativeValidation: true,
mode: "onChange"
});
const { dirtyFields, } = useFormState({
control
});

const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("Email", getValues(["Email"]));
    localStorage.setItem("Phone", getValues(["Phone"]));
    localStorage.setItem("Address", getValues(["Address"]));
    localStorage.setItem("DropshiperName", getValues(["DropshiperName"]));
    localStorage.setItem("DropshipperPhone", getValues(["DropshipperPhone"]));
    setPage(2);
}
// localStorage.setItem("email", data.Email);
;
console.log(errors);
// console.log(useForm.Email);


const [page, setPage] = useState(1)
const [dropshipper, setDropshipper] = useState(false);

const [fee, setFEE] = useState({
Dropship: (localStorage.getItem("DropshipOngkir") ? parseInt(localStorage.getItem("DropshipOngkir")) : 0 ),
Ongkir:(localStorage.getItem("Ongkir") ? parseInt(localStorage.getItem("Ongkir")) : 0 ),
Cogs :500000,
Ekspedisi:localStorage.getItem("Ekspedisi"),
Payment:(localStorage.getItem("Payment") === null ? localStorage.getItem("Payment") : "" ),

Delivery:localStorage.getItem("Delivery"),
})

function TOTAL (){
return fee.Cogs + fee.Dropship + fee.Ongkir
}

function orderID (length, chars){
    var result = ''; 
for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]; 
return result; } 



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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ContentContainer>
                            {page === 1 ?
                    <SmallContentContainer>
                    <ContentColumn1>
                        <BackContainer>
                            <img style={{width:'18px', height:'18px', marginRight:'10px'}} alt="" src={BackArrow} />
                            <SmallTextGreyed>Back to Cart</SmallTextGreyed>
                        </BackContainer>
                        <TitleText>Delivery details</TitleText>
                        <TextLine />
                     
                        {/* input Email */}
                        <InputContainer borderColor={dirtyFields.Email ? (errors.Email ? "#FF8A00" : "#1BD97B" )
                            : '#CCCCCC' }>
                            <div>
                                {dirtyFields.Email ?<Label color={errors.Email ? "#FF8A00" : "#1BD97B" }>Email</Label> :
                                null}
                                <Input 
                                // onChange={localStorage.setItem("Email", getValues(["Email"]))}
                                    borderColor={dirtyFields.Email ? (errors.Email ? "#FF8A00" : "#1BD97B" ) : '#CCCCCC'
                                    } type="text" placeholder="Email" {...register("Email", {required: true,
                                    pattern: /[^@]+@[^@]+\.[^@]+/i})} />
                            </div>
                            {dirtyFields.Email ? (errors.Email ? <img alt="" src={InputWrong} /> : <img alt=""
                                src={InputCheck} />) : null}
                        </InputContainer>
                        {errors.Email?.type === 'required' && <Warning>Email name is required</Warning>}
                        {errors.Email?.type === 'pattern' && <Warning>Please enter valid email </Warning>}

                        {/* input Phone Number */}
                        <InputContainer borderColor={dirtyFields.Phone ? (errors.Phone ? "#FF8A00" : "#1BD97B" )
                            : '#CCCCCC' }>
                            <div>
                                {dirtyFields.Phone ?<Label color={errors.Phone ? "#FF8A00" : "#1BD97B" }>Phone
                                    Number</Label> :
                                null}
                                <Input 
                                // onChange={localStorage.setItem("Phone", getValues(["Phone"]))}
                                    borderColor={dirtyFields.Phone ? (errors.Phone ? "#FF8A00" : "#1BD97B" ) : '#CCCCCC'
                                    } type="tel" placeholder="Phone number" {...register("Phone", {required:
                                    true,minLength: 6, maxLength: 12,
                                    pattern: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\\\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\\\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i})}/> </div> 
                                    {dirtyFields.Phone ? (errors.Phone ? <img alt="" src={InputWrong} /> : <img alt="" src={InputCheck} />)
                                : null}
                        </InputContainer>
                        {errors.Phone?.type==='minLength' && <Warning>Minimum number is 6</Warning> }
                        {errors.Phone?.type==='maxLength' && <Warning>Maximum number is 12</Warning> }
                        {errors.Phone?.type==='required' && <Warning>Phone number is required</Warning> }
                        {errors.Phone?.type==='pattern'&& <Warning>Only Accepet Number (0-9) & Character( - , + , () )
                        </Warning> }

                        {/* input Address */}
                        <InputTextarea 
                        // onChange={localStorage.setItem("Address", getValues(["Address"]))} 
                        type="text"
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
                                onClick={()=>{setDropshipper(false);
                                    localStorage.setItem("DropshipOngkir", 0)
                                    setFEE({...fee,Dropship: 0});
                                    setValue('DropshipperPhone', '', { shouldDirty: false });
                                    setValue('DropshiperName', '', { shouldDirty: false
                                })}} 
                            src={SquareCheck}/> : <img alt="" className="checkbox__mod"
                                onClick={()=>{setDropshipper(true); 
                                    localStorage.setItem("DropshipOngkir", 5900)
                                setFEE({...fee,Dropship: 5900 })}} src={Square}/>}
                            <SmallText opacity="0.8">Send as dropshipper</SmallText>
                        </div>
                        <InputContainer borderColor={dirtyFields.DropshiperName ? (errors.DropshiperName ? "#FF8A00"
                            : "#1BD97B" ) : '#CCCCCC' }>
                            <div>
                                {dirtyFields.DropshiperName ?<Label color={errors.DropshiperName ? "#FF8A00" : "#1BD97B"
                                    }>Dropshipper name</Label> :
                                null}
                                <Input disabled={dropshipper ? false : true}
                                    // onChange={localStorage.setItem("DropshiperName", getValues(["DropshiperName"]))}
                                    type="text" placeholder="Dropshiper name" {...register("DropshiperName", { })} />
                            </div>
                            {dirtyFields.DropshiperName ? (errors.DropshiperName ? <img alt="" src={InputWrong} /> :
                            <img alt="" src={InputCheck} />) : null}
                        </InputContainer>
                        {errors.DropshiperName?.type==='required' && <Warning>Phone number is required</Warning> }

                        {/* input Dropshipper Phone Number */}
                        <InputContainer borderColor={dirtyFields.DropshipperPhone ? (errors.DropshipperPhone ? "#FF8A00"
                            : "#1BD97B" ) : '#CCCCCC' }>
                            <div>
                                {dirtyFields.DropshipperPhone ?<Label color={errors.DropshipperPhone ? "#FF8A00"
                                    : "#1BD97B" }>Dropshipper phone number</Label> :
                                null}
                                <Input required={dropshipper ? false : true} disabled={dropshipper ? false : true}
                                    // onChange={localStorage.setItem("DropshipperPhone", getValues(["DropshipperPhone"]))}
                                    borderColor={dirtyFields.DropshipperPhone ? (errors.DropshipperPhone ? "#FF8A00"
                                    : "#1BD97B" ) : '#CCCCCC' } type="tel" placeholder="Phone number"
                                    {...register("DropshipperPhone", {minLength: 6, maxLength: 12,
                                    pattern: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\\\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\\\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i})}/> </div>
                                    {dirtyFields.DropshipperPhone ? (errors.DropshipperPhone ? <img alt=""
                                    src={InputWrong} /> : <img alt="" src={InputCheck} />) : null}
                        </InputContainer>
                        {errors.DropshipperPhone?.type==='minLength' && <Warning>Minimum number is 6</Warning> }
                        {errors.DropshipperPhone?.type==='maxLength' && <Warning>Maximum number is 12</Warning> }
                        {errors.DropshipperPhone?.type==='required' && <Warning>Phone number is required</Warning> }
                        {errors.DropshipperPhone?.type==='pattern'&& <Warning>Only Accepet Number (0-9) & Character( - ,
                            + , () )</Warning> }
                    </ContentColumn2>
                    </SmallContentContainer>
                    //=========================== end Page 1 ====================
                    : 
                    (page === 2 ?
                        <ContentColumn1 >
                        <BackContainer onClick={()=>{setPage(1)}}>
                            <img style={{width:'18px', height:'18px', marginRight:'10px'}} alt="" src={BackArrow} />
                            <SmallTextGreyed>Back to Delivery</SmallTextGreyed>
                        </BackContainer>
                        <TitleText>Shipment</TitleText>
                        <TextLine />
                        <ContentContainer>
                        <InputContainer className='ChooseButton' onClick={()=>{
                            localStorage.setItem("Ekspedisi", "GO-SEND");
                            localStorage.setItem("Delivery", "today");
                            localStorage.setItem("Ongkir", 15000);
                            setFEE({...fee,Ongkir: 15000,Ekspedisi: "GO-SEND", Delivery: "today"})}} 
                            background={fee.Ekspedisi === 'GO-SEND' ? "rgba(27, 217, 123, 0.1)" : "transparent"}
                            borderColor={fee.Ekspedisi === 'GO-SEND' ?  "#1BD97B" : '#CCCCCC' }>
                                <div>
                                <Label color="#000000">GO-SEND</Label>
                                <LabelMedium>15.000</LabelMedium>
                                </div>
                                    {fee.Ekspedisi === 'GO-SEND' ? <img alt="" src={InputCheck} /> : null}
                        </InputContainer>
                        <Space>__</Space>
                        <InputContainer className='ChooseButton' onClick={()=>{
                            localStorage.setItem("Ekspedisi", "JNE");
                            localStorage.setItem("Delivery", "2 days");
                            localStorage.setItem("Ongkir", 9000);
                            setFEE({...fee,Ongkir: 9000,Ekspedisi: "JNE", Delivery: "2 days"})}} 
                            background={fee.Ekspedisi === 'JNE' ? "rgba(27, 217, 123, 0.1)" : "transparent"}
                            borderColor={fee.Ekspedisi === 'JNE' ?  "#1BD97B" : '#CCCCCC' }>
                                <div>
                                <Label color="#000000">JNE</Label>
                                <LabelMedium>9.000</LabelMedium>
                                </div>
                                    {fee.Ekspedisi === 'JNE' ? <img alt="" src={InputCheck} /> : null}
                        </InputContainer>
                        <Space>__</Space>
                        <InputContainer className='ChooseButton' onClick={()=>{
                            localStorage.setItem("Ekspedisi", "Personal Courier");
                            localStorage.setItem("Delivery", "1 days");
                            localStorage.setItem("Ongkir", 29000);
                            setFEE({...fee,Ongkir: 29000, Ekspedisi: "Personal Courier", Delivery: "1 days"})}} 
                            background={fee.Ekspedisi === 'Personal Courier' ? "rgba(27, 217, 123, 0.1)" : "transparent"}
                            borderColor={fee.Ekspedisi === 'Personal Courier' ?  "#1BD97B" : '#CCCCCC' }>
                                <div>
                                <Label color="#000000">Personal Courier</Label>
                                <LabelMedium>29.000</LabelMedium>
                                </div>
                                    {fee.Ekspedisi === 'Personal Courier' ? <img alt="" src={InputCheck} /> : null}
                        </InputContainer>
                        </ContentContainer>
          
                        <TitleText style={{marginTop:"60px"}}>Payment</TitleText>
                        <TextLine />
                        <ContentContainer>
                        <InputContainer className='ChooseButton' onClick={()=>{
                            localStorage.setItem("Payment", "e-Wallet");
                            setFEE({...fee,Payment: "e-Wallet" })}} 
                            background={fee.Payment === 'e-Wallet' ? "rgba(27, 217, 123, 0.1)" : "transparent"}
                            borderColor={fee.Payment === 'e-Wallet' ?  "#1BD97B" : '#CCCCCC' }>
                                <div>
                                <Label color="#000000">e-Wallet</Label>
                                <LabelMedium>1.500.000 left</LabelMedium>
                                </div>
                                    {fee.Payment === 'e-Wallet' ? <img alt="" src={InputCheck} /> : null}
                        </InputContainer>
                        <Space>__</Space>
                        <InputContainer className='ChooseButton' onClick={()=>{
                            localStorage.setItem("Payment", "Bank Transfer");
                            setFEE({...fee,Payment: "Bank Transfer"})}} 
                            background={fee.Payment === 'Bank Transfer' ? "rgba(27, 217, 123, 0.1)" : "transparent"}
                            borderColor={fee.Payment === 'Bank Transfer' ?  "#1BD97B" : '#CCCCCC' }>
                                <div>
                                <LabelMedium opacity color="#000000">Bank Transfer</LabelMedium>
                                </div>
                                    {fee.Payment === 'Bank Transfer' ? <img alt="" src={InputCheck} /> : null}
                        </InputContainer>
                        <Space>__</Space>
                        <InputContainer className='ChooseButton' onClick={()=>{
                            localStorage.setItem("Payment", "Virtual Account");
                            setFEE({...fee,Payment: "Virtual Account"})}} 
                            background={fee.Payment === 'Virtual Account' ? "rgba(27, 217, 123, 0.1)" : "transparent"}
                            borderColor={fee.Payment === 'Virtual Account' ?  "#1BD97B" : '#CCCCCC' }>
                                <div>
                                {/* <Label color="#000000">Personal Courier</Label> */}
                                <LabelMedium>Virtual Account</LabelMedium>
                                </div>
                                    {fee.Payment === 'Virtual Account' ? <img alt="" src={InputCheck} /> : null}
                        </InputContainer>
                        </ContentContainer>
                        </ContentColumn1> :
                        
                        <CenterContainer>
                             <div>
                        <TitleText>Thank You</TitleText>
                        <TextLine />
                        <SmallText>Order ID : {orderID(5,'23456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ')}</SmallText>
                        <SmallTextGreyed>{`Your order will be delivered ${fee.Delivery} by ${fee.Ekspedisi}`} </SmallTextGreyed>
                        <BackContainer style={{marginTop:'60px'}} 
                        onClick={async () =>{
                          await localStorage.clear();
                          await  window.location.reload();
                          await  setPage(1); 
                                                        }}>
                            <img style={{width:'18px', height:'18px', marginRight:'10px'}} alt="" src={BackArrow} />
                            <SmallTextGreyed>Go to homepage</SmallTextGreyed>
                        </BackContainer>
                        </div>
                        </CenterContainer>)  }





                    <ContentColumn3>
                        <div className="ContentColumn3--Up">
                            <MidTitleText>Summary</MidTitleText>
                            <InfoContainer>
                                <SmallTextGreyed>10 items purchased</SmallTextGreyed>
                            </InfoContainer>
                          
                            {page === 2 || page === 3 ? <div>
                                <Separator margin="17px 0 21px 0" />
                                <SmallText margin="0.2rem 0" opacity> Delivery estimation</SmallText>
                            {fee.Delivery ? <LabelMedium color="#1BD97B">{`${fee.Delivery} by ${fee.Ekspedisi}` }  </LabelMedium> : null }</div>: null}
                            
                            {page === 3 ? <div><Separator margin="17px 0 21px 0" />
                            <SmallText margin="0.2rem 0" opacity>Payment Method</SmallText>
                            <LabelMedium color="#1BD97B">{`${fee.Payment}` }  </LabelMedium></div>: null}
                            
                        </div>
                        <div className="ContentColumn3--Bottom">
                            <InfoContainer>
                                <SmallTextGreyed>Cost of goods</SmallTextGreyed>
                                <SmallTextBold>{`${fee.Cogs?.toLocaleString(['ban', 'id'])}`}</SmallTextBold>
                            </InfoContainer>
                            <InfoContainer>
                                <SmallTextGreyed>Dropshiping Fee</SmallTextGreyed>
                                <SmallTextBold>{`${fee.Dropship?.toLocaleString(['ban', 'id']) }`}</SmallTextBold>
                            </InfoContainer>
                            {fee.Ekspedisi ? <InfoContainer>
                                <SmallTextGreyed>{`${fee.Ekspedisi} shipment` } </SmallTextGreyed>
                                <SmallTextBold>{`${fee.Ongkir?.toLocaleString(['ban', 'id'])}`}</SmallTextBold>
                            </InfoContainer> : null }
                            
                            <InfoContainer style={{marginTop:"2rem"}} className="SumText" >
                                <MidTitleText >Total</MidTitleText>
                                <MidTitleText>{`${TOTAL().toLocaleString(['ban', 'id'])}`}</MidTitleText>
                            </InfoContainer>
                            {page === 1 ?  <SubmitButton type="submit"
                            // onClick={()=>{setPage(2)}}
                            >Continue to Payment</SubmitButton> 
                            : (page === 2 ? (fee.Payment ?<SubmitButton type="submit"
                            onClick={()=>{setPage(3)}}
                            >{`Pay with ${fee.Payment}`}</SubmitButton> : null) : null)} 
                           
                                                        {/* disabled={fee.Ekspedisi ? "false" : "true"} */}

                        </div>
                    </ContentColumn3>
                </ContentContainer>
            </form>

        </div>


       
        
       




    </Container>

</BG>
)
}

export default Main