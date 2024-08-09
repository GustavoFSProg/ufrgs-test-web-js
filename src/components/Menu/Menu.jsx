import styled from "styled-components";
import flores from "../../assets/flores.png";

const MenuContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  font-family: "Francois One";
  /* background: #e6e6e681; */
  background: #333333;
  color: white;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 23px;
  justify-content: center;
  margin-left: 10px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  font-size: 11px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

function Menu() {
  return (
    <MenuContainer>
      <ItemsContainer>
        <ListContainer>
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
        </ListContainer>
      </ItemsContainer>
    </MenuContainer>
  );
}

export default Menu;
