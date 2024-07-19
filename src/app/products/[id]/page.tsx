"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getProduct } from "@/lib/products";
import { Spinner } from "@/components/Spinner";
import { getDateTime } from "@/lib/dateTime";
import { deleteProduct } from "@/lib/products";
import { useRouter } from 'next/navigation'

type Product = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
};

export default function Product({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter()

    useEffect(() => {
        async function fetchProduct() {
            try {
                const initialProduct = await getProduct(params.id);
                setProduct(initialProduct);
            } catch (err) {
                setError("Failed to fetch product");
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [params.id]);

    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true)
        try {
            await deleteProduct(params.id)
            router.push('/products?page=1')
        } catch (error) {
            console.error('Error deleting product:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    const confirmDelete = () => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            handleDelete();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                    {loading && (
                        <div className="flex justify-center">
                            <Spinner />
                        </div>
                    )}

                    {error && <div className="text-red-500 mt-2">{error}</div>}

                    {!loading && !error && (
                        <>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Product
                            </h1>

                            <label>{product?.id}</label>
                            
                            <div className='flex justify-center items-center'>
                                <div className="relative w-48 h-48">
                                    <Image
                                        className="object-cover rounded-t-lg"
                                        src="/img/product.png"
                                        layout="fill"
                                        alt={product?.name || "product"}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 fon">Name</label>
                                <label className="block mb-2 text-sm font-medium text-gray-900">{product?.name}</label>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900">Description</label>
                                <label className="block mb-2 text-sm font-medium text-gray-900">{product?.description}</label>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900">Created At</label>
                                <label className="block mb-2 text-sm font-medium text-gray-900">{getDateTime(product?.createdAt)}</label>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900">Updated At</label>
                                <label className="block mb-2 text-sm font-medium text-gray-900">{getDateTime(product?.updatedAt)}</label>
                            </div>
                            <div className="flex justify-between items-center">
                                <Link href={`/products/${params.id}/edit`} className="text-blue-500 hover:text-blue-700 font-bold rounded-md transition duration-300 ease-in-out">
                                    Edit
                                </Link>
                                {isDeleting ? (
                                    <p className="text-red-500 font-bold">Deleting...</p>
                                ) : (
                                    <button onClick={confirmDelete} className="text-red-500 hover:text-red-700 font-bold rounded-md transition duration-300 ease-in-out">
                                        Delete
                                    </button>
                                )}
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}