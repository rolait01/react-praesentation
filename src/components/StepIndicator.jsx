import React from "react";

const StepIndicator = ({ current, total }) => (
    <div className="flex space-x-2 mb-4">
        {Array.from({ length: total }).map((_, i) => (
            <div
                key={i}
                className={`w-3 h-3 rounded-full ${i <= current ? "bg-blue-500" : "bg-gray-300"}`}
            />
        ))}
    </div>
);

export default StepIndicator;
