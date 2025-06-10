import { Particles } from '@/components/magicui/particles';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const AboutMe = () => {
	const { theme, setTheme } = useTheme();
	const [color, setColor] = useState("#ffffff");

	useEffect(() => {
		setColor(theme === "dark" ? "#ffffff" : "#000000");
	}, [setTheme]);
	return (
		<section className='flex flex-col items-start gap-y-7'>
			<Particles
				className="absolute inset-0 z-0"
				quantity={30}
				ease={80}
				refresh
				color={color}
			/>
			<div className='flex flex-col gap-y-3'>
				<h1 className='text-2xl md:text-3xl font-bold'>
					Hi, I’m Mark Jefferson Saldaña  — Passionate Full-Stack Web Developer
				</h1>
				<p className='text-zinc-500'>
					Currently studying Computer Science while building real-world web apps with Laravel, React, Inertia.js and Tailwind CSS. I apply best practices and modern tooling to every project I create.
				</p>
			</div>
			<div className='flex items-center gap-x-4'>
				<Button>
					<IoMdMail />
					Hire me
				</Button>
				<Button className='px-3'>
					<a
						href='https://github.com/mrckie'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub'
					>
						<FaGithub className='size-4.5' />
					</a>
				</Button>
				<Button className='px-3'>
					<a
						href="https://www.facebook.com/mark.jfrsn"
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Facebook'
					>
						<FaFacebook className='size-4.5' />
					</a>
				</Button>
			</div>
		</section>
	)
}

export default AboutMe