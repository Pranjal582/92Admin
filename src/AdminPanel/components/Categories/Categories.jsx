import React from 'react';
import styled from 'styled-components';
import Header from '../../Common/Header';
import HOC from '../../Common/HOC';
import CategoriesList from './CategoriesList';




function Complain(props) {




    const Container = styled.div`
    width: 100%;
    padding: 20px;
    `
    const MainContainer = styled.div`
    margin: 80px 0;
    width: 100%;

    h5{
        margin: 20px 0;
    }

    `


    return (
        <Container>
            <MainContainer > 
                <Header  needaddbtn={true} btn={"Add Categories"} cname="Categories" pathname={'/add-categories'}/> 
                
                <CategoriesList/>                
            </MainContainer>
        </Container>
    )
}



export default HOC(Complain)
