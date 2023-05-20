import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import logoSingle from '../../assets/images/logoSingle.svg'
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';

const urlPropsMap = {
  '/mylinks': 'small',
  '/profile': 'small',
};

const getCurrentProperty = (pathname) => {
  const matchingRoute = Object.keys(urlPropsMap).find(route => matchPath(pathname, route));
  return matchingRoute ? urlPropsMap[matchingRoute] : '';
};

const CustomLogo = ({ currentProperty, ...rest }) => {
  return <img data-currentproperty={currentProperty} {...rest} />;
};

const StyledLogo = styled(CustomLogo)`
  justify-self: ${props => {
    if (props.currentProperty === 'small') {
      return 'flex-start';
    }else {
      return 'flex-end';
    }
  }};
  height: ${props => { if(props.currentProperty === 'small') { return '2.188rem' } else {  return 'auto'} }};
  align-self: flex-end;
`;

export const Logo = () => {
  let routeImage;
  const location = useLocation();
  const currentProperty = getCurrentProperty(location.pathname);

  if (window.location.pathname === '/mylinks') {
    routeImage = logoSingle;
  } else if (window.location.pathname === '/profile') {
    routeImage = logoSingle;
  } else {
    routeImage = logo;
  }

  return <StyledLogo currentProperty={currentProperty} src={routeImage} alt="logo" title="logo" />


}
