import styled from "styled-components";
import colors from "../../data/colors";

const FooterWrapper = styled.footer`
    transition: 1s;

    &.light {
        background-color: ${colors.light};
        color: ${colors.dark} !important;
        a {
        color: ${colors.dark} !important;
        }
    }
    &.dark {
        background-color: ${colors.dark};
        color: ${colors.light} !important;
        a {
        color: ${colors.light} !important;
        }
    }
    a {
        margin: 0 3px;
    }
    p {
        font-size: 14px;
        margin: 10px 0 0;
        text-align: center;
    }
    .footer-download-links {
        margin-left: 60px;
    }
`

export default FooterWrapper