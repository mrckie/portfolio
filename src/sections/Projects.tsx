import { BlurFade } from "@/components/magicui/blur-fade"
import CustomCard from "@/components/ui/custom-card"

const Projects = () => {
	return (
		<section className="flex flex-col items-start gap-y-18 lg:gap-y-23" id="projects">
			<BlurFade inView >
				<h1 className='text-xl font-semibold md:text-4xl md:font-bold'>Specialized Projects</h1>
			</BlurFade>
			<div className="flex flex-col gap-y-30">
				<div className="flex flex-col gap-y-8 items-start justify-between lg:grid lg:grid-cols-2">
					<BlurFade inView >
						<video
							autoPlay
							preload="none"
							tabIndex={-1}
							loop
							muted
							className="rounded-2xl shadow-xl duration-300 ease-in-out hover:-translate-y-1 hover:scale-102">
							<source src='https://res.cloudinary.com/drotczcme/video/upload/q_auto/v1749723270/a0djjbgwboaombl52e9l.mp4' type="video/mp4" />
						</video>
					</BlurFade>
					<CustomCard
						title="Barangay Document Requesting System"
						description="Designed to simplify and digitize the process of requesting official barangay documents."
						features={[
							'Authentication, password reset via email, change password, and profile management',
							'Resident verification and administrator invitation',
							'Role based access control',
							'Promote/Demote Role',
							'Real-time tracking',
							'Notification system'
						]}
						techStacks={[
							'Tailwind CSS',
							'Laravel',
							'React Typescript',
							'Inertia.js',
							'MariaDB',
							'Vite'
						]}
						link="https://github.com/mrckie/brgydocreq-system"
					/>

				</div>

				<div className="flex flex-col gap-y-8 items-start justify-between lg:grid lg:grid-cols-2">
					<BlurFade inView>
						<video
							autoPlay
							preload="none"
							tabIndex={-1}
							loop
							muted
							className="rounded-2xl duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 shadow-xl">
							<source src='https://res.cloudinary.com/drotczcme/video/upload/q_auto/v1749723509/b2kakrkdmyrhatbnfqwj.mp4' type="video/mp4" />
						</video>
					</BlurFade>
					<CustomCard
						title="To-do App"
						description="A simple to-do app that can perform CRUD"
						features={[
							'CRUD',
							'Field validation',
							'Marking when is done',
						]}
						techStacks={[
							'Tailwind CSS',
							'Laravel',
							'React Javascript',
							'Inertia.js',
							'MariaDB',
							'Vite',
						]}
						link="https://github.com/mrckie/todo-app"
					/>

				</div>

				<div className="flex flex-col gap-y-8 items-start justify-between lg:grid lg:grid-cols-2">
					<BlurFade inView>
						<video
							autoPlay
							preload="none"
							tabIndex={-1}
							loop
							muted
							className="rounded-2xl shadow-xl duration-300 ease-in-out hover:-translate-y-1 hover:scale-102">
							<source src='https://res.cloudinary.com/drotczcme/video/upload/q_auto/v1749726631/3rd_project_dfuvnl.mp4' type="video/mp4" />
						</video>
					</BlurFade>
					<CustomCard
						title="Blog Website"
						description="A simple blog website for publishing and reading articles, with a clean design and basic content management features."
						features={[
							'CRUD',
							'Authentication for admin and visitor access',
							'Marking when is done',
							'Comment section for reader interaction',
							'Admin dashboard for creating, editing, and deleting posts',
							'Basic category or tag filtering'
						]}
						techStacks={[
							'Vanilla Php',
							'CSS',
							'HTML',
							'Vanilla Javascript',
							'MySQL',
						]}
						link="https://github.com/mrckie/uhem"
					/>
				</div>
			</div>
		</section>

	)
}

export default Projects