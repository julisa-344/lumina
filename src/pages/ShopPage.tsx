import * as React from 'react';
import "../theme.css";
import Card from "../components/CardComponent";
import { Checkbox } from '@headlessui/react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useEffect, useState } from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    img: string;
    category: string;
    description: string;
}

function ShopPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("productsdata.json");
            const products = await data.json();
            setProducts(products);
        };
        fetchData();
    }, []);

    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategories.length === 0 ||
                selectedCategories.includes(product.category))
    );

    const handleCategoryChange = (category: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedCategories((prev) => [...prev, category]);
        } else {
            setSelectedCategories((prev) => prev.filter((c) => c !== category));
        }
    };
	const [enabled, setEnabled] = useState(false)

    const categories = products
        .map((product) => product.category)
        .filter((value, index, self) => self.indexOf(value) === index);

    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    };

    return (
        <>
            <main className="bg-color">
                <section className="p-4">
                    <section className="gallery-content">
                        <aside>
                            <h2 className="title">Filtros</h2>
                            <p className="sub-title">Por categoría</p>
                            <div className="content-category">
                                {/* Search for category */}
                                {categories.map((category) => (
                                    <Checkbox
                                        key={category}
                                        checked={selectedCategories.includes(category)}
										onChange={setEnabled}
                                        className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
                                    >
                                        {category}
                                        <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
                                            <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Checkbox>
                                ))}
                            </div>
                        </aside>
                        <section className="content-products">
                            <div className="flex justify-between align-center mb-4">
                                <div className="input-search">
                                    <input
                                        className="input-transparent"
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <Menu>
                                    <MenuButton>My account</MenuButton>
                                    <MenuItems anchor="bottom">
                                        <MenuItem>
                                            <a className="block data-[focus]:bg-blue-100" href="/settings">
                                                Settings
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a className="block data-[focus]:bg-blue-100" href="/support">
                                                Support
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a className="block data-[focus]:bg-blue-100" href="/license">
                                                License
                                            </a>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>
                            <div className="content-card">
                                {filteredProducts.map((product: Product) => (
                                    <Card
                                        key={product.id}
                                        name={product.name}
                                        price={product.price}
                                        img={product.img}
                                        description={product.description}
                                    />
                                ))}
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </>
    );
}

export default ShopPage;
