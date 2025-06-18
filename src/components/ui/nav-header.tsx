import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { RiMoonClearLine } from "react-icons/ri";
import { IoSunnyOutline } from "react-icons/io5";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { useTheme } from "@/components/theme-provider";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ContactForm } from "@/components/magicui/contact-form";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const NavHeader = () => {
  const { theme, setTheme } = useTheme();

  const hoverUnderline = 'relative cursor-pointer after:absolute after:left-0 after:mt-6.5 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-100 hover:after:w-full'

  return (

    <div className="w-full sticky top-0 z-50 border-b py-3 bg-background/60 backdrop-blur-sm px-7 lg:px-10">
      <ScrollProgress className="lg:top-[59px] top-[52px]" />
      {/* 320px-768px breakpoint */}
      <div className="lg:hidden flex items-center justify-between">
        <Sheet>
          <SheetTrigger >
            <RxHamburgerMenu className="size-5" />
          </SheetTrigger>
          <SheetContent side="left" className="sm:w-70 w-60">
            <SheetHeader>
              <SheetTitle className="flex flex-col items-start mt-7 gap-y-5">
                <RainbowButton variant='outline' className="text-sm md:text-base p-2 mb-9">Mark Jefferson E. Saldaña</RainbowButton>
                <span
                  className={hoverUnderline}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}>
                  Home
                </span>
                <span
                  className={hoverUnderline}
                  onClick={() => {
                    const section = document.getElementById("about-me");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About Me
                </span>
                <span
                  className={hoverUnderline}
                  onClick={() => {
                    const section = document.getElementById("projects");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Projects
                </span>
                <span
                  className={hoverUnderline}
                  onClick={() => {
                    const section = document.getElementById("tech-skill");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Skills
                </span>
                <ContactForm
                  button={
                    <ShimmerButton shimmerSize="0.1em" className="text-sm md:py-2 md:px-4 md:text-base  dark:text-white">
                      Contact Me
                    </ShimmerButton>
                  }
                />
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <button className="cursor-pointer hover:bg-zinc-100/30  rounded-lg p-1"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {
            theme === 'dark' ? (
              <RiMoonClearLine className="size-5 text-white" />
            ) : (
              <IoSunnyOutline className="size-5" />
            )
          }
        </button>
      </div>

      {/* 1024px-above breakpoint */}
      <div className="lg:flex items-center justify-between hidden">
        <RainbowButton variant='outline' className="md:text-sm p-4">Mark Jefferson E. Saldaña</RainbowButton>
        <div className="md:flex items-center gap-x-10">
          <div className="md:flex items-center gap-x-6">
            <span
              className={hoverUnderline}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </span>
            <span
              className={hoverUnderline}
              onClick={() => {
                const section = document.getElementById("about-me");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Me
            </span>
            <span
              className={hoverUnderline}
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </span>
            <span
              className={hoverUnderline}
              onClick={() => {
                const section = document.getElementById("tech-skill");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skills
            </span>
          </div>
          
          <div className="md:flex items-center gap-x-6">
            <ContactForm
              button={
                <ShimmerButton shimmerSize="0.1em" className="py-1.5 px-4 text-[15px] dark:text-white">
                  Contact Me
                </ShimmerButton>
              }
            />
            <button className="cursor-pointer dark:hover:bg-zinc-100/30 hover:bg-zinc-800/20  rounded-lg p-1"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {
                theme === 'dark' ? (
                  <RiMoonClearLine className="size-5 text-white" />
                ) : (
                  <IoSunnyOutline className="size-5" />
                )
              }
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavHeader
