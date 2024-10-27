import React from "react";

// تعريف نوع props
interface LoadingSkeletonProps {
  img?: boolean; // اختياري
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ img = false }) => {
  return (
    <div className="loading-skeleton">
      {img ? (
        <div
          className="card-title"
          style={{ height: "200px", width: "200px" }}
        ></div>
      ) : (
        <h5 className="card-title">Card title</h5>
      )}
    </div>
  );
};

export default LoadingSkeleton;
