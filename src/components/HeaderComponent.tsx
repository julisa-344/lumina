import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'


const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
	{ name: 'Inicio', href: '/', current: false },
	{ name: 'Productos', href: 'shop', current: false },
	{ name: 'Nosotros', href: '#', current: false },
	{ name: 'Preguntas', href: '#', current: false },
]
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Cerrar cesion', href: '#' },
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}


function Header() {
	const { cart } = useContext(CartContext);

	return (
		// <header className="header">
		//   <div className="flex align-center">
		//     <h2 className="header-title">Calcomaniacos</h2>
		//   </div>
		//   <div>
		//     <Link to='/' className='link-header'>Home</Link>
		//     <Link to='/shop' className='link-header'>Shop</Link>
		//     <Link to='/make-collection' className='link-header'>Crea tu coleccion</Link>
		//   </div>
		//   <nav className="header-nav">
		//     <Link to='/cart' aria-label='Cart'>
		//       <button className='cart'>
		//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
		//           <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
		//         </svg>

		//         {cart.length > 0 && <p className="count">{cart.length}</p>}
		//       </button>
		//     </Link>
		//     <button
		//       className='account'
		//       aria-label='Account'
		//     >
		//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
		//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
		//       </svg>

		//     </button>
		//   </nav>
		// </header>

		<>
			<header className="bg-primary-600">
				<Disclosure as="nav" >
					{({ open }) => (
						<>
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<h2 className='logo'>LUMINA</h2>
										</div>
										<div className="hidden md:block">
											<div className="ml-10 flex items-baseline space-x-4">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className={classNames(
															item.current
																? 'bg-primary-600 text-white'
																: 'text-white hover:bg-primary-800 hover:text-white',
															'rounded-md px-3 py-2 text-sm font-medium',
														)}
														aria-current={item.current ? 'page' : undefined}
													>
														{item.name}
													</a>
												))}
											</div>
										</div>
									</div>
									<div className="hidden md:block">
										<div className="ml-4 flex items-center md:ml-6">
											<button
												type="button"
												className="relative rounded-full bg-primary-600 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
											>
												<span className="absolute -inset-1.5" />
												<ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
												{cart.length > 0 && <p className="count">{cart.length}</p>}
											</button>

											{/* Profile dropdown */}
											<Menu as="div" className="relative ml-3">
												<div>
													<MenuButton className="relative flex max-w-xs items-center rounded-full bg-primary-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
														<span className="absolute -inset-1.5" />
														<span className="sr-only">Open user menu</span>
														<img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
													</MenuButton>
												</div>
												<MenuItems
													transition
													className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 bg-primary-800 ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
												>
													{userNavigation.map((item) => (
														<MenuItem key={item.name}>
															{({ focus }) => (
																<a
																	href={item.href}
																	className={classNames(
																		focus ? 'bg-gray-100' : '',
																		'block px-4 py-2 text-sm text-white',
																	)}
																>
																	{item.name}
																</a>
															)}
														</MenuItem>
													))}
												</MenuItems>
											</Menu>
										</div>
									</div>
									<div className="-mr-2 flex md:hidden">
										{/* Mobile menu button */}
										<DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-primary-800 p-2 text-gray-400 hover:bg-primary-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-0.5" />
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
											) : (
												<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
											)}
										</DisclosureButton>
									</div>
								</div>
							</div>

							<DisclosurePanel className="md:hidden">
								<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
									{navigation.map((item) => (
										<DisclosureButton
											key={item.name}
											as="a"
											href={item.href}
											className={classNames(
												item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'block rounded-md px-3 py-2 text-base font-medium',
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</DisclosureButton>
									))}
								</div>
								<div className="border-t border-gray-700 pb-3 pt-4">
									<div className="flex items-center px-5">
										<div className="flex-shrink-0">
											<img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
										</div>
										<div className="ml-3">
											<div className="text-base font-medium leading-none text-white">{user.name}</div>
											<div className="text-sm font-medium leading-none text-white">{user.email}</div>
										</div>
										<button
											type="button"
											className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
										>
											<span className="absolute -inset-1.5" />
											<span className="sr-only">View notifications</span>
											<BellIcon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>
									<div className="mt-3 space-y-1 px-2">
										{userNavigation.map((item) => (
											<DisclosureButton
												key={item.name}
												as="a"
												href={item.href}
												className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
											>
												{item.name}
											</DisclosureButton>
										))}
									</div>
								</div>
							</DisclosurePanel>
						</>
					)}
				</Disclosure>
			</header>
		</>
	);
}

export default Header;
