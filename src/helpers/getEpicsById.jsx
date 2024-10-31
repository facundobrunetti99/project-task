import { URL } from "../auth/constants";

export const getEpicsById = async (epicId) => {
    const url = `${URL}/epics/${epicId}`; // Asegúrate de que la URL sea correcta

    const resp = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'), // Cambia 'auth' a 'Authorization'
        },
    });

    if (!resp.ok) {
        throw new Error('Failed to fetch epic'); // Lanza un error si la respuesta no es ok
    }

    const { data } = await resp.json();
    return data;
};
