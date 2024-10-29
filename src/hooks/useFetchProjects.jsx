import { useEffect, useState } from "react"
import { getProjects } from "../helpers/getProjectos"


export const useFetchProjects = () => {
	const [state, setState] = useState({
		data: [],
		loading: true
	})

	useEffect(() => {
		getProjects()
			.then(projects => {
				setState({
					data: projects,
					loading: false,
				})
			})
			.catch(() => {
				setState({
					data: [],
					loading: false
				})
			}
			)
	}, [])

	return state; //{data: [], loading: false }
}