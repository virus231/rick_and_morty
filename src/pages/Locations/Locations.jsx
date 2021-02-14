import {useContext, useEffect, useState} from "react";
import LocationsContext from "../../context/Locations/LocationsContext";
import GetLoading from "../../components/Loader/Loader";
import {Col, Row} from "react-bootstrap";

export const Locations = () => {
    const { locations, getLocations, filterByName, filterByType, isLoading } = useContext(LocationsContext);
    const [name, setName] = useState("")
    const [type, setType] = useState("")

    useEffect(() => {
        getLocations()
    },[])

    const filterName = e => {
        e.preventDefault();
        setName(e.target.value)
        filterByName(e.target.value)
    }

    const filterType = e => {
        e.preventDefault();
        setType(e.target.value)
        filterByType(e.target.value)
    }


    const getLocation = () => {
        return locations.map(location => {
            return (
                <tr key={location.id} >
                    <td>{location.name}</td>
                    <td>{location.type}</td>
                    <td>{location.dimension}</td>
                </tr>
            )
        })
    }


    return (
        <>
            <Row className="mt-3">
                <Col lg="9">
                    <table >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Dimension</th>
                        </tr>
                        </thead>
                        <tbody>{ isLoading ? getLocation() : GetLoading() } </tbody>
                    </table>
                </Col>
                <Col lg="3">
                    <div className="mb-3">
                        <label htmlFor="">Filter By Name</label>
                        <input placeholder="Enter location name..." value={name} type="text" onChange={filterName} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">Filter By Type</label>
                        <input placeholder="Enter character name..." value={type} type="text" onChange={filterType} />
                    </div>
                </Col>
            </Row>

        </>
    )
}