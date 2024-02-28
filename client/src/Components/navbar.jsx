import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg" aria-label="Thirteenth navbar example" id="navbar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                    <a className="navbar-brand col-lg-3 me-0" href="#">FluffyBan</a>
                    <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Boards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Current Tasks</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="true">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                        </ul>
                <div className="d-lg-flex col-lg-3 justify-content-lg-end">
                    <button className="btn btn-primary">Button</button>
                </div>
                </div>
            </div>
        </nav>
    )
}