import React from "react";
import styled from "styled-components"; 
function Footer (){
    return(
        <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
        <div className="row">
<div className="col-md-3 col-sm-6">
    <h4>lorem, ipsum</h4>
        <ul className="list-unstyled">
        <li>lorem, ipsum</li>   
        <li>lorem, ipsum</li>       
        <li>lorem, ipsum</li>   
        <li>lorem, ipsum</li>   
        </ul> 
        </div>
        <div className="col-md-3 col-sm-6">
    <h4>lorem, ipsum</h4>
        <ul className="list-unstyled">
        <li>lorem, ipsum</li>   
        <li>lorem, ipsum</li>       
        <li>lorem, ipsum</li>   
        <li>lorem, ipsum</li>   
        </ul> 
        </div>
        <div className="col-md-3 col-sm-6">
    <h4>lorem, ipsum</h4>
        <ul className="list-unstyled">
        <li>lorem, ipsum</li>   
        <li>lorem, ipsum</li>       
        <li>lorem, ipsum</li>   
        <li>lorem, ipsum</li>   
        </ul> 
        </div>
        <div className="col-md-3 col-sm-6">
    <h4>lorem, ipsum</h4>
        <ul className="list-unstyled">
        <li>lorem, ipsum</li>   
        <li>lorem, ipsum</li>       
        <li>lorem, ipsum</li>   
        <li>lorem, ipsum</li>   
        </ul> 
        </div>
        </div>
        </div>
        </div>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
    position: fixed;
    width: 100%;
    bottom: 0;
    box-sizing: border-box;
}
`;