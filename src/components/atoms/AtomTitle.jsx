import { styled } from "styled-components"

const StyledTiltle = styled.h1`
    font-weight: bold;
    color: #070707;
    margin: 3.125rem 0 2.5rem;

`;

export const AtomTitle = ({text}) => {
  return <StyledTiltle>{text}</StyledTiltle>
}
