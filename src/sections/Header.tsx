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

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (

    <div className="w-full bg-transparent sticky top-0 z-50 border-b py-3 px-4">

      {/* mobile view */}
      <div className="md:hidden flex items-center justify-between">
        <Sheet>
          <SheetTrigger >
            <RxHamburgerMenu className="size-5" />
          </SheetTrigger>
          <SheetContent side="left" className="w-60">
            <SheetHeader>
              <SheetTitle className="flex flex-col items-start mt-7 gap-y-5">
                <RainbowButton variant='outline' className="text-sm p-2">Mark Jefferson E. Saldaña</RainbowButton>
                <ShimmerButton shimmerSize="0.1em" className="text-sm p-2 dark:text-white">Contact Me</ShimmerButton>
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

      {/* desktop view */}
      <div className="flex items-center justify-between">

      </div>
    </div >
  )
}

export default Header
