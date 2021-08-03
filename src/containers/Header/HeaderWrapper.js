import styled from "styled-components"
import colors from "../../data/colors"

const HeaderWrapper = styled.header`
    transition: 1s;
    &.absolute {
        position: absolute;
    }
    &.light {
        background-color: ${colors.light};
        a {
            color: ${colors.dark} !important;
        }
    }
    &.dark {
        background-color: ${colors.dark};
        a {
            color: ${colors.light} !important;
        }
    }
`

export default HeaderWrapper