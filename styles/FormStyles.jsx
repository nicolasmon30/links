import { styled } from "styled-components";
import { AtomButton } from "../src/components/atoms/AtomButton";

export const StyledRow = styled.div`

    &:not(:last-child){
        margin: 0 0  ${ props => props.$small ? "1.563rem" : "1.875rem"};
    }

`;

export const StyledButton = styled(AtomButton)`
    display: block;
    width: 100%;
    padding: 1rem 0;
    background-color: #007AFF;
    color: #ffffff;
    border-radius: 7px;
    text-align: center;
    font-weight: 500;
    font-size: 1.125rem;
    margin-top: ${props => props.$small ? "2.188rem" : "3.125rem"};
    border: 0;
    text-transform: uppercase;
`;

export const StyledTerms = styled.div`
    width: 100%;
    max-width: 15.375rem;
    margin: 1rem auto 0;
`;

export const StyledTermsText = styled.p`
    font-weight: 500;
    font-size: 0.813rem;
    text-align: center;
`;

export const StyledTermsTextLink = styled.a`
    color: #007AFF;
    text-decoration: none;
`;
