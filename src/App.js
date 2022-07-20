import './App.css'
import Typewriter from 'typewriter-effect'

function App() {
	return (
		<div className="App">
			<Typewriter
				options={{ delay: 110, cursor: '|' }}
				onInit={(typewriter) => {
					typewriter
						.pauseFor(4000)
						.typeString("hey, how's it going?")
						.pauseFor(1000)
						.typeString(' welcome to my website.')
						.pauseFor(1000)
						.typeString(
							'<br>i\'m Myles, a user experience designer working at <a href="https://ammunitiongroup.com/" target="_blank">ammunition</a>.'
						)
						.pauseFor(1000)
						.typeString(
							'<br>feel free to <a href="mailto:mylesjeffery96@gmail.com">email me</a> or connect with me on <a href="https://www.linkedin.com/in/myles-jeffery/" target="_blank">linkedin</a>.'
						)
						.pauseFor(1000)
						.typeString(
							'<br>portfolio and résumé available upon request.'
						)
						.pauseFor(1000)
						.typeString('<br>have a great day! 😎')
						.start()
				}}
			/>
		</div>
	)
}

export default App
