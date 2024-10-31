import { URL } from "../auth/constants";
export const getProjects = async () => {
  const url = `${URL}/projects`;
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      auth: localStorage.getItem("token"),
    },
  });
  const { data } = await resp.json();

  return data;
};

export const getProjectsById = async (projectId) => {
  const url = `${URL}/projects/${projectId}`;
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      auth: localStorage.getItem("token"),
    },
  });
  const { data } = await resp.json();

  return data;
};
