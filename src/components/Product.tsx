import Image from "next/image";

interface ProductProps {
    id: number;
    name: string;
    description: string;
  }
  
  const Product: React.FC<ProductProps> = ({ id, name, description }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <Image className="w-full h-48 object-cover rounded-t-lg" src="/img/150.png" width={500} height={500} alt="" />
            <div className="mt-4">
                <h2 className="text-xl font-semibold">{name} {id}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
  }
  
  export default Product;