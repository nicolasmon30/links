import { create } from "zustand";

export const useRegister = create((set) => ({
    user: null,
    register: async (dataUser) => {
        try {
            console.log(dataUser)
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUser)
            })
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa.');
            }
            const data = await response.json()
            await console.log(data)

        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }
}))
