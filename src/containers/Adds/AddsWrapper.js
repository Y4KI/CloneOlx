import styled from "styled-components";

const AddsWrapper = styled.div`
    width: 100%;
    margin: 100px 0;
    .Add {
        background-color: #002f34;
        .add-content {
            h1 {
                color: white;
                font-size: 24px;
            }
            button {
                background-color: white;
                border: none;
                padding: 0.5rem 2rem;
                border-radius: 5px;
            }
        }
    }
    .infoadd {
        background-color: #cbf7ee;
        .infoadd-content {
            img {
                margin: 30px 0%;
            }
        }
    }
    .addblank {
        .addblank-content {
            img {
                margin: 50px 0 20px;
            }
            p {
                font-size: 14px;
                span {
                    font-weight: 600;
                }
            }
        }
    }
`

export default AddsWrapper