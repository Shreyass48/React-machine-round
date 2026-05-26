"use client";
import { useState } from "react";

function Accordian({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h2 className="text-2xl">Accordion Example</h2>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md overflow-hidden"
          >
            <button
              className="w-full text-left p-4 text-lg font-semibold bg-white hover:bg-gray-50 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{item.title}</span>
              <span className="text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-300">
                <p className="text-gray-700">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordian;
