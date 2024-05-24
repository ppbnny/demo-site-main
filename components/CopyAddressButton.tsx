"use client"

import { Button, buttonVariants } from "./ui/button"
import { useToast } from "@/components/ui/use-toast"

const address: string = "8rXmnm1K8eHjZ3ESCVouhGXCFuEhRstir8VN1cwuTbBJ"

function copyText(entryText: string) {
	navigator.clipboard.writeText(entryText)
}

const CopyAdddressButton = () => {
	const { toast } = useToast()

	return (
		<Button
			className='bg-gray-500'
			size='sm'
			onClick={() => [
				copyText(address),
				toast({
					title: "Address successfully copied",
					description: (
						<span className='text-gray-600 lg:text-xs'>{address}</span>
					),
				}),
			]}
		>
			Contract Address
		</Button>
	)
}

export default CopyAdddressButton
