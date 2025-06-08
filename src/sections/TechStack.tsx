
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


const techStack = [
	{
		name: "Laravel",
		icon: <FaLaravel className="size-6 text-[#FF2D20]" />,
	},
	{
		name: "React",
		icon: <FaReact className="size-6 text-[#61DAFB]" />,
	},
	{
		name: "Tailwind",
		icon: <RiTailwindCssFill className="size-6 text-[#06B6D4]" />,
	},
	{
		name: "Inertia.js",
		icon: <SiInertia className="size-6 text-[#b2b6ff]" />,
	},
	{
		name: "Vite ",
		icon: <TbBrandVite className="size-6 text-[#f96dcd]" />,
	},
	{
		name: "Php ",
		icon: <SiPhp className="size-6 text-[#777BB4]" />,
	},
	{
		name: "Typescript",
		icon: <SiTypescript className="size-6 text-[#3178C6]" />,
	},
	{
		name: "JavaScript",
		icon: <FaJs className="size-6 text-[#F7DF1E]" />,
	},
	{
		name: "GitHub",
		icon: <FaGithub className="size-6 text-[#0b0b0b]" />,
	},
	{
		name: "HTML5",
		icon: <FaHtml5 className="size-6 text-[#E34F26]" />,
	},
	{
		name: "CSS3",
		icon: <SiCss3 className="size-6 text-[#1572B6]" />,
	},
];

const middleIndex = Math.ceil(techStack.length / 2);
const firstRow = techStack.slice(0, middleIndex);
const secondRow = techStack.slice(middleIndex);

const TechStackCard = ({
	icon,
	name,
}: {
	icon: React.ReactNode;
	name: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-20 cursor-pointer overflow-hidden rounded-xl border p-3",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-col justify-center items-center gap-y-4">
				<span className="rounded-full">{icon}</span>
				<div className="flex flex-col">
					<figcaption className="text-xs font-medium dark:text-white">
						{name}
					</figcaption>
				</div>
			</div>
		</figure>
	);
};


const TechStack = () => {
	return (
		<section className="flex flex-col items-start gap-y-7">
			<h1 className='text-xl font-semibold'>Technology Stack</h1>
			<div className="relative flex w-full flex-col items-center justify-center gap-y-5 overflow-hidden">
				<Marquee pauseOnHover className="[--duration:20s]">
					{firstRow.map((review) => (
						<TechStackCard key={review.name} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]">
					{secondRow.map((review) => (
						<TechStackCard key={review.name} {...review} />
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
			</div>
		</section>

	)
}

export default TechStack
