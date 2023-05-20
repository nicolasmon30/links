import { styled } from "styled-components";


export const StyledLinks = styled.div`
  position: relative;
  padding: 1.563rem 0;
  &::after{
    content: "";
    width: 100vw;
    height: 1px;
    background: #DDDDDF;
    position: absolute;
    left: -9%;
    right: 0;
    top: 0;
  }
`;

export const StyledDelete = styled.img`
    position: absolute;
    top: 1.563rem;
    right: 0;
    height: 19px;
    width: auto;
`;

export const StyledLink = styled.a`
    display: block;
    margin: 0 0 1rem;
    color: #007AFF;
    text-decoration: unset;
    font-weight: 600;
    font-size: 1.125rem;

`;

export const StyledLinkText = styled.p`
    font-weight: 500;
    color: #002239;
    font-size: 0.938rem;
`;