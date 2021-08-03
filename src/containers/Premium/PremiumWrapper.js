import styled from "styled-components";

const PremiumWrapper = styled.div`
  background-color: #f2f4f5;
  width: 100%;
  padding: 0 0 100px;
  @media (min-width: 1260px) {
    .premium-content {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 15px;
    }
  }
  @media (max-width: 1260px) and (min-width: 1020px) {
    .premium {
      .premium-content {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 15px;
      }
    }
  }
  @media (max-width: 1020px) and (min-width: 770px) {
    .premium-content {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 15px;
    }
  }
  @media (max-width: 770px) {
    .premium-content {
      display: grid;
      grid-template-columns: auto;
      grid-gap: 15px;
    }
  }

  .premium-content__box {
    background-color: #fff;
    padding: 15px;
    h4 {
      font-weight: normal;
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
    .premium-content__price {
      font-size: 16px;
      font-weight: 600;
    }
    .premium-content__img {
      img {
        width: 295px;
        height: 192px;
        object-fit: cover;
        justify-self: center;
      }
    }
  }
`;

export default PremiumWrapper;
