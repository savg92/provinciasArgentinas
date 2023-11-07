import { Link, NavLink } from 'react-router-dom';
import Argentina_Blank_Map from '../assets//Argentina_Blank_Map.svg';

const Header = () => {
	return (
		<>
			<header className='header mt-2 text-bold'>
				<div className='flex flex-col justify-between items-center'>
					<Link
						to='/'
						className='flex gap-2 items-center justify-center ml-2'
					>
						<img
							src={Argentina_Blank_Map}
							alt='Argentina Blank Map'
							className='w-8'
						/>
						<p className='font-bold w-fit'>Provincias Argentinas</p>
					</Link>

					<nav className='flex flex-col gap-4 align-center mt-10 max-w-max text-bold'>
						<NavLink
							to='/birth_mortal'
							className={({ isActive, isPending }) =>
                                isActive || isPending
                                    ? 'text-yellow-500'
                                    : 'hover:text-yellow-500'

                            }
						>
							Mortalidad infantil
						</NavLink>
						<NavLink
                            to='/deficient_infra'
                            className={({ isActive, isPending }) =>
                                isActive || isPending
                                    ? 'text-yellow-500'
                                    : 'hover:text-yellow-500'

                            }
                        >
                            Infraestructura deficiente
                        </NavLink>
                        <NavLink
                            to='/doctors_per_cap'
                            className={({ isActive, isPending }) =>
                                isActive || isPending
                                    ? 'text-yellow-500'
                                    : 'hover:text-yellow-500'

                            }
                        >
                            Médicos por habitante
                        </NavLink>
                        <NavLink
                            to='/gdp'
                            className={({ isActive, isPending }) =>
                                isActive || isPending
                                    ? 'text-yellow-500'
                                    : 'hover:text-yellow-500'

                            }
                        >
                            Producto Bruto Interno
                        </NavLink>
                        <NavLink
                            to='/illiteracy'
                            className={({ isActive, isPending }) =>
                                isActive || isPending
                                    ? 'text-yellow-500'
                                    : 'hover:text-yellow-500'

                            }
                        >
                            Analfabetismo
                        </NavLink>
                        <NavLink
                            to='/no_healthcare'
                            className={({ isActive, isPending }) =>
                                isActive || isPending
                                    ? 'text-yellow-500'
                                    : 'hover:text-yellow-500'

                            }
                        >
                            Sin cobertura médica
                        </NavLink>
                        <NavLink
                            to='/population'
                            className={({ isActive, isPending }) =>
                                isActive || isPending
                                    ? 'text-yellow-500'
                                    : 'hover:text-yellow-500'

                            }
                        >
                            Población
                        </NavLink>
                        <NavLink
                            to='/poverty'
                            className={({ isActive, isPending }) =>
                                isActive || isPending
                                    ? 'text-yellow-500'
                                    : 'hover:text-yellow-500'

                            }
                        >
                            Pobreza
                        </NavLink>
                        <NavLink
                            to='/school_dropout'
                            className={({ isActive, isPending }) =>
                                isActive || isPending
                                    ? 'text-yellow-500'
                                    : 'hover:text-yellow-500'

                            }
                        >
                            Abandono escolar
                        </NavLink>
                        <NavLink
                            to='/conclutions'
                            className={({ isActive, isPending }) =>
                                isActive || isPending
                                    ? 'text-yellow-500'
                                    : 'hover:text-yellow-500'
                            }
                        >
                            Conclusiones
                        </NavLink>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
