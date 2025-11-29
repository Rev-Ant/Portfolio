import { Nav, Container, Navbar } from "react-bootstrap"

function Header() {
	return (
		<>
			<Navbar expand="lg" className="bg-light" fixed="top" >
				<Container fluid >

					<Navbar.Brand href="#intro">&lt;António-Caeiro&gt;</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="#intro">Inicio</Nav.Link>
							<Nav.Link href="#about">Sobre mim</Nav.Link>
							<Nav.Link href="#projects">Projetos</Nav.Link>
							<Nav.Link href="#contacts">Contactos</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</ >
	)
}

export default Header
