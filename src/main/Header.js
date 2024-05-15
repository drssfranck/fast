
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './header.css';
import logo from '../media/logo.png';

function Header(){

      
    return(
        <Navbar expand="lg" className="menu">
            <>
                <Navbar.Brand href="/home">
                    <Image src={logo} alt="Fast and Sure Travel" className='fast-logo' width="40"/>
                    <p className='fast-sure'>FAST AND SURE TRAVEL</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="ml-auto nav-principale">
                    <Nav.Link className='nav-link-ltr' href="/home">Accueil</Nav.Link>
                    <Nav.Link href="/about" className='nav-link-ltr'>A propos</Nav.Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown" className='nav-link-ltr'>
                    <NavDropdown.Item href="/immigration">Assistance visa</NavDropdown.Item>
                    <NavDropdown.Item href='/flyticket'>
                        Billet d'avion
                    </NavDropdown.Item>
                    <NavDropdown.Item >Cargo</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >
                        Affaire en chine
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact" className='nav-link-ltr'>Contactez Nous</Nav.Link>
                </Nav>
                    <a className='open-file' variant='primary' href='/openfolder'>Je lance ma procédure</a>
                </Navbar.Collapse>
            </>
        </Navbar>
    )
}

export default Header;