import styled from 'styled-components'

export const Container = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width:  400px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background500};
  height: 100vh;
  ::-webkit-scrollbar {
    width: 10px;
  } 

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 10px;
    border: 2px solid #f1f1f1;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #444;
  }
`