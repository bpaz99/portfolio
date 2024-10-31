import ExperienceSection from "./components/Mainpage/ExperienceSection"
import Hero from "./components/Mainpage/Hero"
import SkillSection from "./components/Mainpage/SkillsSection"
import Header from "./components/Header"
import AboutMeSection from "./components/Mainpage/AboutmeSection"

function App() {
	return (
		<div className="flex flex-col min-h-screen relative pb-96">

			<Header />
			<Hero />
			<ExperienceSection />
			<Separator />
			<SkillSection />
			<Separator />
			<AboutMeSection />
		</div>
	)
}

export default App


const Separator = () => {
	return ( 
		<div className="h-12 my-8 w-1/2 mx-auto flex flex-col justify-center items-center">
			<div className="w-[1px] h-full bg-primary/10"></div>
		</div>
	);
}
 