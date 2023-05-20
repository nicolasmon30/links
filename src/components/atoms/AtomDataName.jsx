import { styled } from "styled-components"

const StyledName = styled.p`
  text-align: center;
  color: #002239;
  font-weight: 500;
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
`;
export const AtomDataName = ({ name }) => {
  return <StyledName>{name.name}</StyledName>
}
