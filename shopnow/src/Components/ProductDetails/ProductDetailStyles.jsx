import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 50px;
  width: 80%;
  margin: 0 auto;
  font-size: 14px;
  margin-bottom: 50px;
  /* height: 597px; */
  .former{
		text-decoration: line-through;
	}
  .left-wrapper {
    display: flex;
    gap: 50px;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */

    .small-img {
      height: 80px;
      width: 80px;
      border: 2px solid #ff3209;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  .large-img {
    width: 716px;
    height: 597px;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    /* align-items: center; */
    img {
      width: 100%;
    }
  }

  .txt {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .available {
      display: flex;
      gap: 10px;
    }
    .code, .instock{
      font-weight: bold;
    }
    .name{
      color: #3E3636;
      font-weight: bold;
      font-size: 30px;
    }

    .value {
      display: flex;
      gap: 20px;
    }

    .fl2 div {
      display: flex;
      gap: 5px;
    }

    .child div {
      border: 1px solid #ff3209;
      height: 20px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }

    .discount{
      color: #ff3209;
    }

    /* .fl3{
      display: flex;
      gap: 5px;
    } */

    .size {
      display: flex;
      gap: 5px;
    }

    .size div {
      border: 1px solid #ff3209;
      height: 20px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }

    .count {
      display: flex;
      gap: 50px;
    }

    .fl4 {
      /* display: flex; */
      gap: 5px;
    }

    .color {
      display: flex;
      gap: 5px;
    }

    .color div {
      border: 1px solid #ff3209;
      height: 20px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }

    .fl5 {
      display: flex;
      gap: 20px;
      button {
        background-color: #ff3209;
        padding: 0.5rem 1.4rem 0.5rem 1.4rem;
        border-radius: 10px;
        font-size: 1.23rem;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
    }

    hr{
      border: 1px dashed #C8C8C8;
    }
    .lit{
      color: #C8C8C8;
    }
  }
`;
