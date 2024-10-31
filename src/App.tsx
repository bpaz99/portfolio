import Hero from "./components/Mainpage/Hero"
import SkillSection from "./components/Mainpage/SkillsSection"

function App() {
	return (
    <div className="flex flex-col min-h-screen">
		

		<div className="flex flex-1 w-full" id="hero">
			<Hero />
		</div>

		<div className="flex flex-1 w-full" id="skills">
			<SkillSection />
		</div>

		


	</div>
	)
}

export default App
