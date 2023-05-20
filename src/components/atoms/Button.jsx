import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(Link)`
  justify-self: flex-end;
  align-self: flex-start;
  display: flex;
  width: 5.438rem;
  color: #007AFF;
  border: 1.5px solid #007AFF;
  border-radius: 4px;
  padding: 10px 0;
  font-size: 0.625rem;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Button = ({text , to}) => {
  return (
    <StyledLink to={to}>
            {text}
    </StyledLink>
  )
}
