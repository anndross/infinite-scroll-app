import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: scroll;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background100};
  padding: 10px;
  @media (max-width: 600px) {
    display: none;

  }
`
export const Content = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 70%;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  width: 60%;
  }
  @media (max-width: 790px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  width: 80%;
  }
`