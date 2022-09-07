import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #686363 0% 0% no-repeat padding-box;
  .foot-contianer {
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 78px 0 189px 0;

    img {
      color: black;
    }
  }

  .foot-map {
    display: flex;
    gap: 15px;
    flex-direction: column;

    p {
      color: #fff;
    }
    h2 {
      color: #fff;
    }
  }

  .social {
    display: flex;
    gap: 20px;
  }
  .first {
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 25px;
  }

  .copyright {
    text-align: center;
    color: #fff;
    padding-bottom: 12px;
  }
  @media (max-width: 440px) {
    .foot-contianer {
      padding: 40px 0 89px 0;
    }
    .soc {
      padding-top: 20px;
    }
    .first {
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;
