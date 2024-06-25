import React, { useState } from 'react';
import { Input } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import Button from "../components/Button";
import "../theme.css";
import AsideAccount from "../components/AsideAccountComponent";

function AccountPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const handleSaveChanges = async () => {
		console.log('Guardando cambios');
	};

	return (
		<>
			<main className="main flex">
				<AsideAccount />
				<section className="account-details">
					<div className="">
						<h2>Detalles</h2>
						<form
							className="space-y-4"
							noValidate
							autoComplete="off"
						>
							<Input
								id="name"
								name="name"
								type="text"
								placeholder="Nombre"
								className="border border-gray-300 rounded-md p-2"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<Input
								id="lastName"
								name="lastName"
								type="text"
								placeholder="Apellido"
								className="border border-gray-300 rounded-md p-2"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="Correo"
								className="border border-gray-300 rounded-md p-2"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</form>
					</div>
					<div className="flex direction-column ">
						<h2>Contraseña</h2>
						<div className="space-y-4">
							<Input
								id="oldPassword"
								name="oldPassword"
								type={showPassword ? 'text' : 'password'}
								placeholder="Contraseña antigua"
								className="border border-gray-300 rounded-md p-2"
								value={oldPassword}
								onChange={(e) => setOldPassword(e.target.value)}

							/>

							<Input
								id="newPassword"
								name="newPassword"
								type={showPassword ? 'text' : 'password'}
								placeholder="Contraseña nueva"
								className="border border-gray-300 rounded-md p-2"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
							/>

							<Input
								id="repeatPassword"
								name="repeatPassword"
								type={showPassword ? 'text' : 'password'}
								placeholder="Repetir contraseña"
								className="border border-gray-300 rounded-md p-2"
								value={repeatPassword}
								onChange={(e) => setRepeatPassword(e.target.value)}
							/>
						</div>
					</div>
					<Button text="Guardar Cambios" onClick={handleSaveChanges} className="m-t" />
				</section>
			</main>
		</>
	);
}

export default AccountPage;
