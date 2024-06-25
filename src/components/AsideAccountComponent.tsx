import { Link } from 'react-router-dom';

function AsideAccount() {

    return (
        <aside className="aside-account bg-color">
            <div className="mb-4 flex justify-center direccion-column">
                <img className='account-img' src='' alt="User" />
                <h4 className='text-center'>julisa</h4>
            </div>
            <Link className='sub-title-sideaccount' to='/account'>Cuenta</Link>
            <div className='flex direction-column'>
                <Link className='text-sideaccount' to='/miscompras'>Mis compras</Link>
                <Link className='text-sideaccount' to='#wishlist'>Lista de deseos</Link>
                <Link className='text-sideaccount' to='#logout' >Cerrar sesión</Link>
            </div>
        </aside>
    );
}

export default AsideAccount;