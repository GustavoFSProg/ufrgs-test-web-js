import { useState } from 'react'
import foto from './assets/foto.webp'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  /* background: green; */
  justify-content: center;
  

`

const Conteudo = styled.div`
  display: flex;
  width: 56rem;
  height: 25rem;
  /* height: auto; */
  /* background: yellow; */
  flex-direction: column;
  color: #333333;
  align-items: flex-start;
  font-family: 'Francois One';

`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Menu/>
        <Container >
            <Conteudo>
              <h2 style={{marginTop: '40px'}}>Bem-vindos ao site Saúde Mental UFRGS!</h2>
              <div style={{width: '100%',
                marginTop: '-13px',
                height: '5px', background: '#333333', color: 'transparent'}} >aa</div>
               <img width="100%" style={{marginTop: '16px', }} src={foto} alt="" />
                <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
                  <p style={{textAlign: 'justify', fontSize: '18px',
                    fontWeight: '0px',
                    color: '#595959'}}>
                  O site Saúde Mental foi criado em 2018 pelo Centro 
                  Interdisciplinar de Pesquisa e Atenção à Saúde (CIPAS),
                   órgão auxiliar do Instituto de Psicologia. Em 2023,
                    o site foi vinculado ao Programa Saber Viver,
                     o qual tem por objetivo a promoção de saúde
                      e bem-estar estudantil na universidade.


                  </p>

                  <p style={{textAlign: 'justify', fontSize: '18px',
                    fontWeight: '0px',
                    color: '#595959'}}>
                  Em nossos conteúdos, são abordados aspectos gerais da saúde mental, principais condições, estratégias de cuidado, orientações sobre acolhimento em situações de crise e possibilidades de acesso a tratamento em serviços de saúde. As publicações disponibilizadas 
                   foram elaboradas por
                    colaboradores de diversos
                     setores da universidade.
                  </p>
                </div>
            </Conteudo>

        </Container>
       
      </div>
     
    </>
  )
}

export default App
