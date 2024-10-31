import { cn } from "@/lib/utils";
import { ExperienceType } from "../../lib/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

const ExperienceCard = ({experience, align}: {experience: ExperienceType, align: "left" | "right"}) => {
	const { company, position, time, bulletPoints, techStack, type } = experience;

	return ( <Card className="relative overflow-hidden group">
		<div className={cn(
			"absolute top-0 px-2 text-center  py-1  rounded-md  text-xs bg-primary text-primary-foreground",
			"w-40 transition-all duration-300 transform translate-y-1/2",
			align === "right" && "right-0 rotate-45 translate-y-1/2 translate-x-1/3 md:translate-x-[100%] group-hover:translate-x-1/3",
			align === "left" && "left-0 -rotate-45 -translate-x-1/3 md:-translate-x-[100%] group-hover:-translate-x-1/3"
		)}>{type}</div>

		<CardHeader>
			<CardTitle className="text-center">{company}</CardTitle>
			<CardDescription className="text-center">{position} - {time} ({type})</CardDescription>
		</CardHeader>
		<CardContent>
			<div className="grid gap-4">
				<ul className="text-sm list-disc pl-4">
					{bulletPoints.map((point, index) => {
						if(typeof point === "string") {
							return <li key={index} className="list-decimal">{point}</li>
						}
						return <li key={index} className="list-decimal">
							{point.text}
							<ul className="list-disc list-inside">
								{point.subPoints.map((subPoint, index) => (
									<li key={index} className="list-disc list-inside">{subPoint}</li>
								))}
							</ul>
						</li>
					})}
				</ul>
				<div className="grid">
					<p className="text-sm">Top tech used</p>
					<div className="flex gap-2">
						{techStack?.slice(0, 3).map((tech, index) => (
							<div key={index} className="flex items-center gap-2 p-2 rounded-md border border-border">
								<span className="text-sm">{tech}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</CardContent>
	</Card> );
}
 
export default ExperienceCard;