import { useActiveSection } from "@/Context/ActiveSection";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AboutMeSection = () => {

	const { setActiveSection } = useActiveSection();
	const { ref, inView } = useInView({
		threshold: 0.75,
	})
	useEffect(() => {
		if (inView) {
			setActiveSection("#aboutme");
		}
	}, [inView]);

	return ( 
		<motion.section 
			id="aboutme" 
			className="h-1/2 w-2/3 sm:w-1/2 mx-auto"
			ref={ ref }
			initial={{ opacity: 0}}
			animate={{ opacity: inView ? 1 : 0}}
			transition={{ delay: 0.2 }}
		>
			<h2 className="text-2xl  text-center">About Me</h2>
			<p className="text-md  text-center">
				Results-driven Software Engineer with over 7 years of experience in developing scalable applications. Proficient in various programming languages and technologies, with a strong background in software architecture, database management, and cloud solutions. Bilingual in English and Spanish.
			</p>
		</motion.section>
	);
}
 
export default AboutMeSection;