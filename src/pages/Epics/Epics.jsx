import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchEpics } from "../../hooks/useFetchEpics";

export const Epics = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const { data: epics, loading } = useFetchEpics(projectId);

    if (loading) {
        return <p>Loading...</p>; 
    }

    if (epics.length === 0) {
        return <p>No encontramos épicas.</p>; 
    }

    return (
        <div>
            <h2>Project Epics</h2>
            <ul>
                {epics.map(epic => (
                    epic ? ( 
                        <li key={epic.id}>
                            <h3>{epic.name || "Unnamed Epic"}</h3> 
                            <p>{epic.description || "No description available"}</p>
                        </li>
                    ) : null
                ))}
            </ul>
            <button onClick={() => navigate(`/my-projects/${projectId}`)}>Volver</button>
        </div>
    );
};
