import { createContext, useState, useContext } from "react";

const ActiveSectionContext = createContext<{ activeSection: string, setActiveSection: (section: string) => void } | undefined>(undefined);

export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
	
	const [activeSection, setActiveSection] = useState("#hero");

	return <ActiveSectionContext.Provider value={{ 
		activeSection, 
		setActiveSection 
	}}>
			{ children }
	</ActiveSectionContext.Provider>
}

export function useActiveSection() {
	const context = useContext(ActiveSectionContext);
	if (context === undefined) {
		throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
	}
	return context;
}
