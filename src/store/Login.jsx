import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLogin = create(
    persist(
        (set) => ({
            userLog: null,
            token: null,
            login: async (dataUser) => {
                try {
                    console.log(dataUser);
                    const response = await fetch('http://localhost:3000/api/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(dataUser),
                    });
                    if (!response.ok) {
                        throw new Error('La solicitud no fue exitosa.');
                    }
                    const data = await response.json();
                    console.log(data);
                    set({ userLog: data.data, token: data.token });
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
        {
            name: 'loginStore',
            get: (key) => localStorage.getItem(key),
            set: (key, value) => localStorage.setItem(key, value),
        }
    )
);
