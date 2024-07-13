import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: number;
  name: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({ id, name, description }) => {
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0">
          <Image
            className="w-16 h-16 rounded"
            src="/img/150.png"
            width={500}
            height={500}
            alt={`${name}`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-lg font-medium text-gray-900 truncate">
            {name} {id}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {description}
          </p>
        </div>
        <div className="inline-flex items-center space-x-6">
          <Link
            href={`/posts/${id}/edit`}
            className="text-blue-500 hover:text-blue-700 font-bold rounded-md transition duration-300 ease-in-out"
          >
            Edit
          </Link>
          <button
            type="button"
            className="text-red-500 hover:text-red-700 font-bold rounded-md transition duration-300 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default Product;
