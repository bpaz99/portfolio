import AboutMeSection from "./components/Mainpage/AboutmeSection"
import ExperienceSection from "./components/Mainpage/ExperienceSection"
import Hero from "./components/Mainpage/Hero"
import SkillSection from "./components/Mainpage/SkillsSection"

function App() {
	return (
    <div className="flex flex-col min-h-screen">
		

		<div className="flex flex-1 w-full" id="hero">
			<Hero />
		</div>

		<div className="flex flex-1 w-full" id="experience">
			<ExperienceSection />
		</div>

		<div className="flex flex-1 w-full" id="skills">
			<SkillSection />
		</div>

		<div className="flex flex-1 w-full" id="aboutme">
			<AboutMeSection />
		</div>

		


	</div>
	)
}

export default App
