import { useForm } from "react-hook-form"
import { AtomLabel } from "../atoms/AtomLabel"
import { AtomInput } from "../atoms/AtomInput"
import {StyledRow , StyledButton, StyledTerms ,StyledTermsText, StyledTermsTextLink } from '../../../styles/FormStyles'

export const RegisterForm = ({ onSubmit }) => {


    const { handleSubmit, register } = useForm();

    const handleFormSubmit = (data) => {
        onSubmit(data);
    };


    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <StyledRow>
                <AtomLabel text="Full name" />
                <AtomInput name="name" type="text" register={register} />
            </StyledRow>
            <StyledRow>
                <AtomLabel text="Your Email" />
                <AtomInput name="email" type="email" register={register} />
            </StyledRow>
            <StyledRow>
                <AtomLabel text="Password" />
                <AtomInput name="password" type="password" register={register} />
            </StyledRow>
            <StyledButton type="submit" text="Register" />
            <StyledTerms>
                <StyledTermsText>
                    By creating account You agree to the <StyledTermsTextLink href="#">Terms of use</StyledTermsTextLink> and <StyledTermsTextLink href="#">Privacy Policy</StyledTermsTextLink>
                </StyledTermsText>
            </StyledTerms>
        </form>
    )
}
