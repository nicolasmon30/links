import { styled } from "styled-components"

const StyledEmail = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #002239;
  text-align: center;
`;

export const AtomDataEmail = ({email}) => {
  return <StyledEmail>{email.email}</StyledEmail>
}
