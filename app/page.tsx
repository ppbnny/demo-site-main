import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Navbar from "@/components/Navbar"
import Tweet from "@/components/Tweet"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Check } from "lucide-react"
import Link from "next/link"
import CopyAdddressButton from "@/components/CopyAddressButton"

export default function Home() {
	return (
		<main className=''>
			<section className='bg-slate-50 border-b border-gray-200'>
				<MaxWidthWrapper className='pb-8'>
					<div className='flex flex-col items-center'>
						<h1 className='text-center relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl pb-8'>
							Hugh Henne on <span className='text-green-600'>Solana</span>{" "}
						</h1>
						<p className='lg:text-lg max-w-prose text-muted-foreground pb-8 text-md'>
							the The Meme Mogul is here to stay and party hard
						</p>
						<Tweet />
					</div>
				</MaxWidthWrapper>
			</section>
			{/* who is hugh hene section*/}
			<section>
				<MaxWidthWrapper>
					<div className='flex flex-col items-center w-full pb-8'>
						<h1 className='text-center relative w-fit tracking-tight text-balance mt-16 font-semibold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl pb-8'>
							About us
						</h1>
						<p className='text-lg max-w-prose text-muted-foreground text-center'>
							We created a memecoin based on Hugh Henne, a popular retail
							investor known for sharing stock market tips and strategies on
							social media.
						</p>
						<div>
							{/* <div className='w-full max-w-3xl'>
							<AspectRatio ratio={16 / 9}>
              <Image
              src='/hugh.jpg'
              alt='hugh'
              className='rounded-md object-cover'
              fill
              />
							</AspectRatio>
						</div> */}
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
			{/* tokenomics */}
			<section className='bg-slate-50 border-t border-gray-200 pb-8'>
				<MaxWidthWrapper>
					<div className='flex flex-col items-center'>
						<h1 className='text-center relative w-fit tracking-tight text-balance mt-16 font-semibold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl pb-8'>
							Tokenomics
						</h1>

						<ul className='space-y-2 text-left font-medium sm:items-start'>
							<div className='space-y-2'>
								<li className='flex gap-1.5 items-center text-left'>
									<Check className='h-5 w-5 shrink-0 text-green-600' /> 100% of
									liquidity pool burned
								</li>
								<li className='flex gap-1.5 items-center text-left'>
									<Check className='h-5 w-5 shrink-0 text-green-600' />
									10% of{" "}
									<span>
										{" "}
										<Link
											href='https://solscan.io/tx/4XbqxXp6a68mdXAjezP68GfUUqDoCEVJdcKGx7UMsFHmejwREGhffZ6UTpvzM7Gq75oMzeqEHjPHs5PZ5KKHA5BE'
											className='block text-green-600'
										>
											supply burned
										</Link>
									</span>
								</li>
								<li className='flex gap-1.5 items-center text-left'>
									<Check className='h-5 w-5 shrink-0 text-green-600' />
									0% tax
								</li>
							</div>
						</ul>
					</div>
				</MaxWidthWrapper>
			</section>
			<footer className='h-8 border-t border-gray-200'>
				<MaxWidthWrapper>
					<p className='text-center'>
						$HUGH is a meme coin with no intrinsic value or expectation of
						financial return. The coin is completely useless and for
						entertainment purposes only.
					</p>
				</MaxWidthWrapper>
			</footer>
		</main>
	)
}
