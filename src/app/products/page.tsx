"use client";

import Products from "@/components/Products";
import Pagination from "@/components/Pagination";
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect, Suspense } from "react";
import { getProducts } from "@/lib/products";
import { Spinner } from "@/components/Spinner";

type Product = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
};

function Product() {
    const searchParams = useSearchParams()
    const page = searchParams.get('page');
    const sort = searchParams.get('sort');

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState("");
    const [totalPages, setTotalPages] = useState("");
    const [totalProducts, setTotalProducts] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const initialProducts = await getProducts(page || "1", sort || "");
                setProducts(initialProducts.products);
                setCurrentPage(initialProducts.currentPage);
                setTotalPages(initialProducts.totalPages);
                setTotalProducts(initialProducts.totalProducts);
            } catch (err) {
                setError("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [page, sort]);

    const reloadProducts = () => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const initialProducts = await getProducts(page || "1", sort || "");
                setProducts(initialProducts.products);
                setCurrentPage(initialProducts.currentPage);
                setTotalPages(initialProducts.totalPages);
                setTotalProducts(initialProducts.totalProducts);
            } catch (err) {
                setError("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    };

    return (
        <div className="container mx-auto">

            {loading && (
                <div className="flex justify-center">
                    <Spinner />
                </div>
            )}

            {error && 
                <div className="flex justify-center">
                    <div className="text-red-500 mt-2">{error}</div>
                </div>
            }

            {!loading && !error && (
                <>
                    <Products products={products} page={page} sort={sort} onDelete={reloadProducts} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} totalProducts={totalProducts} sort={sort} />
                </>
            )}
        </div>
    );
}

export default function ProductPage() {
    return (
        <Suspense fallback={<Spinner />}>
            <Product />
        </Suspense>
    )
}