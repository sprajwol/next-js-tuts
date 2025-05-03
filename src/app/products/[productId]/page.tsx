export default async function ProductDetails ({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId;
    console.log("productId", productId)
    return <h1>Product Details { productId }</h1>;
}
