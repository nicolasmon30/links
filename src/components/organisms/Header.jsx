import { HeaderMolecule } from "../molecules/HeaderMolecule"
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';


const urlPropsMap = {
  '/register': 'small',
  '/mylinks': 'auto',
  '/profile': 'auto',
};

const getCurrentProperty = (pathname) => {
  const matchingRoute = Object.keys(urlPropsMap).find(route => matchPath(pathname, route));
  return matchingRoute ? urlPropsMap[matchingRoute] : '';
};

const CustomHeader = ({ currentProperty, ...rest }) => {
  return <header data-currentproperty={currentProperty} {...rest} />;
};

const StyledHeader = styled(CustomHeader)`
  height: ${props => {
    if (props.currentProperty === 'small') {
      return '12.438rem';
    } else if (props.currentProperty === 'auto') {
      return 'auto';
    } else {
      return '18.125rem';
    }
  }};
`;


const StyledContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 1.875rem;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  height: 100%;
  padding: 2.813rem 0 0;
`;


export const Header = () => {
  const location = useLocation();
  const currentProperty = getCurrentProperty(location.pathname);
  return (
    <>
        <StyledHeader currentProperty={currentProperty}>
          <StyledContainer className="container">
            <HeaderMolecule />
          </StyledContainer>
        </StyledHeader >
    </>
  )
}
