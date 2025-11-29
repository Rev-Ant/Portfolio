import { Container, Row, Col } from "react-bootstrap";
import TechList from "./techlist";

function About() {
	return (
		<Container
			fluid
			id="about"
			style={{
				padding: "40px",
				backgroundColor: "lightgrey",
				color: "black",
			}}
		>
			<Row className="justify-content-center mb-3">
				<Col xs="12" className="text-center">
					<h1><b>Sobre mim</b></h1>
				</Col>
			</Row>

			<Row className="justify-content-center mb-4">
				<Col xs="12" md="8" className="text-center" style={{ maxWidth: '1500px', fontSize: '20px' }}>
					<p>
						Sou estudante de Engenharia Informática no Instituto Politécnico de Beja, na Escola Superior de Tecnologia e Gestão. Ao longo do curso, tive contacto com diversos conceitos fundamentais e ferramentas de programação e redes, que apliquei no desenvolvimento de projetos práticos para consolidar os meus conhecimentos, muitos deles realizados em grupos de duas ou mais pessoas, o que me permitiu desenvolver competências de colaboração e comunicação.
						Tenho especial interesse na área da cibersegurança, mas mantenho uma grande motivação para continuar a aprender e expandir as minhas competências no mundo da programação e das tecnologias.
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center">
				<Col xs="12" className="text-center">
					<h3><b>Tecnologias e ferramentas com que já trabalhei:</b></h3>
				</Col>
			</Row>
			<TechList />
		</Container>
	);
}

export default About
