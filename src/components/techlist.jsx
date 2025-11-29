
import { Row, Col } from "react-bootstrap";
import {
	FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt,
	FaJs, FaPython, FaJava, FaPhp, FaLinux, FaGitAlt, FaDocker,
	FaLaravel, FaFlask, FaAngular
} from "react-icons/fa";
import {
	SiC, SiJulia, SiGnubash, SiAssemblyscript, SiMysql, SiVirtualbox
} from "react-icons/si";

const techs = [
	{ name: "React", icon: <FaReact />, color: "light" },
	{ name: "JavaScript", icon: <FaJs />, color: "light" },
	{ name: "Bootstrap", icon: <FaBootstrap />, color: "light" },
	{ name: "HTML", icon: <FaHtml5 />, color: "light" },
	{ name: "CSS", icon: <FaCss3Alt />, color: "light" },
	{ name: "Node.js", icon: <FaNodeJs />, color: "light" },
	{ name: "Python", icon: <FaPython />, color: "light" },
	{ name: "C", icon: <SiC />, color: "light" },
	{ name: "Java", icon: <FaJava />, color: "light" },
	{ name: "PHP", icon: <FaPhp />, color: "light" },
	{ name: "Julia", icon: <SiJulia />, color: "light" },
	{ name: "Bash", icon: <SiGnubash />, color: "light" },
	{ name: "Assembly", icon: <SiAssemblyscript />, color: "light" },
	{ name: "Linux", icon: <FaLinux />, color: "light" },
	{ name: "Git", icon: <FaGitAlt />, color: "light" },
	{ name: "Docker", icon: <FaDocker />, color: "light" },
	{ name: "MySQL", icon: <SiMysql />, color: "light" },
	{ name: "Laravel", icon: <FaLaravel />, color: "light" },
	{ name: "Angular", icon: <FaAngular />, color: "light" },
	{ name: "Flask", icon: <FaFlask />, color: "light" },
	{ name: "VirtualBox", icon: <SiVirtualbox />, color: "light" },
];

function TechList() {
	return (
		<>
			<Row className="justify-content-center mt-3">
				<Col xs="12" md="10" className="d-flex flex-wrap justify-content-center gap-2" style={{ maxWidth: '800px' }}>
					{techs.map((tech) => (
						<span
							key={tech.name}
							className={`btn btn-${tech.color} d-flex align-items-center gap-2`}
							style={{ pointerEvents: 'none', cursor: 'default' }}
						>
							<span style={{ fontSize: "1.2rem" }}>{tech.icon}</span>
							{tech.name}
						</span>
					))}
				</Col>
			</Row>
		</>
	);
}

export default TechList
