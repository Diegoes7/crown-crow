import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { FooterContainer, TitleContainer } from "./footer.styles.jsx";

const Footer = () => (
  <FooterContainer>
    <Logo />
    <TitleContainer> Coolest space to reach the Sky</TitleContainer>
  </FooterContainer>
);

export default Footer;
