import { AtomDelete } from "../atoms/AtomDelete"
import { AtomNameUrl } from "../atoms/AtomNameUrl"
import { AtomUrl } from "../atoms/AtomUrl"
import { StyledLinks } from "../../../styles/MyLinks"
import { useLinks } from "../../store/Links"

export const MyLinksMolecule = ({ links }) => {
  const {deleteLink } = useLinks()
  const handleDelete = async (id) => {
    await deleteLink(id)
  }

  return (
    <>
      {
        links.map(link => (
          <StyledLinks key={link.id}>
            <AtomDelete onDelete={handleDelete} id={link.id} />
            <AtomUrl url={link.url}/>
            <AtomNameUrl nameUrl={link.name}/>
          </StyledLinks>
        ))

      }
    </>
  )
}
