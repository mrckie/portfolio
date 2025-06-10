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

export function ContactForm({ button }: { button: React.ReactNode }) {
	return (
		<Dialog>
			<form>
				<DialogTrigger asChild>
					{button}
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px] flex flex-col gap-y-9 py-8">
					<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
					<DialogHeader>
						<DialogTitle className="text-3xl font-bold">Contact Me</DialogTitle>
						<DialogDescription className="text-sm">
							I typically respond quickly, so feel free to reach out anytime!
						</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col gap-y-6">
						<div className="relative flex items-center w-full ">
							<MdPersonOutline className="absolute left-3 flex items-center justify-center size-5.5" />
							<Input className="pl-10" name="name" type="text" placeholder="Name" />
						</div>
						<div className="relative flex items-center w-full ">
							<MdOutlineEmail className="absolute left-3 flex items-center justify-center size-4.5" />
							<Input className="pl-10" name="email" type="email" placeholder="Email" />
						</div>
						<div className="relative flex items-center w-full">
							<FiMessageSquare className="absolute left-3 top-3 flex items-center justify-center size-4.5" />
							<Textarea className="h-25 pl-10" name="message" placeholder="Type your message" />
						</div>
					</div>

					<DialogFooter>
						<Button type="submit">Send Message</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	)
}

