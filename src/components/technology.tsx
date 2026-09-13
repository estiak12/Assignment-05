import { useState, type Dispatch, type SetStateAction } from "react";
import type { DataType } from "../type";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

interface TechnologiesProp {
  technology: DataType;
  setSelected: Dispatch<SetStateAction<DataType[]>>;
}

const Technology = ({ technology, setSelected }: TechnologiesProp) => {
  const [isAdded, setAdded] = useState(false);

  const handleClick = () => {
    // Add this technology to the selected array
    setSelected((prev) => [...prev, technology]);

    // Disable the button
    setAdded(true);

    // Show toast
    toast.success(`${technology.name} is Added Successfully`);
  };

  return (
    <div
      className={`rounded-lg border-2 ${
        isAdded ? "border-green-500" : "border-none"
      } bg-white p-6 shadow-sm`}
    >
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-500">
          {technology.badge}
        </span>
      </div>

      <h2 className="mt-7 text-2xl font-bold text-gray-900">
        {technology.name}
      </h2>

      <p className="mt-3 min-h-[84px] text-[15px] leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-gray-300 pt-4">
        <span className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-600">
          {technology.category}
        </span>

        <span className="text-sm text-gray-600">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1 text-sm text-gray-700">
          <FaStar className="text-yellow-400" />
          <span>{technology.rating}</span>
        </div>
      </div>

      {isAdded ? (
        <button
          className="mt-5 w-full rounded-lg bg-[#0A0F1D] py-3 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isAdded}
        >
          Added to Stack
        </button>
      ) : (
        <button
          className="mt-5 w-full rounded-lg bg-[#0A0F1D] py-3 text-white transition hover:bg-slate-800"
          onClick={handleClick}
        >
          Add to Stack
        </button>
      )}
    </div>
  );
};

export default Technology;
