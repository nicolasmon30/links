import { styled } from "styled-components"

const StyledEdit = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const AtomEdit = () => {
  return (
    <a href="/profile">
      <StyledEdit src="../../src/assets/images/edit.svg" alt="Edit" title="Edit"/>
    </a>
  )
}
