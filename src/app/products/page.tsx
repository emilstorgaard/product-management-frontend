import { Products } from "@/components/Products";
import { Pagination } from "@/components/Pagination";

export default function Product() {
    return (
      <div className="container mx-auto">
        <Products />
        <Pagination />
      </div>
    );
  }