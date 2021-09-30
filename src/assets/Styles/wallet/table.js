import styled from "styled-components";

export const ComponenteWallet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 90%;
    border-radius: 10px;
  }
`

export const ComponenteForm = styled.div`

  @media screen and (max-width: 414px){
    form {
      height: 330px;
      flex-direction: column;
      align-items: center;
      
    }

    .campos {
      width: min-content;
      margin: 10px 0 0 0;
    }

    input, select {
      border:0;
      border-bottom: 2px solid #eee;
      border-radius:10px;
      width: 90vw;
      background-color: #e6f2ff;
      padding: 5px;
    }

  }

  input, select {
      border:0;
      border-bottom: 2px solid #eee;
      border-radius:10px;
      background-color: #e6f2ff;
    }
  
`

export const TableComponent = styled.div`
table {
  width: 100vw;
  margin: 10px 0 0 0;
  border:1px solid #EEEEEE;
}

th {
  display:flex;
  width:100%;
  background: #343a40;
  padding:(12px * 1.5) 0;
  color: #FFF;
  justify-content: center;
  align-items: center;
}

tr {
  display:flex;
  width:100%;
  padding:(12px * 1.5) 0;

    &:nth-of-type(odd) {
      background: #EEEEEE;
    }
}

td {
  flex: 1 1 20%;
  text-align:center;
}
    
`