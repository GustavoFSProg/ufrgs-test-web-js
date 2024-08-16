import { useState } from "react";
import foto from "./assets/foto.webp";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  /* background: green; */
  justify-content: center;

  @media screen and (max-width: 800px) {
    height: auto;
  }
`;

const Conteudo = styled.div`
  display: flex;
  width: 56rem;
  height: 25rem;
  /* height: auto; */
  /* background: yellow; */
  flex-direction: column;
  color: #333333;
  align-items: flex-start;
  font-family: "Francois One";

  @media screen and (max-width: 800px) {
    width: 81%;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Menu />
        <Container>
          <Conteudo>
            <h2 style={{ marginTop: "40px" }}>
              Bem-vindos ao site do Ambulatório de Saúde Mental!
            </h2>
            <div
              style={{
                width: "100%",
                marginTop: "-13px",
                height: "5px",
                background: "#333333",
                color: "transparent",
              }}
            >
              aa
            </div>
            <img width="100%" style={{ marginTop: "16px" }} src={foto} alt="" />
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "18px",
                  fontWeight: "0px",
                  color: "#595959",
                }}
              >
                 Este é somente um texto de exemplo.
                Fusce eleifend malesuada arcu, sit amet accumsan sapien suscipit vitae. 
                Proin gravida ac dui quis tincidunt. Nam et sodales mauris.
                 Maecenas lectus purus, tincidunt ut lobortis non, condimentum non nisl. 
                 Interdum et malesuada fames ac ante ipsum primis in faucibus..
                 Aliquam consequat nisi sit amet augue tincidunt, et interdum risus malesuada.
              </p>

              <p
                style={{
                  textAlign: "justify",
                  fontSize: "18px",
                  fontWeight: "0px",
                  color: "#595959",
                }}
              >
                Em nossos conteúdos, Este é somente um texto de exemplo.
                Fusce eleifend malesuada arcu, sit amet accumsan sapien suscipit vitae. 
                Proin gravida ac dui quis tincidunt. Nam et sodales mauris.
                Aliquam consequat nisi sit amet augue tincidunt, et interdum risus malesuada.
                 Maecenas lectus purus, tincidunt ut lobortis non, condimentum non nisl. 
                 Interdum et malesuada fames ac ante ipsum primis in faucibus...
              </p>
            </div>
          </Conteudo>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default App;
