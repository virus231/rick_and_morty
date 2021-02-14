import Spinner from 'react-bootstrap/Spinner'

const GetLoading = () => {
    return (
        <div className="d-flex h-100 align-items-center justify-content-center">
            <Spinner animation="grow" variant="success" />
        </div>
    )
}

export default GetLoading;
