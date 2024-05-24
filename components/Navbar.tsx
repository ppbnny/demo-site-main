import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button, buttonVariants } from "./ui/button"
import { Icons } from "./Icons"
import { ArrowRight } from "lucide-react"
import CopyAdddressButton from "./CopyAddressButton"

const Navbar = () => {
	return (
		<nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
			<MaxWidthWrapper>
				<div className='flex h-14 items-center justify-between border-b- border-zinc-200'>
					<Link href='/' className='flex z-40 font-semibold'>
						<span className='text-green-600'>$</span>HUGH
					</Link>

					<div className='h-full flex items-center space-x-4'>
						<Link
							href='https://x.com/Hughhenneonsol'
							className={buttonVariants({
								size: "sm",
								variant: "ghost",
							})}
						>
							<Icons.twitter />
						</Link>
						<Link
							href='https://t.me/Hughhenneonsol'
							className={buttonVariants({
								size: "sm",
								variant: "ghost",
							})}
						>
							<Icons.telegram />
						</Link>

						<div className='h-8 w-px bg-zinc-200 hidden sm:block'></div>
						<CopyAdddressButton />
						<Link
							href='https://raydium.io/swap/?inputMint=sol&outputMint=8rXmnm1K8eHjZ3ESCVouhGXCFuEhRstir8VN1cwuTbBJ'
							className={buttonVariants({
								size: "sm",
								className: "hidden sm:flex items-center gap-1",
							})}
						>
							Buy now
							<ArrowRight className='ml-1.5 h-5 w-5' />
						</Link>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}

export default Navbar
