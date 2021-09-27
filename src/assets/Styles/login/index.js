import styled from 'styled-components';

const ComponenteLogin = styled.div`
 
 @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 300px;
    border-radius: 10px;

    img {
      width: 100px;
      margin: 0 0 45px 0;
    }
  }

  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  div {
      display: flex;
      flex-direction: column;
      width: 335px;
      height: 60px;
    }

  button {
    width: 100%;
  }

  img {
      width: 100px;
      margin: 0 0 45px 0;
    }
 
  p {
    font-size: 18px;
    background: -webkit-linear-gradient(#FF66FF, #33CCFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  input {
    border: 1px solid #E8E8E8;
    border-radius: 3px;
    padding: 10px;
  }

  .button {
    height: 70px;
  }

  button {
    /* background-color: #3399FF; */
    /* color: white;
    padding: 15px;
    border: none; */
    border-radius: 3px;
    cursor: pointer;
    
    
  }

  /* button:hover {
    opacity: 0.8;
    transition: 0.5s;
  } */
`;

export default ComponenteLogin;
