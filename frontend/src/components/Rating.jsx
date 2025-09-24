import React from "react";

export default function StarRating({ rating, onRatingChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "36px" }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => onRatingChange(value)} // ✅ updates parent state
          style={{
            fontSize: "2rem",
            cursor: "pointer",
            color: value <= rating ? "gold" : "lightgray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
