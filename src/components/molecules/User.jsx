import { AtomDataEmail } from "../atoms/AtomDataEmail"
import { AtomDataName } from "../atoms/AtomDataName"
import { AtomEdit } from "../atoms/AtomEdit"
import { AtomPicture } from "../atoms/AtomPicture"
import { styled } from "styled-components"
import { useLogin } from "../../store/Login"

const StyledUserContainer = styled.div`
  position: relative;
  margin: 3rem 0;
`;

export const User = () => {
  const { userLog, login } = useLogin();
  return (
    <>
        <StyledUserContainer>
            <AtomEdit/>
            <AtomPicture picture={userLog} />
            <div className="user__data">
                <AtomDataName name={userLog}/>
                <AtomDataEmail email={userLog}/>
            </div>
        </StyledUserContainer>
    </>
  )
}
