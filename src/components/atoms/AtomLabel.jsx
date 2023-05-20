import { styled } from "styled-components";

const StyledLabel = styled.label`
font-size: 0.938rem;
  display: block;
  font-weight: 500;
  color: #002239;
  margin: 0 0 0.938rem;
`;

export const AtomLabel = ({text}) => {
  return <StyledLabel>{text}</StyledLabel>
}
