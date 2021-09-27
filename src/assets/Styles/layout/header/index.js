import styled from 'styled-components';

const HeaderApp = styled.div`
  .site-page-header {
    border: 1px solid rgb(235, 237, 240);
    box-shadow: 1px 1px 2px #E0E0E0;
    background: #FFFFFF;
    
  }

  .ant-page-header-heading-title {
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  @media screen and (max-width: 414px) {
    .ant-page-header-compact .ant-page-header-heading {
      justify-content: space-evenly;
    }
  
  }

  .div-header {
      display: flex;
      justify-content: space-around;
      width: 350px;
    }


  .button {
    -webkit-box-shadow: 0 8px 6px -6px #D0D0D0;
    -moz-box-shadow: 0 8px 6px -6px #D0D0D0;
    box-shadow: 0 8px 6px -6px #D0D0D0;
    cursor: pointer;
    outline: none;
  }

`;

export default HeaderApp;
