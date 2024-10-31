import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

const Hero = () => {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 200) {
				setIsVisible(false)
			} else {
				setIsVisible(true)
			}
		}

		window.addEventListener("scroll", toggleVisibility)
		return () => window.removeEventListener("scroll", toggleVisibility)
	}, [])

	const handleViewExperience = () => {
		document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
	}

	return (
		<section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 w-full">
			<div className="text-center space-y-6 p-4">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary">
					Turning Coffee into Code
				</h1>
				<p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
					Passionate software engineer crafting elegant solutions to complex problems
				</p>
				<Button size="lg" className="text-lg px-6 py-3" onClick={handleViewExperience}>
					View Experience
				</Button>
			</div>
			{ isVisible && (
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<ChevronDown
						size={ 48 }
						onClick={handleViewExperience}
						className="text-primary cursor-pointer"
					/>
				</div>
			) }
		</section>
	)
}

export default Hero;