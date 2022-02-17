export default function input({label,...rest}) {
	return (
		<div className="flex gap-2"> 
			<label 
				className="w-40 inline-flex font-bold justify-end text-right">
				{label}
			</label>
			<input 
				{...rest} 
				className='border w-24 h-8 pl-2 rounded' 
			/>
		</div>
	)
}
