import { Container, Row } from "react-bootstrap"
import { FaGithub } from "react-icons/fa"

function Footer() {
	return (
		<Container
			fluid
			style={{
				backgroundColor: 'whitesmoke',
				maxHeight: ' 25px'
			}}
		>
			<Row>
				<p> Feito por <a href="github">Rev-Ant <FaGithub /> </a></p>
			</Row>
		</Container>
	)
}

export default Footer
