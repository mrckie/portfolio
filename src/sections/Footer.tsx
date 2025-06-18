import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import Mark from '../assets/m.png'
import { WordRotate } from '@/components/magicui/word-rotate';
import { FaSquareInstagram } from "react-icons/fa6"

const Footer = () => {

	const hoverUnderline = 'relative cursor-pointer after:absolute after:left-0 after:mt-5 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-100 hover:after:w-full'

	return (
		<>
			<section className='flex flex-col items-center gap-y-7 lg:gap-y-12'>
				<Separator />
				<div className='flex flex-col gap-y-20 lg:grid lg:grid-cols-3 w-full lg:gap-x-20 mb-20'>
					<div className='flex flex-col gap-y-5'>
						<div className='flex items-center gap-x-4'>
							<img src={Mark} className='size-9 border-1 rounded-full dark:bg-white' alt="Website Logo" />
							<h1 className='md:text-xl font-bold'>Mark Jefferson Saldaña</h1>

						</div>
						<p className='text-sm text-zinc-500'>
							Constantly learning and refining my skills not just through coursework, but through hands-on practice and deep dives into real-world tools and concepts.
						</p>
						<div className='flex text-sm items-center gap-x-4'>
							<h1>Built with:</h1>
							<WordRotate
								className="font-bold text-black dark:text-white duration-300"
								words={["React Typescript", "Vite", "Shadcn", "MagicUI", "Tailwind"]}
							/>
						</div>
					</div>
					<div className='flex flex-col gap-y-5'>
						<h2 className='font-bold'>Quick Navigation</h2>
						<div className='flex flex-col items-start text-zinc-500 text-sm gap-y-2'>
							<a
								className={hoverUnderline}
								href="/#home" onClick={e => {
									e.preventDefault();
									window.scrollTo({ top: 0, behavior: "smooth" });
								}}>Home</a>
							<a className={hoverUnderline} href="/#about-me">About Me</a>
							<a className={hoverUnderline} href="/#projects">Projects</a>
							<a className={hoverUnderline} href="/#tech-stack">Tech Stack</a>
						</div>
					</div>
					<div className='flex flex-col gap-y-5'>
						<h2 className='font-bold'>Let's get connected</h2>
						<div className='flex gap-x-4'>
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
							<Button className='px-3 cursor-pointer duration-300 ease-in-out hover:-translate-y-1 hover:scale-104'>
								<a
									href="https://www.instagram.com/marc.kiiee"
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Facebook Profile'
								>
									<FaSquareInstagram className='size-5' />
								</a>
							</Button>
						</div>

					</div>

				</div>
				<span className='text-xs text-zinc-500 lg:-mb-40 -mb-20'>
					© 2025 Mark Jefferson Saldaña. All rights reserved.
				</span>
			</section >

		</>
	)
}

export default Footer