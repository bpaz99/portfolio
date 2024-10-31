const skills = {
	proficient: [
		{ name: "js/ts", label: "JavaScript/TypeScript" },
		{ name: "tailwind", label: "Tailwind CSS" },
		{ name: "react", label: "React" },
		{ name: "node", label: "Node.js" },
		{ name: "express", label: "Express" },
		{ name: "rest", label: "REST API" },
		{ name: "docker", label: "Docker" },
		{ name: "aws", label: "AWS" },
		{ name: "pgsql", label: "PostgreSQL" },
		{ name: "mongo", label: "MongoDB" },
		{ name: "redis", label: "Redis" },
		{ name: "firebase", label: "Firebase" },
		{ name: "linux", label: "Linux" },
	],
	knowledgeable: [
		{ name: "C++", label: "C++" },
		{ name: "C#", label: "C#" },
		{ name: "python", label: "Python" },
		{ name: "java", label: "Java" },
		{ name: "spring boot", label: "Spring Boot" },
		{ name: "vue", label: "Vue.js" },
		{ name: "angular", label: "Angular" },
		{ name: "reactnative", label: "React Native" },
		{ name: "nextjs", label: "Next.js" },
	],
}

const SkillSection = () => {
	return ( <div className="p-4 w-[50%] mx-auto grid gap-6">
			<h2 className="text-2xl  text-center">My Skills</h2>
			<div className="flex flex-wrap justify-center items-center gap-4">
				{ skills.proficient.map((skill) => (
					<div key={ skill.name } className="flex items-center gap-2 p-2 rounded-md border border-border">
						<span className="text-sm">{ skill.label }</span>
					</div>
				)) }
			</div>
			<div className="flex flex-wrap justify-center items-center gap-4">
				<p className="text-sm text-muted-foreground text-center">Knowledgeable - list of skills that I have used in the past, but not as frequently as the ones above.</p>
			{ skills.knowledgeable.map((skill) => (
				<div key={ skill.name } className="flex items-center gap-2 p-2 rounded-md border border-border">
					<span className="text-sm">{ skill.label }</span>
				</div>
				)) }
			</div>
			<p className="text-center text-muted-foreground">And much more! Check out my <strong
				onClick={ () => 
					document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
				 }
				className="cursor-pointer underline"
			>projects</strong> to see my skills in action.</p>
		</div>
	)
}
 
export default SkillSection;