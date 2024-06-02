import React from "react";
import AboutMe from "./component/about-me";
import { aboutMe, skills, professionalData ,certificationsData } from "../data/page-data";
import ProfessionalExperience from "./component/professional-experience";
import Certifications from "./component/certifications";

const page = () => {
	return (
		<div>
			<AboutMe data={aboutMe} skills={skills} />
			<ProfessionalExperience data={professionalData} />
			<Certifications data={certificationsData}/>
		</div>
	);
};

export default page;
