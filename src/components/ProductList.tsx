import Product from "@/components/Product";

export function ProductList() {
    return (
<div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">Product List</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Product id={1} name="Product" description="This is a great product." />
        <Product id={2} name="Product" description="This is a great product." />
        <Product id={3} name="Product" description="This is a great product." />
        <Product id={4} name="Product" description="This is a great product." />
        <Product id={5} name="Product" description="This is a great product." />
        <Product id={6} name="Product" description="This is a great product." />
        <Product id={7} name="Product" description="This is a great product." />
        <Product id={8} name="Product" description="This is a great product." />
        <Product id={9} name="Product" description="This is a great product." />
        <Product id={10} name="Product" description="This is a great product." />
    </div>
</div>

    );
  }