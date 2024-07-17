import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { deleteProduct } from "@/lib/products";

interface ProductProps {
    id: string;
    name: string;
    description: string;
    onDelete: () => void;
}

const Product: React.FC<ProductProps> = ({ id, name, description, onDelete }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true)
        try {
            await deleteProduct(id)
            onDelete(); // Trigger the callback to rerender products
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
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:cursor-pointer transition-shadow duration-300 ease-in-out">
            
            <Link href={`/products/${id}`}>
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
                <div className="mt-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {name}
                    </h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                </div>
            </Link>

            <div className="flex justify-between items-center">
                <Link href={`/products/${id}/edit`} className="text-blue-500 hover:text-blue-700 font-bold rounded-md transition duration-300 ease-in-out">
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

        </div>
    );
};

export default Product;
