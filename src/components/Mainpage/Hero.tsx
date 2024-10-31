import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect } from "react"
import { useActiveSection } from "@/Context/ActiveSection"
import { useInView } from "react-intersection-observer"

const Hero = () => {

	const { setActiveSection } = useActiveSection();
	const { ref, inView } = useInView({
		threshold: 0.2,
	})

	useEffect(() => {
		if (inView) {
			setActiveSection("#skills");
		}
	}, [inView]);


	return (
		<motion.section 
			id="hero" 
			ref={ref}
			className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 w-full"
			initial={{ opacity: 0, y: 0}}
			animate={{ opacity: inView ? 1 : 0}}
			transition={{ delay: 0.2 }}
		>
			<div className="text-center space-y-6 p-4">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary">
					Turning Coffee into Code
				</h1>
				<p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
					Passionate software engineer crafting elegant solutions to complex problems
				</p>
				<Button size="lg" className="text-lg px-6 py-3" asChild>
					<a href="#experience">
						View Experience
					</a>
				</Button>
			</div>
			{ inView && (
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<ChevronDown
						size={ 48 }
						className="text-primary cursor-pointer"
					/>
				</div>
			) }
		</motion.section>
	)
}

export default Hero;