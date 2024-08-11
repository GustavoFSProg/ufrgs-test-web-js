import styled from "styled-components";
import flores from "../../assets/flores.png";

const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  font-family: "Francois One";
  /* background: #e6e6e6; */
  background: white;
  color: black;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    align-items: left;
  }
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
  margin-left: 25px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: -5px;
    padding: 28px;
  }
`;

const H2 = styled.h2`
  display: flex;
  margin-left: 22px;
  color: #e84747;
  letter-spacing: 1px;
  font-size: 40px;

  @media screen and (max-width: 700px) {
    width: 100%;
    font-size: 28px;
    margin-left: 0px;
    margin-top: 2px;
  letter-spacing: 0px;

  }
`;

const Img = styled.img`
width: 50px;
height: 80px;

@media screen and (max-width: 800px){
  width: 29px;
height: 44px;

}
`

function Header() {
  return (
    <HeaderContainer>
      <SubContainer>
        <Img width="50" height="80" src={flores} alt="flores" />
        <H2>Ambulatório de Saúde Mental - NH</H2>
      </SubContainer>
    </HeaderContainer>
  );
}

export default Header;
