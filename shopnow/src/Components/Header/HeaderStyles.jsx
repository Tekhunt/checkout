import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 30px 62px;
  overflow-x: hidden;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  overflow: hidden;

  .hamburger {
    display: none;
  }
  @media (max-width: 1024px) {
    padding: 21px 22px;

    .hamburger {
      display: inline;
    }
  }
`;

export const Linkwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  .service-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 343%;
    align-items: center;
    color: #333333;
    text-decoration: none;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
  .user{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ccc;
    padding: 10px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
  a {
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    color: #333333;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 30px;
    gap: 10px;
    width: 122px;
    height: 52px;
    border: none;
    background: #ff3209 0% 0% no-repeat padding-box;
    border-radius: 10px;
    color: #fff;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const MenuContainer = styled.div`
  z-index: 4;
`;

export const Parent = styled.div`
  .modal {
    display: block;
    position: absolute;
    top: 140px;
    right: 0px;
    z-index: 4;
  }
  @media (max-width: 1024px) {
    .modal {
      display: none;
    }
  }
`;