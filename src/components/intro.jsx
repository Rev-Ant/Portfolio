import { Image, Button, Container, Col, Row } from 'react-bootstrap'
import clippy from './../assets/señor_clippy.png'
import curriculo from './../assets/lp-2.pdf'
import background from './../assets/image_4.jpg'
import { FaDownload } from 'react-icons/fa'
import { ReactTyped } from 'react-typed'

function Intro() {
	return (
		<Container
			fluid
			style={{
				// backgroundColor: "black",
				// color: "white",
			}}
		>
			<Row
				className='d-flex justify-content-center'
				style={{
					// backgroundColor: 'red',
					backgroundImage: `url(${background})`,
					backgroundSize: "cover",
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					minHeight: '100vh',
					alignItems: 'center'
				}}
			>
				<Col style={{ maxWidth: '650px' }}>
					<Image src={clippy}
						roundedCircle
						style={{ width: "300px", height: "300px", objectFit: "cover", marginBottom: "15px" }}
					/>
				</Col>
				<Col style={{ maxWidth: '650px' }}>
					<h3>
						<ReactTyped
							strings={['Olá, eu sou o Manuel Albuquerque']}
							typeSpeed={50}
						/>
					</h3>
					<p>
						Um estudante de Engenharia Informática que gosta de fazer projetos
						com diferentes tecnologias para aprender e evoluir constantemente.
					</p>
					<Button
						variant="light"
						href={curriculo}
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaDownload style={{ marginRight: "8px" }} /> Curriculum (pdf)
					</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default Intro
