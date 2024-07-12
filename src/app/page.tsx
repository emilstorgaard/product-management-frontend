import Link from "next/link";

export default function Home() {
  return (
    

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Product Management</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <div className="mt-8 flex justify-center pb-6">
      <Link href="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">View Products</Link>
      <Link href="/products/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Create Product</Link>
    </div>
</div>

  );
}