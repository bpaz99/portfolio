export type ExperienceType = {
	id: number | string;
	company: string;
	position: string;
	type: "Fulltime" | "Internship" | "Freelance" | "Contract" | "Parttime" | "Temporary";
	time: string;
	bulletPoints: BulletPointType[];
	techStack?: string[];
	codeURL?: string;
	deployedURL?: string;
};

export type BulletPointType = {
	text: string;
	subPoints: string[];
} | string;
