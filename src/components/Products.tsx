"use client"

import React, { useState } from "react";
import ProductGridItem from "@/components/ProductGridItem";
import ProductListItem from "@/components/ProductListItem";
import Image from "next/image";

export function Products() {
  const [isGridView, setIsGridView] = useState(true);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleView}
          className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          {isGridView ? (
            <Image
              src="/img/grid.png"
              alt="Grid View"
              width={24}
              height={24}
              className="mr-2"
            />
          ) : (
            <Image
              src="/img/list.png"
              alt="List View"
              width={24}
              height={24}
              className="mr-2"
            />
          )}
          {isGridView ? "Grid View" : "List View"}
        </button>
      </div>

      {isGridView ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductGridItem id={1} name="Product" description="This is a great product." />
          <ProductGridItem id={2} name="Product" description="This is a great product." />
          <ProductGridItem id={3} name="Product" description="This is a great product." />
          <ProductGridItem id={4} name="Product" description="This is a great product." />
          <ProductGridItem id={5} name="Product" description="This is a great product." />
          <ProductGridItem id={6} name="Product" description="This is a great product." />
          <ProductGridItem id={7} name="Product" description="This is a great product." />
          <ProductGridItem id={8} name="Product" description="This is a great product." />
          <ProductGridItem id={9} name="Product" description="This is a great product." />
          <ProductGridItem id={10} name="Product" description="This is a great product." />
        </div>
      ) : (
        <ul className="mx-auto divide-y divide-gray-200">
          <ProductListItem id={1} name="Product" description="This is a great product." />
          <ProductListItem id={2} name="Product" description="This is a great product." />
          <ProductListItem id={3} name="Product" description="This is a great product." />
          <ProductListItem id={4} name="Product" description="This is a great product." />
          <ProductListItem id={5} name="Product" description="This is a great product." />
          <ProductListItem id={6} name="Product" description="This is a great product." />
          <ProductListItem id={7} name="Product" description="This is a great product." />
          <ProductListItem id={8} name="Product" description="This is a great product." />
          <ProductListItem id={9} name="Product" description="This is a great product." />
          <ProductListItem id={10} name="Product" description="This is a great product." />
        </ul>
      )}
    </div>
  );
}