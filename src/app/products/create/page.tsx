export default function CreateProduct() {
    return (
      
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
	<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
		<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
				Create Product
			</h1>
			<form className="space-y-4 md:space-y-6" action="?/login" method="POST">
				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
						placeholder="Iphone"
						required
					/>
				</div>
				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
					<input
						type="text"
						name="description"
						id="description"
						placeholder="This is a good product"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
						required
					/>
				</div>
				<button type="submit" className="w-full px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out bg-green-500 text-white hover:bg-green-600">Create Product</button>
			</form>
		</div>
	</div>
</div>
    );
}