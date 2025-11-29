import './App.css'
import Intro from './components/intro.jsx'
import About from './components/about.jsx'
import Header from './components/header.jsx'
import Projects from './components/projects.jsx'
import Contacts from './components/contacts.jsx'
import Footer from './components/footer.jsx'

function App() {
	return (
		<>
			<Header />
			<Intro />
			<About />
			<Projects />
			<Contacts />
			<Footer />
		</>
	)
}

export default App
