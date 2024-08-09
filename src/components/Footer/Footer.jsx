import styled from "styled-components";
import flores from "../../assets/flores.png";

const FooterContainer = styled.div`
   display: flex;
  width: 100vw;
  height: 7rem;
  justify-content: center;
  align-items: center;
  font-family: "Francois One";
  /* background: #e6e6e681; */
  background: #333333;
  color: white;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    align-items: left;
  }
`;


const H2 = styled.h2`
  display: flex;
  margin-left: 22px;
  color: #bfbfbf;
  letter-spacing: 1px;
  font-size: 16px;

  @media screen and (max-width: 700px) {
    width: 100%;
    font-size: 28px;
    margin-left: 0px;
    margin-top: 2px;
  letter-spacing: 0px;

  }
`;

function Footer() {
  return (
    <FooterContainer>
        <H2>example@gmail.com</H2>
    </FooterContainer>
  );
}

export default Footer;
