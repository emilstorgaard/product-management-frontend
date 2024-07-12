import { ProductList } from "@/components/ProductList";
import { Pagination } from "@/components/Pagination";

export default function Product() {
    return (
      <div className="container mx-auto">
        <ProductList />
        <Pagination />
      </div>
    );
  }