import { create } from "zustand";
import { useLogin } from "./Login";

export const useLinks = create((set,get) => {
  const { token } = useLogin.getState();
  return {
    myLinks: null,
    saveLinks: null,
    updateLinks: (newLinks) => set({myLinks: newLinks}),
    getState: () => get().myLinks,
    addLinks: async (dataLinks) => {
      try {
        const response = await fetch("http://localhost:3000/api/links/add", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataLinks),
        });

        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa.");
        }

        const data = await response.json();
        const newLinks = [...get().myLinks, data.data];
        set({ myLinks: newLinks });
      } catch (error) {
        throw new Error(error);
      }
    },

    getLinks: async () => {
      try {
        const response = await fetch("http://localhost:3000/api/links", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa.");
        }

        const data = await response.json();
        localStorage.setItem("myLinks", JSON.stringify(data.data));
        set({ myLinks: data.data });
      } catch (error) {
        throw new Error(error);
      }
    },

    deleteLink: async (idLink) => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/links?id=${idLink}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa.");
        }

        set((state) => ({
            myLinks: state.myLinks.filter((link) => link.id !== idLink),
        }));
        const newLinks = get().myLinks;
        localStorage.setItem("myLinks", JSON.stringify(newLinks))
        set({ myLinks: newLinks });
        const data = await response.json();
      } catch (error) {
        throw new Error(error);
      }
    },
  };
});
