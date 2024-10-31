const skills = [
	{ name: "js", label: "JavaScript" },
	{ name: "ts", label: "TypeScript" },
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
]

const SkillSection = () => {
	return ( <div className="p-4 w-[50%] mx-auto grid gap-6">
			<h2 className="text-2xl  text-center">My Skills</h2>
			<div className="flex flex-wrap justify-center items-center gap-4">
				{ skills.map((skill) => (
					<div key={ skill.name } className="flex items-center gap-2 p-2 rounded-md border border-border">
						<span className="text-sm">{ skill.label }</span>
					</div>
				)) }
			</div>
			<p className="text-center text-muted-foreground">And much more! Check out my <strong>projects</strong> to see my skills in action.</p>
		</div>
	)
}
 
export default SkillSection;