import { SaveMyLinksForm } from "../molecules/SaveMyLinksForm"
import { User } from "../molecules/User"
import { MyLinksMolecule } from "../molecules/MyLinks"
import { useLinks } from "../../store/Links"
import { useEffect } from "react"

export const MyLinks = () => {
    const { addLinks, myLinks, saveLinks, getLinks , updateLinks } = useLinks()
    const handleFormSubmit = async (data) => {
        await addLinks(data);
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            await getLinks();
            const storedLinks = localStorage.getItem("myLinks");
            if (storedLinks) {
              const parsedLinks = JSON.parse(storedLinks);
              updateLinks(parsedLinks)
            }
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        if (saveLinks) {
          updateLinks([...myLinks, saveLinks]);
        }
      }, [saveLinks]);


    return (
        <>
            <User />
            <SaveMyLinksForm onSubmit={handleFormSubmit} />
            {myLinks && <MyLinksMolecule links={myLinks} />}

        </>
    )
}
