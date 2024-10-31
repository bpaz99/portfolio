import ExperienceCard from "./ExperienceCard";
import { ExperienceType } from "@/lib/types";
import experienceData from "@/data/experience.json";




const ExperienceSection = () => {
	return ( <div className="p-4 w-[50%] mx-auto grid gap-6">
		<h2 className="text-2xl text-center">Experience</h2>


		<div className="flex flex-col gap-4">
			

			{(experienceData as ExperienceType[]).map((experience, index) => (
				<ExperienceCard key={experience.id} experience={experience} align={index % 2 === 0 ? "left" : "right"}/>
			))}

		</div>



	</div> );
}
 
export default ExperienceSection;