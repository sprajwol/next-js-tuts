export default async function ProductReviews({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId;

    return (
        <>
            <h1>Products Reviews List for Product {productId}</h1>
            <h2>Product Review 1</h2>
            <h2>Product Review 2</h2>
            <h2>Product Review 3</h2>
        </>
    );
}
