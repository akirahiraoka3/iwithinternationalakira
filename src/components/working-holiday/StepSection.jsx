import React from 'react';

const StepSection = ({ step }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6">{step.title}</h3>
      {step.content && Array.isArray(step.content) ? (
        step.content.map((item, itemIndex) => (
          <div key={itemIndex} className="flex items-start mb-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white text-2xl mr-4">
              {item.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>{step.content}</p>
      )}
    </div>
  );
};

export default StepSection;