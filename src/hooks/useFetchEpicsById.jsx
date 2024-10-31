// src/hooks/useFetchEpicsById.jsx
import { useEffect, useState } from "react";
import {getEpicsById} from "../helpers/getEpicsById";

export const useFetchEpicsById = (epicId) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
    });

    useEffect(() => {
        getEpicsById(epicId)
            .then((epic) => {
                setState({
                    data: epic,
                    loading: false,
                });
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                });
            });
    }, [epicId]);

    return state;
};