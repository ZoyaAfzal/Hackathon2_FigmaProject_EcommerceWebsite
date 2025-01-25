// components/ReviewsAndRatings.tsx
import React, { useState, useEffect } from "react";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
};

const ReviewsAndRatings = () => {
  // State to store reviews
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, name: "Alice", rating: 5, comment: "Excellent product! Highly recommend." },
    { id: 2, name: "Bob", rating: 4, comment: "Good quality but a bit expensive." },
  ]);

  // State for new review submission
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  // Calculate average rating
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    setAverageRating(totalRating / reviews.length || 0);
  }, [reviews]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      const updatedReviews = [
        ...reviews,
        { id: reviews.length + 1, ...newReview, rating: Number(newReview.rating) },
      ];
      setReviews(updatedReviews);
      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Reviews and Ratings</h2>

      {/* Average Rating */}
      <div className="mb-6">
        <p className="text-lg font-semibold">
          Average Rating: {averageRating.toFixed(1)}{" "}
          <span className="text-yellow-400 text-xl">★</span>
        </p>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`text-xl ${
                i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">User Reviews</h3>
        {reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 bg-gray-50 rounded-lg shadow">
                <p className="font-semibold">{review.name}</p>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to write one!</p>
        )}
      </div>

      {/* Add Review */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Submit Your Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          >
            <option value="0">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          <textarea
            placeholder="Your Review"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-[#bdb8b8]"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
