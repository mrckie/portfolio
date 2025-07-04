import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { ContactForm } from '@/components/magicui/contact-form';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BoxReveal } from '@/components/magicui/box-reveal';
import { Particles } from '@/components/magicui/particles';
import { Meteors } from '@/components/magicui/meteors';



const Hero = () => {
	const { theme, setTheme } = useTheme();
	const [color, setColor] = useState("#ffffff");

	useEffect(() => {
		setColor(theme === "dark" ? "#ffffff" : "#000000");
	}, [setTheme]);


	return (
		<section className='flex flex-col items-start gap-y-7 lg:gap-y-10' id='home'>
			<Particles
				className="absolute inset-0 z-0"
				quantity={200}
				ease={80}
				size={0.5}
				refresh
				color={color}
			/>
			<Meteors
				number={4}
				minDelay={0.9}
			/>
			<div className='flex flex-col gap-y-3 lg:gap-y-6 md:flex-row md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between'>
				<div className='flex flex-col gap-y-5'>
					<BoxReveal boxColor={color} duration={0.8}>
						<div className='text-2xl md:text-5xl font-bold'> Hi, I&apos;m Mark Jefferson Saldaña — Passionate Full-Stack Web Developer </div>
					</BoxReveal>
					<BoxReveal boxColor={color} duration={0.8}>
						<AnimatedShinyText className='text-zinc-500 lg:text-lg'>
							Currently studying Computer Science while building real-world web apps with Laravel, React, Inertia.js, and Tailwind CSS. I apply best practices and modern tooling to every project I create.
						</AnimatedShinyText>
					</BoxReveal>
				</div>
				<span className='lg:w-125 md:w-80'>
				</span>
			</div>
			<BoxReveal boxColor={color} duration={0.8}>
				<div className='flex items-center gap-x-4 md:gap-x-6 py-2 px-1 '>
					<ContactForm button={
						<Button className='cursor-pointer duration-300 ease-in-out hover:-translate-y-1 hover:scale-104'>
							<IoMdMail />
							Hire me
						</Button>
					}
					/>


					<Button className='px-3 cursor-pointer duration-300 ease-in-out hover:-translate-y-1 hover:scale-104'>
						<a
							href='https://github.com/mrckie'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub Profile'
						>
							<FaGithub className='size-5' />
						</a>
					</Button>
					<Button className='px-3 cursor-pointer duration-300 ease-in-out hover:-translate-y-1 hover:scale-104'>
						<a
							href='https://www.linkedin.com/in/mark-jefferson-salda%C3%B1a-659897313/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub Profile'
						>
							<FaLinkedin className='size-5' />
						</a>
					</Button>
					<Button className='px-3 cursor-pointer duration-300 ease-in-out hover:-translate-y-1 hover:scale-104'>
						<a
							href="https://www.facebook.com/mark.jfrsn"
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Facebook Profile'
						>
							<FaFacebook className='size-5' />
						</a>
					</Button>
				</div>
			</BoxReveal>
		</section >
	)
}

export default Hero