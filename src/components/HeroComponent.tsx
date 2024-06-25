import ButtonComponent from './Button';
import { useNavigate } from 'react-router-dom';

function HeroComponent() {

	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/make-collection');
	};

	return (
		<section className="bg-gradient flex p-8 items-center justify-center " style={{ height: '60vh' }}>
			<div className='w-1/3 '>
				<h1 className='title-main text-left'>Lumina</h1>
				<h2 className='title text-left'>Cosmeticos que todos aman</h2>
				<p className='text text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima assumenda nemo dignissimos quaerat rem mollitia dolore dicta impedit voluptate. Odit ab minima nisi, exercitationem quidem soluta! Corrupti, nostrum obcaecati.</p>
				<ButtonComponent onClick={handleButtonClick} text="Compra ahora" />
			</div>
			<div className='' style={{ height: '60vh' }}>
				<video  className='h-full' src="../video.mp4" loop autoPlay muted playsInline></video>
			</div>
		</section>
	);
}

export default HeroComponent;
