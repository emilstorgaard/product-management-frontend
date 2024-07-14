import Link from "next/link";

export default function Product({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Product {params.id}
        </h1>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 fon">Name</label>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
            >Iphone</label>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">Description</label>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
            >This is a good product</label>
        </div>
        <div className="flex justify-between items-center">
        <Link href={`/products/${params.id}/edit`} className="text-blue-500 hover:text-blue-700 font-bold rounded-md transition duration-300 ease-in-out">
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
    </div>
  </div>
  )
}