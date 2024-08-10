import styled from "styled-components";
import flores from "../../assets/flores.png";
import { useEffect, useState } from "react";


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
  const [open, setOpen] = useState(false)


function FirstMenu() {
  const [opens, setOpens] = useState(true);


  return (
    <>
        <>
      <div
        style={{
            display: "flex",
            flexDirection: "column",
            width: "12.5rem",
            height: "17rem",
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            background: "#d9d9d9",
            marginLeft: "50px",
            border: '1px solid #a6a6a6',
            fontSize: '16px',
            color: '#333333',
        }}
        onMouseLeave={() => setOpen(false)}
        >
          <div style={{ display: "flex",
            flexDirection: "column",
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginLeft: '15px',
  fontFamily: "Francois One",
            
            }}>

        <span style={{marginTop: '18px', cursor: 'pointer'}}>DEPRESSÃO</span>
        <span style={{marginTop: '10px', cursor: 'pointer'}}>BIPOLARIDADE</span>
        <span style={{marginTop: '10px', cursor: 'pointer'}}>AUTISMO</span>
        <span style={{marginTop: '10px', cursor: 'pointer'}}>EPILEPSIA</span>
        <span style={{marginTop: '10px', cursor: 'pointer'}}>LABIRINTITE</span>
        <span style={{marginTop: '10px', cursor: 'pointer'}}>TONTURA</span>
          </div>
      </div>
          </>
    </>
  );
}

  return (
    <>
    <MenuContainer >
      <ItemsContainer>
        <ListContainer >
          <h2
            style={{
              marginLeft: "22px",
              color: "white",
              cursor: 'pointer',
            }}
            onClick={() => setOpen(true)}
            // onMouseLeave={() => setOpen(false)}

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

     {open === true ? <FirstMenu /> : null }
     </>
  );
}

export default Menu;
