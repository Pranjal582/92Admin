import React from 'react'
import {ContainerS} from '../../Common/CommonStyling'
import Header from '../../Common/Header'
import HOC from '../../Common/HOC'
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
    /* flex-direction: column; */

`
const Wrapper = styled.div`
    width: 50%;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    span{
       margin-bottom: 5px;
       margin-top: 10px;
       color: #6d6de5;
       font-weight: 700;
    }

    select{
        padding: 5px 10px;
       
        border-radius: 3px;
        border-color: #c0e6eb;
        outline-color: #6d6de5;
    }

    button{
        width: 128px;
        border: none;
        border-radius: 4px;
        background: #00bcd4;
        color: #fff;
        margin: 20px 0;
        padding: 5px 0;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }

`

const Agreements = () => {
  return (
    <>
    <ContainerS>
        <Header cname={"Agreements"}/>
            <MainContainer>
                <Wrapper>       
                <span>Upload Agreement :</span>
                <input type="file" accept = "application/pdf"/>
                <span>Select Agreement Type :</span>
                <select >
                    <option value="">Select opt 1</option>
                    <option value="">Select opt 2</option>
                    <option value="">Select opt 3</option>
                    <option value="">Select opt 4</option>
                </select>
                <button>Upload</button>
                </Wrapper>             
            </MainContainer>
    </ContainerS>
    </>
  )
}

export default HOC(Agreements)