import { Image, Button, Container, Col, Row } from 'react-bootstrap'
import clippy from './../assets/pfp.jpg.webp'
import curriculo from './../assets/ac_cv_europass.pdf'
import background from './../assets/image_4.jpg'
import { FaDownload } from 'react-icons/fa'
import { ReactTyped } from 'react-typed'

function Intro() {
	return (
		<Container
			fluid
			id='intro'
		>
			<Row
				className='d-flex justify-content-center'
				style={{
					backgroundImage: `url(${background})`,
					backgroundSize: "cover",
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					// minHeight: 'calc(100vh - 56px)',
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
					<h2>
						<ReactTyped
							strings={['Olá, sou o António Caeiro']}
							typeSpeed={75}
						/>
					</h2>
					<p style={{ fontSize: '20px' }}>
						Sou estudante de Engenharia Informática e gosto de fazer projetos
						com diferentes tecnologias, procurando evoluir constantemente.
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
