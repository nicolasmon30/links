import { styled } from "styled-components"

const StyledInput = styled.input`
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: 3.313rem;
  border: 1px solid #B7C0C9;
  border-radius: 7px;
  padding: 0 1.063rem;
  color: #002239;
  font-size: 1rem;
  font-weight: 600;
`;

export const AtomInput = ({ value, type, register, name }) => {
  return <StyledInput value={value} type={type} {...register(name)} />
}
