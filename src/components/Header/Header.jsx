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
`;

function Header() {
  return (
    <HeaderContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "39px",
          justifyContent: "center",
          marginLeft: '10px'
        }}
      >
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
      </div>
    </HeaderContainer>
  );
}

export default Header;
