import { Button, Container, Row, Col, Card } from "react-bootstrap"
import { FaGithub } from "react-icons/fa"

function Projects() {
	return (
		<Container
			id="projects"
			fluid
			style={{
				padding: '40px',
				backgroundColor: 'whitesmoke',
				color: 'black'
			}}>
			<Row className="justify-content-center mb-3">
				<Col xs="12" className="text-center">
					<h1>Projectos</h1>
				</Col>
			</Row>
			<Row className="justify-content-center g-4">
				<Col xs='auto'>
					<Card style={{ width: '40rem' }}>
						<Card.Body >
							<Card.Title style={{ fontSize: '25px' }}>Pequenos Projetos em Assembly</Card.Title>
							<Card.Text>
								Uma coleção de pequenos projetos desenvolvidos em âmbito da cadeira de arquitetura de computadores.
							</Card.Text>
							<Button href="https://github.com/" target="_blank" variant="dark"><FaGithub /> Git</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col xs='auto'>
					<Card style={{ width: '40rem' }}>
						<Card.Body>
							<Card.Title style={{ fontSize: '25px' }}>Portfolio</Card.Title>
							<Card.Text>
								O Portfolio foi desenvolvido usando a biblioteca React, com auxilio de React-Bootstrap e React-Icons.
							</Card.Text>
							<Button href="https://github.com/" target="_blank" variant="dark"><FaGithub /> Git</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col xs='auto'>
					<Card style={{ width: '40rem' }}>
						<Card.Body>
							<Card.Title style={{ fontSize: '25px' }}>Pequenos Scripts Bash/Python</Card.Title>
							<Card.Text>
								Pequenos scripts desenvolidos usando bash e python para criar pequenos programas para o terminal.
							</Card.Text>
							<Button href="https://github.com/" target="_blank" variant="dark" disabled><FaGithub /> Git</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col xs='auto'>
					<Card style={{ width: '40rem' }}>
						<Card.Body>
							<Card.Title style={{ fontSize: '25px' }}>Laboratorio usando GNS3</Card.Title>
							<Card.Text>
								Simulação de uma network usando o programa GNS3 no âmbito da cadeira de Redes 2, para aprender conceitos de Networking.
							</Card.Text>
							<Button href="https://github.com/" target="_blank" variant="dark" disabled><FaGithub /> Git</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col xs='auto'>
					<Card style={{ width: '40rem' }}>
						<Card.Body>
							<Card.Title style={{ fontSize: '25px' }}>Pequeno jogo de Texto</Card.Title>
							<Card.Text>
								Desenvolido em C, este jogo tinha como objetivo estudar as nuances da linguagem C.
							</Card.Text>
							<Button href="https://github.com/" target="_blank" variant="dark" disabled><FaGithub /> Git</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container >
	)
}

export default Projects
