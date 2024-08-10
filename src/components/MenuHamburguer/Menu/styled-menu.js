import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: none;
  margin-left: -49px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 750px) {
    display: flex;
    justify-content: right;
  }
`
