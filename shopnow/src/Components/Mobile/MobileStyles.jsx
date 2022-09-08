import styled from "styled-components";



  export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 26px;
  padding: 3px 14px 38px 14px;
  z-index: 2;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 19px 24px;
    gap: 10px;
    width: 270px;
    height: 58px;
    background: #ff8a00;
    border-radius: 10px;
    border: none;
  }

  .sign-in {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    align-items: center;
    color: #ff8a00;
  }
  .service {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ccc;
    padding: 10px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;