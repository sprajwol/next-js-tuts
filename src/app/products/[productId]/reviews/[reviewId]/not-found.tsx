'use client';

import { usePathname } from 'next/navigation';

export default function ReviewNotFound() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];
    return (
        <>
            <h1>Review {reviewId} Not Found for product {productId}</h1>
            <p>Cannot find requested resource</p>
        </>
    );
}
