import { StyledDelete } from "../../../styles/MyLinks"

export const AtomDelete = ({onDelete , id}) => {

  const handleDelete = () => {
    console.log("ondelete",id)
    onDelete(id)
  }
  return <StyledDelete onClick={handleDelete} src="../../src/assets/images/trash.svg" />
}
