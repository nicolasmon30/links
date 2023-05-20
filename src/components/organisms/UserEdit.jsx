import { EditMolecule } from "../molecules/EditMolecule"
import { styled } from "styled-components";


const StyledTitle = styled.h1`
    text-align: center;
    font-weight: bold;
    color: #070707;
    font-size: 1.563rem;
    margin: 0 0 2.5rem;
`;

export const UserEdit = () => {

    const handleFormSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="edit__top">
                <img src="" alt="" />
                <StyledTitle>Perfil</StyledTitle>
            </div>
            <EditMolecule onSubmit={handleFormSubmit} />
        </>
    )
}
