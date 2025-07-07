import React from "react";

const ProgressBar = ({ current, total }) => {
    const percent = Math.round((current / (total - 1)) * 100);

    return (
        <div className="w-full bg-gray-200 h-2 rounded-lg overflow-hidden mb-4">
            <div
                className="h-full bg-blue-500"
                style={{ width: `${percent}%` }}
            />
        </div>
    );
};

export default ProgressBar;
