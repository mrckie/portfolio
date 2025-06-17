import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { MagicCard } from "@/components/magicui/magic-card";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Me from '../assets/me.jpg'
import { MorphingText } from "@/components/magicui/morphing-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";


const slugs = [
	"react",
	"nodedotjs",
	"express",
	"nextdotjs",
	"graphql",
	"shadcnui",
	"zod",
	"postgresql",
	"nginx",
	"laravel",
	"tailwindcss",
	"typescript",
	"javascript",
	"php",
	"vercel",
	"docker",
	"git",
	"github",
	"figma",
	"vuedotjs",
];


interface Item {
	item: string;
	icon: string;
}

const practices = [
	{
		item: "Clean & Consistent Naming Conventions",
		icon: "📖",
	},
	{
		item: "Solid Code Principles (SOLID, DRY, KISS)",
		icon: "💻",
	},
	{
		item: "Structured & Modular Components",
		icon: "🗃️",
	},
	{
		item: "Tools for Code Quality (Git, Prettier)",
		icon: "🛠️",
	},
	{
		item: "Documentation & Comments",
		icon: "📑",
	},
	{
		item: "Continuous Learning & Improvement",
		icon: "📚",
	},


];

const AboutMe = () => {


	const PracCard = ({ item, icon }: Item) => {
		return (
			<figure
				className={cn(
					"relative max-w-md mx-auto w-full cursor-pointer overflow-hidden rounded-2xl p-4",
					// animation styles
					"transition-all duration-200 ease-in-out hover:scale-[103%]",
					// light styles
					"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
					// dark styles
					"transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
				)}
			>
				<div className="flex flex-row items-center gap-3">
					{icon}
					<div className="flex flex-col overflow-hidden">
						<figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
							<span className="text-sm text-wrap md:text-base ">{item}</span>
						</figcaption>
					</div>
				</div>
			</figure>
		);
	};

	const images = slugs.map(
		(slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
	);

	return (
		<>

			{/* 640px-768px breakpoint */}
			<section className="flex flex-col items-start gap-y-18 lg:hidden" id="about-me">
				<h1 className='text-xl font-semibold md:text-4xl md:font-bold'>About Me</h1>
				<MagicCard className="w-full shadow-lg duration-300 ease-in-out hover:-translate-y-1 hover:scale-102">
					<div className="px-4 py-7 flex flex-col items-center gap-y-8">
						<h1 className="text-lg md:text-2xl md:font-bold font-semibold text-center">My Development Practices</h1>
						<div
							className={cn(
								"relative flex h-[500px] w-full flex-col overflow-hidden p-2",
							)}
						>
							<Marquee pauseOnHover vertical>
								{practices.map((review) => (
									<PracCard key={review.item} {...review} />
								))}
							</Marquee>
							<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
						</div>
					</div>
				</MagicCard>

				<div className="px-4 py-7 flex flex-col items-center gap-y-4 size-full justify-center overflow-hidden">
					<h1 className="text-lg font-bold text-center md:text-2xl md:font-bold">
						Currently Exploring and Learning
					</h1>

					<IconCloud images={images} />
				</div>

				<MagicCard className="shadow-lg duration-300 ease-in-out hover:-translate-y-1 hover:scale-102">
					<div className="px-4 py-7 flex flex-col items-center gap-y-8">
						<h1 className="text-lg md:text-2xl md:font-bold font-bold text-center">
							My Developer Journey
						</h1>

						<div className="flex flex-row gap-x-4">
							<span className="border-2"></span>
							<AnimatedShinyText className="dark:text-zinc-500 text-zinc-950 text-sm md:text-base">
								As a computer science student and aspiring full-stack developer, I’m constantly learning and refining my skills — not just through coursework, but through hands-on practice and deep articles into real-world tools and concepts.
								<br />
								<br />
								Hungry to learn, building side projects, dive into official docs, and engage with developer communities to stay current with modern practices.
							</AnimatedShinyText>
						</div>
					</div>
				</MagicCard>
			</section>

			{/* 1024px breakpoint */}
			<section className=" relative max-lg:hidden flex flex-col justify-center gap-y-23" id="about-me">
				<h1 className='text-xl font-semibold md:text-4xl md:font-bold'>About Me</h1>
				<div className="flex flex-col gap-y-7">
					<div className="flex justify-between gap-x-7">

						<div className="flex flex-col gap-y-7">
							<img src={Me} className="rounded-4xl size-100 object-cover shadow-xl duration-300 ease-in-out hover:-translate-y-1 hover:scale-102" alt="" />

							<Card className="flex flex-col justify-center gap-y-10 h-full relative overflow-hidden w-full shadow-lg duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 rounded-4xl">
								<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
								<CardTitle>
									<h1 className="text-2xl font-semibold text-center">Tech Stack</h1>
								</CardTitle>
								<CardContent>
									<MorphingText texts={["Laravel", "Tailwind", "React", "Inertia.js", "MariaDB", "MySQL", "Shadcn", "MagicUI", "Vite"]} />
								</CardContent>
							</Card>
						</div>


						<MagicCard className="shadow-lg w-1/2 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 rounded-4xl">
							<div className="size-full px-4 py-7 flex flex-col items-center gap-y-8 ">
								<h1 className="text-center text-2xl font-semibold">
									Currently Exploring and Learning
								</h1>

								<IconCloud images={images} />
							</div>
						</MagicCard>


						<MagicCard className="w-1/2 shadow-lg duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 rounded-4xl">
							<div className="px-4 py-7 flex flex-col items-center gap-y-8">
								<h1 className="text-2xl font-semibold text-center">My Development Practices</h1>
								<div
									className={cn(
										"relative flex h-[500px] w-full flex-col overflow-hidden p-2",
									)}
								>
									<Marquee pauseOnHover vertical className=" [--duration:20s]" >
										{practices.map((review) => (
											<PracCard key={review.item} {...review} />
										))}
									</Marquee>
									<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
								</div>
							</div>
						</MagicCard>
					</div>


					<MagicCard className="w-full mx-auto shadow-lg duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 rounded-4xl">
						<div className="px-4 py-7 flex flex-col items-center gap-y-8">

							<div className="flex flex-row gap-x-5 p-3">
								<span className="border-2"></span>
								<AnimatedShinyText className="dark:text-zinc-500 text-zinc-950 text-lg text-justify">
									<span className="text-4xl font-coiny">“ </span>As a computer science student and aspiring full-stack developer, I&apos;m constantly learning and refining my skills not just through coursework, but through hands-on practice and deep articles into real-world tools and concepts.
									<br />
									<br />
									I treat learning as a continuous habit. My goal isn&apos;t just to “get things working” it&apos;s to understand why things work, how to do them right, and how to keep improving. I believe that makes me a better developer, collaborator, and problem solver.<span className="text-4xl font-coiny"> ”</span>
								</AnimatedShinyText >
							</div>
						</div>
					</MagicCard>

				</div>
			</section >
		</>

	)
}

export default AboutMe
