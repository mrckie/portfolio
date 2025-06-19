import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ShineBorder } from "@/components/magicui/shine-border";
import { Textarea } from "../ui/textarea";
import { MdOutlineEmail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export function ContactForm({ button }: { button: React.ReactNode }) {
	const form = useRef<HTMLFormElement>(null);
	const [isSending, setIsSending] = useState(false);


	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSending(true)

		try {
			await emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current!,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);
			alert('Message send successfully!');
			form.current?.reset();
		} catch {
			console.error('EmailJS Error:')
			alert('Failed to send a message.')
		} finally {
			setIsSending(false)
		}
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				{button}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] flex flex-col gap-y-9 py-8">
				<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
				<DialogHeader>
					<DialogTitle className="lg:text-3xl text-2xl font-bold">Contact Me</DialogTitle>
					<DialogDescription className="text-sm">
						I typically respond quickly, so feel free to reach out anytime!
					</DialogDescription>
				</DialogHeader>
				<form ref={form} onSubmit={sendEmail}>
					<div className="flex flex-col gap-y-6">
						<div className="relative flex items-center w-full ">
							<MdPersonOutline className="absolute left-3 flex items-center justify-center size-5.5" />
							<Input required className="pl-10 text-sm md:text-balance" name="name" type="text" placeholder="Name" />
						</div>
						<div className="relative flex items-center w-full ">
							<MdOutlineEmail className="absolute left-3 flex items-center justify-center size-4.5" />
							<Input required className="pl-10 text-sm md:text-balance" name="email" type="email" placeholder="Email" />
						</div>
						<div className="relative flex items-center w-full">
							<FiMessageSquare className="absolute left-3 top-3 flex items-center justify-center size-4.5" />
							<Textarea required className="h-25 pl-10 text-sm md:text-balance" name="message" placeholder="Type your message" />
						</div>
					</div>

					<DialogFooter className="pt-10">
						<Button className="cursor-pointer " type="submit" disabled={isSending}>
							{isSending ? 'Sending...' : 'Send a message'}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog >
	)
}

