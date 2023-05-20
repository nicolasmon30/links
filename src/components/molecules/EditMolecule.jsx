import { useForm } from "react-hook-form"
import { AtomDataName } from "../atoms/AtomDataName"
import { AtomPicture } from "../atoms/AtomPicture"
import { AtomLabel } from "../atoms/AtomLabel"
import { AtomInput } from "../atoms/AtomInput"
import {StyledRow , StyledButton} from '../../../styles/FormStyles'
import { styled } from "styled-components"
import { useLogin } from "../../store/Login"

const StyledData = styled.div`
    margin: 0 0 2.5rem;
`;

export const EditMolecule = ({ onSubmit }) => {
    const { userLog, login } = useLogin();
    const { handleSubmit, register } = useForm();

    const handleFormSubmit = (data) => {
        onSubmit(data);
    };


    return (
        <>
            <StyledData>
                <AtomPicture picture={userLog}/>
                <AtomDataName name={userLog}/>
            </StyledData>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <StyledRow className="form__row">
                    <AtomLabel text="Name" />
                    <AtomInput value={userLog.name}  name="name" type="text" register={register} />
                </StyledRow>
                <StyledRow className="form__row">
                    <AtomLabel text="Email" />
                    <AtomInput value={userLog.email} name="email" type="email" register={register} />
                </StyledRow>
                <StyledRow className="form__row">
                    <AtomLabel text="Location" />
                    <AtomInput  name="location" type="text" register={register} />
                </StyledRow>
                <StyledButton type="submit" text="save" />
            </form>
        </>
    )
}
