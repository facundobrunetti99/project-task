import { URL } from "../auth/constants";

export const getEpics = async (projectId) => {
    const url = `${URL}/projects/${projectId}/epics`;

    const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auth: localStorage.getItem("token"),
        },
      });

    if (!resp.ok) {
        throw new Error('Failed to fetch epics'); 
    }

    const { data } = await resp.json();
    return data;
};
