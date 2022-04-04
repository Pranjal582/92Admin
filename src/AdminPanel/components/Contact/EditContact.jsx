import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import Header from '../../Common/Header'
import HOC from '../../Common/HOC'
import styled from 'styled-components'


const MainContainers = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid lightblue;
    border-radius: 5px;
    padding: 20px;
  
`

const Wrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
    width: 50%;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(64,59,64,1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(64,59,64,1);
    box-shadow: 2px 2px 5px 0px rgba(64,59,64,1);

    h6{
        margin-top: 7px;
        color: #3a3952;
        font-weight: 700; 
        width: 100%;
    }
    input, textarea{
        width: 100%;
        outline-color: #88bfd1;
        border-radius: 3px;
        border: 1px solid lightblue;
        padding: 6px 10px;
    }
    button{
        margin: 20px 0;
    }
    span{

        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;   
        input{
            width: 100%;

        }
    }

    @media screen and (max-width: 768px) {    
        width: 80%;

    }

    button{

        margin: 20px 0;
        border-radius: 2px;
        padding: 5px 20px;
        background-color: #275565;
        color: #fff;
        border: none;

    }  
`



const EditContact = () => {
  return (
    <>
        <ContainerS>
            <Header cname={"Edit Contact Details"} needaddbtn={false}  />
                <MainContainers>
                    <Wrapper>
                         
                        <h6>  Company Name : </h6>
                        <input type="text" /> 
                        <h6> E-mail :</h6>
                        <input type="text" />
                        <h6> Contact No : </h6> 
                        <input type="number" name="" id="" />  
                        <h6>  Address :</h6>  
                        <span> City <input type="text" /></span>                        
                        <span>Pin<input type="text" /></span> 

                        <button> Save </button>  

                    </Wrapper>              
                </MainContainers>
        </ContainerS>    
    </>
  )
}

export default HOC(EditContact)