import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: number;
  name: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({ id, name, description }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out">
      <Image
        className="w-full h-48 object-cover rounded-t-lg"
        src="/img/150.png"
        width={500}
        height={500}
        alt={`${name}`}
      />
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {name} {id}
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="flex justify-between items-center">
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
  );
};

export default Product;
