"use client"

import React, { useState, useEffect } from "react";
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

    return (
        <div className="container mx-auto px-4 pb-8">
            <div className="flex justify-end mb-4">
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