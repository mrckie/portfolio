import { Button } from '@/components/ui/button';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const AboutMe = () => {
	return (
		<section className='flex flex-col items-start gap-y-7 h-screen py-20'>
			<div className='flex flex-col gap-y-3'>
				<h1 className='text-2xl font-bold'>
					Hi, I’m Mark Jefferson Saldaña  — Web Developer
				</h1>
				<p className='text-zinc-500'>
					From frontend UI to backend logic, I develop full-stack applications using modern technologies following clean code standards, modular architecture, and modern development principles.
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