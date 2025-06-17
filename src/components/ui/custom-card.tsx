import { FaGithub } from "react-icons/fa";
import { Badge } from "./badge";
import { Button } from "./button";
import { BlurFade } from "../magicui/blur-fade";

type Text = {
	title: string,
	description: string,
	features: string[];
	techStacks: string[];
	link: string
}

const CustomCard = ({ title, description, features, techStacks, link }: Text) => {
	return (
		<BlurFade inView>
			<div className="flex flex-col items-start gap-y-6 lg:ml-20 ">
				<h1 className="text-lg font-bold md:text-3xl ">{title}</h1>
				<h2 className="text-base">
					{description}
				</h2>
				<ul className="text-base flex flex-col gap-y-2 text-zinc-500">
					{features.map((feature, index) => (
						<li className="flex gap-x-2" key={index}>🔹<span>{feature}</span></li>
					))}
				</ul>
				<div>
					{
						techStacks.map((techStack, index) => (
							<Badge className="text-sm  p-3 m-1.5" variant='outline' key={index}>{techStack}</Badge>
						))
					}
				</div>
				<Button className="ml-2" >
					<a href={link}
						className="flex gap-x-2"
						target="_blank"
						rel='noopener noreferrer'
						aria-label='Github Repo'
					>
						<FaGithub className='size-4.5' />
						View Code
					</a>
				</Button>
			</div>
		</BlurFade>
	)
}

export default CustomCard