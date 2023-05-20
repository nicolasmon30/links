import { useForm } from "react-hook-form"
import { AtomLabel } from "../atoms/AtomLabel";
import { AtomInput } from "../atoms/AtomInput";
import { styled } from "styled-components";
import { StyledRow, StyledButton } from "../../../styles/FormStyles";

const StyledForm = styled.div`
    margin: 0 0 2.188rem;
`;

export const SaveMyLinksForm = ({ onSubmit }) => {

    const { handleSubmit, register } = useForm();

    const handleFormSubmit = (data) => {
        onSubmit(data);
    };

    return (
        <StyledForm>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <StyledRow $small>
                    <AtomLabel text="Url to save"/>
                    <AtomInput name="name" type="text" register={register} />
                </StyledRow>
                <StyledRow $small>
                    <AtomLabel text="Name of url"/>
                    <AtomInput name="url" type="text" register={register} />
                </StyledRow>
                <StyledButton $small type="submit" text="add"/>
            </form>
        </StyledForm>
    )
}
