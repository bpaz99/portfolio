import { useActiveSection } from "@/Context/ActiveSection";
import { motion } from "framer-motion";

const links = [
	{hash: "#hero", title: "Home"},
	{hash: "#experience", title: "Experience"},
	{hash: "#skills", title: "Skills"},
	{hash: "#aboutme", title: "About Me"},
]

const Navbar = () => {

	const { activeSection, setActiveSection } = useActiveSection();
	
	return ( 
		<header className="z-50 relative">
			<motion.div 
				className="fixed top-0 left-1/2 -translate-x-1/2 h-20 sm:h-14 rounded-none sm:rounded-full border border-white border-opacity-40 bg-white/60 flex justify-between items-center p-4 shadow-lg shadow-black/210 backdrop-blur-[3px] w-full sm:w-[36rem] sm:top-6 overflow-hidden"
				initial={{ y: -100, x: "-50%", opacity: 0 }}
				animate={{ y: 0, x: "-50%", opacity: 1 }}
				transition={{ duration: 0.4, ease: "easeInOut" }}
			>
				<nav className="fixed top-0 w-full h-full left-1/2 transform -translate-x-1/2">
					<ul className="flex items-center flex-wrap justify-around gap-4 w-full h-full px-12 sm:px-4 sm:justify-center sm:gap-8 text-primary">
						{links.map((link) => (
							<li className="flex items-center justify-center hover:text-primary/80 transition-colors duration-300 relative select-none">
								<a href={link.hash} onClick={() => setActiveSection(link.hash)}>{link.title}</a>
								{ activeSection === link.hash && (
									<motion.span 
										className="absolute -mx-3 -my-2 rounded-full inset-0 scale-110 bg-primary/10 -z-10" 
										layoutId="activeSection"
										transition={{ 
											type: "spring",
											stiffness: 280,
											damping: 10,
										}}
									/>
								)}
							</li>
						))}		
					</ul>
				</nav>
			</motion.div>
			
		</header>
	);
}
 
export default Navbar;


