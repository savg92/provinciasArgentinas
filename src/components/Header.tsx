import { Link } from 'react-router-dom';
import Argentina_Blank_Map from '../assets//Argentina_Blank_Map.svg';

const Header = () => {
	return (
		<>
			<header className='header mt-6'>
				<div className='flex flex-col justify-between items-center'>
					<div className='flex gap-2 items-center justify-center ml-2'>
						<img
							src={Argentina_Blank_Map}
							alt='Argentina Blank Map'
							className='w-6'
						/>
						<p className='font-bold w-fit'>Provincias Argentinas</p>
					</div>

					<nav className='flex flex-col gap-4 align-center mt-10 max-w-max'>
						<Link to='/birth_mortal'>Mortalidad infantil</Link>
						<Link to='/deficient_infra'>Infraestructura deficiente</Link>
						<Link to='/doctors_per_cap'>Doctores por habitante</Link>
						<Link to='/gdp'>PIB</Link>
						<Link to='/illiteracy'>Analfabetismo</Link>
						<Link to='/no_healthcare'>Sin atención médica</Link>
						<Link to='/population'>Población</Link>
						<Link to='/poverty'>Pobreza</Link>
						<Link to='/school_dropout'>Deserción escolar</Link>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
