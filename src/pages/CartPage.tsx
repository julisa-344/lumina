import './../theme.css';
import { useContext, useState } from 'react';
import Card from '../components/CardComponent';
import { Dialog, Transition } from '@headlessui/react';
import { CartContext, CartContetType } from '../CartContext';

function CartPage() {
    const { cart } = useContext<CartContetType>(CartContext);
    const [counts, setCounts] = useState<{ [key: number]: number }>({});
    const [isOpen, setIsOpen] = useState(false);
    const [coupon, setCoupon] = useState('');

    const increment = (index: number) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [index]: (prevCounts[index] || 1) + 1
        }));
    };

    const decrement = (index: number) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [index]: prevCounts[index] > 1 ? prevCounts[index] - 1 : 1
        }));
    };

    const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoupon(e.target.value);
    };

    const handleInsertCoupon = () => {
        // Lógica para insertar cupón
    };

    return (
        <>
            <main className="bg-gray-100 mt-4 p-4">
                <h2 className="text-center text-2xl font-bold mb-4">Carrito</h2>
                {cart.map((product, index) => (
                    <div className="flex items-center justify-between bg-white p-4 mb-4 shadow-sm rounded-lg" key={index}>
                        <img src={product.img} alt={product.name} className="w-16 h-16 object-cover" />
                        <p className="flex-1 ml-4">{product.name}</p>
                        <p>S/. {product.price * (counts[index] || 1)}</p>
                        <div className="flex items-center">
                            <button onClick={() => decrement(index)} className="bg-gray-200 px-2 py-1 rounded">-</button>
                            <span className="mx-2">{counts[index] || 1}</span>
                            <button onClick={() => increment(index)} className="bg-gray-200 px-2 py-1 rounded">+</button>
                        </div>
                    </div>
                ))}
                <div className="bg-white p-4 shadow-sm rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Adicionar Cupon</h2>
                    <div className="flex items-center justify-between mb-4">
                        <input 
                            type="text" 
                            value={coupon} 
                            onChange={handleCouponChange} 
                            className="border border-gray-300 p-2 rounded flex-1 mr-2"
                            placeholder="Cupon"
                        />
                        <button onClick={handleInsertCoupon} className="bg-blue-500 text-white px-4 py-2 rounded">Insertar</button>
                    </div>
                    <p className="text-lg font-semibold">Total: S/. {cart.reduce((total, product, index) => total + product.price * (counts[index] || 1), 0)}</p>
                    <button onClick={() => setIsOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Finalizar compra</button>
                </div>
                <section>
                    <h2 className="text-center text-2xl font-bold mt-8 mb-4">Productos que te pueden interesar</h2>
                    <div className="flex justify-around">
                        <Card name='Product' price={10} img="../assets/RM1.png" />
                        <Card name='Product' price={10} img="../assets/RM2.png" />
                        <Card name='Product' price={10} img="../assets/RM3.png" />
                    </div>
                </section>
            </main>
            <Transition appear show={isOpen} as="div">
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setIsOpen(false)} open={isOpen}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as="div"
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                        </Transition.Child>
                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                        <Transition.Child
                            as="div"
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Finalizar compra
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Aquí puedes colocar cualquier mensaje o formulario adicional necesario para finalizar la compra.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default CartPage;
