"use client";

import React, { useState, useEffect } from "react";
import { getProduct, putProduct } from "@/lib/products";
import { Spinner } from "@/components/Spinner";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function EditProduct({ params }: { params: { id: string } }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter()

    useEffect(() => {
        async function fetchProduct() {
            try {
                const initialProduct = await getProduct(params.id);
                setName(initialProduct.name);
                setDescription(initialProduct.description);
            } catch (err) {
                setError("Failed to fetch product");
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [params.id]);

    const editProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            putProduct(params.id, name, description)
            router.push(`/products/${params.id}`)
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
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
                                Edit Product
                            </h1>

                            <label>{params.id}</label>

                            <div className='flex justify-center items-center'>
                                <div className="relative w-48 h-48">
                                    <Image
                                        className="object-cover rounded-t-lg"
                                        src="/img/product.png"
                                        layout="fill"
                                        alt={name}
                                    />
                                </div>
                            </div>

                            <form className="space-y-4 md:space-y-6" onSubmit={editProduct}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <button type="submit" className="w-full px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-600">
                                    Edit Product
                                </button>
                            </form>
                        </>
                    )}
                    
                </div>
            </div>
        </div>
  );
}
