import styled from "styled-components";
import colors from "../../data/colors";

const HeaderWrapper = styled.header`
  a {
    font-weight: 500;
  }
  &.active {
    top: -100%;
    transition: 300ms;
  }

  &.light {
    transition: 1s;
    background-color: ${colors.light};
    a {
      color: ${colors.dark} !important;
    }
  }
  &.dark {
    transition: 1s;
    background-color: ${colors.dark};
    a {
      color: ${colors.light} !important;
    }
  }
`;

export default HeaderWrapper;
