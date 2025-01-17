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
            onDelete();
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
        <li className="p-4 rounded hover:bg-gray-100 hover:cursor-pointer transition-shadow duration-300 ease-in-out">
            
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Link href={`/products/${id}`} className="flex-shrink-0">
                        <div >
                            <Image
                                className="w-16 h-16 rounded"
                                src="/img/product.png"
                                width={500}
                                height={500}
                                alt={`${name}`}
                            />
                        </div>
                    </Link>

                    <Link href={`/products/${id}`} className="flex-1 min-w-0">
                        <div >
                            <p className="text-lg font-medium text-gray-900 truncate">
                                {name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                                {description}
                            </p>
                        </div>
                    </Link>
                    <div className="inline-flex items-center space-x-6">
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
        </li>
    );
};

export default Product;
