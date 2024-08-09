import styled from "styled-components";
import flores from "../../assets/flores.png";

const MenuContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  font-family: "Francois One";
  /* background: #e6e6e6; */
  background: #333333;
  color: white;
`;

function Menu() {
  return (
    <MenuContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "23px",
          justifyContent: "center",
          marginLeft: '10px'
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // padding: "25px",
            justifyContent: "center",
            marginLeft: '25px',
            fontSize: '11px',

          }}
        >


        <h2
          style={{
            marginLeft: "22px",
            color: "white",
          }}
          >
          SAÚDE MENTAL
        </h2>

        <h2
          style={{
            marginLeft: "45px",
            color: "white",
            
          }}
          >
         PRINCIPAIS CONDIÇÕES
        </h2>

        <h2
          style={{
            marginLeft: "45px",
            color: "white",
            
          }}
          >
         CUIDANDO DA SAUDE MENTAL
        </h2>

        <h2
          style={{
            marginLeft: "45px",
            color: "white",
            
          }}
          >
         BUSCANDO AJUDA
        </h2>

        <h2
          style={{
            marginLeft: "45px",
            color: "white",
            
          }}
          >
         O QUE ESTUDAR
        </h2>
      </div>
          </div>
    </MenuContainer>
  );
}

export default Menu;
