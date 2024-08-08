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

  @media screen and (max-width: 700px){
    flex-direction: column;
  }
`;


const SubContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 39px;
  justify-content: center;
  margin-left: 10px;

  @media screen and (max-width: 500px){
    flex-direction: column;
  }
`;


function Header() {
  return (
    <HeaderContainer>
      <SubContainer >

     
     
        <img width="50" height="80" src={flores} alt="flores" />

        <h2
          style={{
            marginLeft: "22px",
            color: "#e84747",
            lineHeight: "10px",
            fontSize: "40px",
          }}
          >
          Saúde Mental UFRGS
        </h2>
      </SubContainer>
    </HeaderContainer>
  );
}

export default Header;
