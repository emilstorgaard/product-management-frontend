"use client"

import React, { useState } from "react";
import ProductGridItem from "@/components/ProductGridItem";
import ProductListItem from "@/components/ProductListItem";
import Image from "next/image";

type Product = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
};

interface PageProps {
    products: Product[];
    onDelete: () => void;
}

const Products: React.FC<PageProps> = ({ products, onDelete }) => {
    const [isGridView, setIsGridView] = useState(true);

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Sort');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
      };
  
    return (
        <div className="container mx-auto px-4 pb-8">
            <div className="flex justify-between mb-4">

                <div className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <div className="relative inline-block text-left">

                    <div>
                        <button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded={isOpen} aria-haspopup="true" onClick={() => setIsOpen(!isOpen)}>
                            {selectedOption}
                            <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                            <div className="py-1" role="none">
                                <button onClick={() => handleOptionClick('A-Z')} className="block px-4 py-2 text-sm text-gray-500" role="menuitem">A-Z</button>
                                <button onClick={() => handleOptionClick('Z-A')} className="block px-4 py-2 text-sm text-gray-500" role="menuitem">Z-A</button>
                                <button onClick={() => handleOptionClick('Newest')} className="block px-4 py-2 text-sm text-gray-500" role="menuitem">Newest</button>
                                <button onClick={() => handleOptionClick('Oldest')} className="block px-4 py-2 text-sm text-gray-500" role="menuitem">Oldest</button>
                            </div>
                        </div>
                    )}
                    </div>
                </div>

                <button onClick={toggleView} className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    {isGridView ? (
                        <Image
                            src="/img/list.png"
                            alt="List View"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                    ) : (
                        <Image
                            src="/img/grid.png"
                            alt="Grid View"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                    )}

                    {isGridView ? "List View" : "Grid View"}
                </button>
            </div>

            {isGridView ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product: Product) => (
                        <ProductGridItem
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
                ) : (
                <ul className="mx-auto divide-y divide-gray-200">
                    {products.map((product: Product) => (
                        <ProductListItem
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Products;