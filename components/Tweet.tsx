import Image from "next/image"
import { Icons } from "./Icons"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VBQ1vdP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Tweet() {
	return (
		<div className='w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto'>
			<div className='flex justify-between items-center px-6 py-4'>
				<div className='flex space-x-4'>
					<div>
						<Image
							alt='Profile'
							className='rounded-full'
							height='48'
							src='/hugh_twitter.jpg'
							style={{
								aspectRatio: "48/48",
								objectFit: "cover",
							}}
							width='48'
						/>
					</div>
					<div>
						<div className='text-lg font-bold dark:text-white'>
							Mitch_Hennessey
						</div>
						<div className='text-sm text-gray-500 dark:text-gray-200'>
							@Hugh_Henne
						</div>
					</div>
				</div>
				<div>
					<svg
						fill='none'
						height='24'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='12' cy='12' r='1' />
						<circle cx='19' cy='12' r='1' />
						<circle cx='5' cy='12' r='1' />
					</svg>
				</div>
			</div>
			<div className='px-6 py-4'>
				<div className='text-sm text-gray-800 dark:text-gray-200'>
					<p>
						A crazy world. Woke up to my internet name on a coin.{" "}
						<span className='text-blue-500'>$HUGH</span>
					</p>
					<br />
					<p>
						I’m super flattered by it but honestly know nothing about this
						space. Interested in seeing where this is going and maybe
						unexpectedly making some money
					</p>
					<br />
					<p>
						As always and forever:
						<br />
						1). I am not telling you to buy{" "}
						<span className='text-blue-500'>$HUGH</span>
						<br />
						2). What you do is up to. I will do what I want, when I want,
						however I like.
						<br />
						Visit my bio for more info
						<br />
						3). I do not run @hughhenneonsols
						<br />
						4). This is super fun
					</p>
				</div>
			</div>
			<div className='flex justify-between items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 p-4'>
				<div className='flex items-center space-x-4'>
					<svg
						className=' h-4 w-4 text-gray-500 dark:text-gray-200'
						fill='none'
						height='24'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' />
						<path d='M21 3v5h-5' />
						<path d='M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' />
						<path d='M8 16H3v5' />
					</svg>
					<svg
						className=' h-4 w-4 text-gray-500 dark:text-gray-200'
						fill='none'
						height='24'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
					</svg>
					<svg
						className=' h-4 w-4 text-gray-500 dark:text-gray-200'
						fill='none'
						height='24'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
						<polyline points='17 8 12 3 7 8' />
						<line x1='12' x2='12' y1='3' y2='15' />
					</svg>
				</div>
				<div className='flex items-center space-x-4'>
					<svg
						className=' h-4 w-4 text-gray-500 dark:text-gray-200'
						fill='none'
						height='24'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='12' cy='12' r='1' />
						<circle cx='19' cy='12' r='1' />
						<circle cx='5' cy='12' r='1' />
					</svg>
					<svg
						className=' h-4 w-4 text-gray-500 dark:text-gray-200'
						fill='none'
						height='24'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z' />
					</svg>
				</div>
			</div>
		</div>
	)
}
