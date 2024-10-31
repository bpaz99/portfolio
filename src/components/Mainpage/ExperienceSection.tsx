import ExperienceCard from "./ExperienceCard";
import { ExperienceType } from "@/lib/types";
import experienceData from "@/data/experience.json";
import { motion } from "framer-motion";
import { useActiveSection } from "@/Context/ActiveSection";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ExperienceSection = () => {

	const { setActiveSection } = useActiveSection();
	const { ref, inView } = useInView({
		threshold: 0.15,
	})	
	useEffect(() => {
		if (inView) {
			setActiveSection("#experience");
		}
	}, [inView]);

	return ( <motion.section 
		ref={ ref }
		id="experience" 
		className="p-4 w-1/9 sm:w-1/2 mx-auto grid gap-6 scroll-mt-28"
		initial={{ opacity: 0}}
		animate={{ opacity: inView ? 1 : 0}}
		transition={{ delay: 0.2 }}
	>
		<h2 className="text-2xl text-center">Experience</h2>
		<div className="flex flex-col gap-4">
			{(experienceData as ExperienceType[]).map((experience, index) => (
				<ExperienceCard key={experience.id} experience={experience} align={index % 2 === 0 ? "left" : "right"}/>
			))}
		</div>
	</motion.section> );
}
 
export default ExperienceSection;