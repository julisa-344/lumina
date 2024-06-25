import "./style/button.css"

interface ButtonProps {
	text: string;
	onClick: () => void;
	className?: string;
}

function ButtonComponent(props: ButtonProps) {
	const { text, onClick, className } = props;

	return (
		<>
			<button
				className={`btn-main flex items-center justify-between w-auto ${className}`}
				onClick={onClick}
			>
				{text}

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ml-4">
					<path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
				</svg>
			</button>
		</>
	);
}

export default ButtonComponent;
