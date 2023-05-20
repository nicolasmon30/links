import { styled } from "styled-components"
const StyledPicture = styled.img`
  display: block;
  width: 4.25rem;
  height: 4.25rem;
  margin: 0 auto 0.75rem;
  overflow: hidden;
  border-radius: 50%;

`;


export const AtomPicture = ({picture}) => {
  const urlImage = picture.image
  let pictureElement;

  if(urlImage){
    pictureElement = (<StyledPicture  src={ urlImage} alt="Picture" title="Picture" />)
  }else{
    pictureElement = (<StyledPicture  src='https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' alt="Picture" title="Picture" />)
  }
  return pictureElement
  
}
