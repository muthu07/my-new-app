import React from "react";

const ReviewPage = async({params}: {params: Promise<{productId: string; reviewId: string }>}) => {
    const { productId, reviewId } = await params;
    return (
        <div>
            <h1>Review Details</h1>
            <p>
                <strong>Product ID:</strong> {productId}
            </p>
            <p>
                <strong>Review ID:</strong> {reviewId}
            </p>
        </div>
    );
};

export default ReviewPage;