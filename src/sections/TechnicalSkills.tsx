
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiInertia } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiShadcnui } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiAssemblyscript } from "react-icons/si";
import { FaDartLang } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { FaFlutter } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { BlurFade } from "@/components/magicui/blur-fade";

const skills = [

	{
		name: "Typescript",
		icon: <SiTypescript className="size-6 md:size-8 text-[#3178C6]" />,
	},
	{
		name: "JavaScript",
		icon: <FaJs className="size-6 md:size-8 text-[#F7DF1E]" />,
	},
	{
		name: "React",
		icon: <FaReact className="size-6 md:size-8 text-[#61DAFB]" />,
	},
	{
		name: "Inertia.js",
		icon: <SiInertia className="size-6 md:size-8 text-[#b2b6ff]" />,
	},
	{
		name: "Php",
		icon: <SiPhp className="size-6 md:size-8 text-[#777BB4]" />,
	},
	{
		name: "Laravel",
		icon: <FaLaravel className="size-6 md:size-8 text-[#FF2D20]" />,
	},

	{
		name: "Shadcn",
		icon: <SiShadcnui className="size-6 md:size-8 text-[#F7F7F7]" />,
	},
	{
		name: "Tailwind",
		icon: <RiTailwindCssFill className="size-6 md:size-8 text-[#06B6D4]" />,
	},
	{
		name: "HTML",
		icon: <FaHtml5 className="size-6 md:size-8 text-[#E34F26]" />,
	},
	{
		name: "CSS",
		icon: <SiCss3 className="size-6 md:size-8 text-[#1572B6]" />,
	},
	{
		name: "MySQL",
		icon: <GrMysql className="size-6 md:size-8 text-[#4479A1]" />,
	},
	{
		name: "MariaDB",
		icon: <SiMariadb className="size-6 md:size-8 text-[#004e65]" />,
	},
	{
		name: "Java",
		icon: <FaJava className="size-6 md:size-8 text-[#007ACC]" />,
	},
	{
		name: "Python",
		icon: <FaPython className="size-6 md:size-8 text-[#3776AB]" />,
	},
	{
		name: "Assembly",
		icon: <SiAssemblyscript className="size-6 md:size-8 text-[#007ACC]" />,
	},
	{
		name: "GitHub",
		icon: <FaGithub className="size-6 md:size-8 text-[#0b0b0b]" />,
	},
	{
		name: "Dart",
		icon: <FaDartLang className="size-6 md:size-8 text-[#007DFF]" />
	},
	{
		name: "Flutter",
		icon: <FaFlutter className="size-6 md:size-8 text-[#027DFD]" />
	},
	{
		name: "Figma",
		icon: <IoLogoFigma className="size-6 md:size-8 text-[#F24E1E]" />,
	},
	{
		name: "Vite",
		icon: <TbBrandVite className="size-6 md:size-8 text-[#f96dcd]" />,
	},
	{
		name: "Firebase",
		icon: <IoLogoFirebase className="size-6 md:size-8 text-[#FFCA28]" />
	},
	{
		name: "Postman",
		icon: <SiPostman className="size-6 md:size-8 text-[#EF5B25]" />
	},

];

const middleIndex = Math.ceil(skills.length / 2);
const firstRow = skills.slice(0, middleIndex);
const secondRow = skills.slice(middleIndex);

const SkillsCard = ({
	icon,
	name,
}: {
	icon: React.ReactNode;
	name: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-20 md:w-26 cursor-pointer overflow-hidden rounded-xl border p-3",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-col justify-center items-center gap-y-4">
				<span className="rounded-full">{icon}</span>
				<div className="flex flex-col">
					<figcaption className="text-xs md:text-sm font-medium  dark:text-white">
						{name}
					</figcaption>
				</div>
			</div>
		</figure>
	);
};


const TechnialSkills = () => {

	return (
		<section className="flex flex-col items-start gap-y-18 lg:gap-y-23 mb-40 scroll-section" id='tech-skill'>
			<BlurFade inView>
				<h1 className='text-xl font-semibold md:text-4xl md:font-bold'>Technical Skills</h1>
			</BlurFade>
			<div className="relative flex w-full flex-col items-center justify-center gap-y-7 overflow-hidden">
				<BlurFade inView>
					<Marquee pauseOnHover>
						{firstRow.map((review) => (
							<SkillsCard key={review.name} {...review} />
						))}
					</Marquee>
					<Marquee reverse pauseOnHover>
						{secondRow.map((review) => (
							<SkillsCard key={review.name} {...review} />
						))}
					</Marquee>
				</BlurFade>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
			</div>
		</section >

	)
}

export default TechnialSkills
