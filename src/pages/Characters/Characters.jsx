import {useContext, useEffect, useState} from 'react';
import {Row, Col} from "react-bootstrap";
import CharactersContext from "../../context/Characters/CharactersContext";
import {CharacterCard} from "../../components/CharacterCard/CharacterCard";
import GetLoading from "../../components/Loader/Loader";
import {Pagination} from "../../components/Pagination/Pagination";



export const Characters = () => {
    const { characters, getCharacters, filterByName, filterByGender, filterByStatus, isLoading } = useContext(CharactersContext);
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")

    // const [data, setData] = useState([]);
    // const [nextPage, setNextPage] = useState(null);
    // const [prevPage, setPrevPage] = useState(null);


    useEffect(() => {
        getCharacters()
    }, []);

    const getCharacter = () => {
        return characters.map(character => (
            <CharacterCard {...character} key={character.id} />
        ))
    }


    const filterName = e => {
        e.preventDefault();
        setName(e.target.value)
        filterByName(e.target.value)
    }

    const filterGender = e => {
        e.preventDefault();
        setGender(e.target.value)
        filterByGender(e.target.value)
    }

    const filterStatus = e => {
        e.preventDefault();
        setStatus(e.target.value)
        filterByStatus(e.target.value)
    }



    return (
        <div>
            <Row className="mb-3 mt-3">
                <Col lg="10">
                    <Row>
                        {
                            isLoading ? getCharacter() : GetLoading()
                        }
                    </Row>
                </Col>
                <Col lg="2">
                    <div className="mb-3">
                        <label htmlFor="">Filter By Name</label>
                        <input placeholder="Enter character name..." value={name} type="text" onChange={filterName} />
                    </div>
                    <div>
                        <label htmlFor="">Filter by gender</label>
                        <select onChange={filterGender} >
                            <option value="gender">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="genderless">Genderless</option>
                            <option value="unknown">Unknown</option>

                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Filter by status</label>
                        <select onChange={filterStatus} >
                            <option value="status">Status</option>
                            <option value="alive">Alive</option>
                            <option value="dead">Dead</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <Pagination/>
                </Col>

            </Row>

        </div>
    )
}