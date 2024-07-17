"use client";

import { useState } from "react";
import { postProduct } from "@/lib/products";

export default function CreateProduct() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState<string | null>(null);

	const createProduct = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
	
		try {
			postProduct(name, description)
		} catch (err: any) {
		  setError(err.message);
		}
	  };

    return (
      
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
	        <div className="w-full bg-white border border-gray-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
		        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                    {error && <div className="text-red-500 mt-2">{error}</div>}
            
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Create Product
                    </h1>

                    <form className="space-y-4 md:space-y-6" onSubmit={createProduct}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                placeholder="Iphone"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <textarea
                                placeholder="This is a good product"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out bg-green-500 text-white hover:bg-green-600">Create Product</button>
                    </form>
                    
		        </div>
	        </div>
        </div>
    );
}