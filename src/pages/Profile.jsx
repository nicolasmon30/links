import { UserEdit } from "../components/organisms/UserEdit"
import { styled } from "styled-components";


const StyledEdit = styled.div`
  padding: 2.5rem 0 ;
`;


export const Profile = () => {
  return (
    <>
      <StyledEdit className="edit">
        <UserEdit />
      </StyledEdit>
    </>
  )
}
