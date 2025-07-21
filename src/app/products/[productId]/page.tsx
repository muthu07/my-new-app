import React from 'react';

const ProductDetail = async({ params }: { params: Promise<{ productId: string }> }) => {
    const productId = (await params).productId;
    return (
        <div>
            Hello Detail {productId}
        </div>
    );
};

export default ProductDetail;