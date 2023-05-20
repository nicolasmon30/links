import { useForm } from "react-hook-form"
import { AtomLabel } from "../atoms/AtomLabel"
import { AtomInput } from "../atoms/AtomInput"
import {StyledRow , StyledButton } from '../../../styles/FormStyles'


export const LoginForm = ({ onSubmit }) => {

    const { handleSubmit, register } = useForm();

    const handleFormSubmit = (data) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <StyledRow className="form__row">
                <AtomLabel text="Your Email" />
                <AtomInput name="email" type="email" register={register} />
            </StyledRow>
            <StyledRow className="form__row">
                <AtomLabel text="Password" />
                <AtomInput name="password" type="password" register={register} />
            </StyledRow>
            <StyledButton type="submit" text="Login" />
        </form>
    )
}
