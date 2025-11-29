import { Container, Row, Col } from "react-bootstrap"
import { FaGithub } from "react-icons/fa"

function Contacts() {
	return (
		<Container
			fluid
			id="contacts"
			style={{
				padding: "40px",
				backgroundColor: "lightgrey",
				color: "black",
			}}
		>

			<Row className="justify-content-center mb-3">
				<Col xs="12" className="text-center">
					<h1><b>Contactos</b></h1>
				</Col>
			</Row>

			<Row className="justify-content-center mb-4">
				<Col xs="12" md="8" className="text-center" style={{ maxWidth: '1500px', fontSize: '20px' }}>
					<p>
						<b>Email:</b> 25957 [at] stu.ipbeja.pt<br />
						<b>Github:</b> <a href="github">Rev-Ant <FaGithub /> </a>

					</p>
				</Col>
			</Row>
		</ Container>
	)
}

export default Contacts
