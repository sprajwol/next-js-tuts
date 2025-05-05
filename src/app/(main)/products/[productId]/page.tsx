import { Metadata } from 'next';

type Props = {
    params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${id}`);
        }, 100);
    });

    return {
        title: `Product ${title}`,
    };
};

export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId;
    console.log('productId', productId);
    return <h1>Product Details {productId}</h1>;
}
