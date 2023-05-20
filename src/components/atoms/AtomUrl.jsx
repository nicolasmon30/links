import { StyledLink } from "../../../styles/MyLinks"
export const AtomUrl = ({url}) => {
  return (
    <>
        <StyledLink href={url}>
            {url}
        </StyledLink>
    </>
  )
}
