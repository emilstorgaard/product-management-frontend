import Link from "next/link";

interface PageProps {
    currentPage: string;
    totalPages: string;
    totalProducts: string;
}

const Pagination: React.FC<PageProps> = ({ currentPage, totalPages, totalProducts }) => {
    const currentPageNumber = Number(currentPage);
    const totalPagesNumber = Number(totalPages)

    return (
        <div className="flex flex-col items-center">
            <span className="text-sm text-neutral-700">
                Page <span className="font-semibold text-neutral-900">{currentPage}</span> of <span className="font-semibold text-neutral-900">{totalPages}</span>
            </span>
            <span className="text-sm text-neutral-700">
                Total Products <span className="font-semibold text-neutral-900">{totalProducts}</span>
            </span>
            <div className="inline-flex mt-2 xs:mt-0">

            {currentPageNumber > 1 ? (
                <Link href={`/products?page=${currentPageNumber-1}`} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-neutral-300 rounded-s hover:bg-neutral-400">
                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
                    Prev
                </Link>
            ) : (
                <span className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-neutral-300 rounded-s opacity-50">
                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
                    Prev
                </span>
            )}

            {currentPageNumber < totalPagesNumber ? (
                <Link href={`/products?page=${currentPageNumber+1}`} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-neutral-300 border-0 border-s border-neutral-200 rounded-e hover:bg-neutral-400">
                    Next
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            ) : (
                <span className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-neutral-300 border-0 border-s border-neutral-200 rounded-e opacity-50">
                    Next
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </span>
            )}

            </div>
        </div>
    );
  }

export default Pagination;