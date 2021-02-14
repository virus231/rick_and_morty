import EpisodesContext from "../../context/Episodes/EpisodesContext";
import {useContext, useEffect, useState} from "react";
import GetLoading from "../../components/Loader/Loader";
import {Col, Row} from "react-bootstrap";

export const Episodes = () => {
    const [query, setQuery] = useState("")
    const {episodes, getEpisodes, filterByName, isLoading} = useContext(EpisodesContext)

    useEffect(() => {
        getEpisodes()
        // filterByName()
    }, [])


    const getEpisode = () => {
        return episodes.map(episode => {
            return (
                <tr key={episode.id} >
                    <td>{episode.name}</td>
                    <td>{episode.air_date}</td>
                    <td>{episode.episode}</td>
                </tr>
            )
        })
    }

    const filter = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
        filterByName(e.target.value)
    }


    return (
        <>
            <Row className="mt-3">
                <Col lg="9">
                    <table >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Episode</th>
                        </tr>
                        </thead>
                        <tbody>{ isLoading ? getEpisode() : GetLoading() } </tbody>
                    </table>
                </Col>
                <Col lg="3">
                    <label htmlFor="">Filter By Name</label>
                    <input placeholder="Enter episode name..." value={query} type="text" onChange={filter} />
                </Col>
            </Row>


        </>
    )
}