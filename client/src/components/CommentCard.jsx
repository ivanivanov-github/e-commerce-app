import React from "react";

export default function CommentCard({ comment }) {
  return (
    <div className="etape-product">
      <h2>{comment.user}</h2>
      <p>{comment.comment}</p>
    </div>
  );
}
