import {
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { DataType } from "../type";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

interface TechnologiesProp {
  technology: DataType;
  setSelected: Dispatch<SetStateAction<DataType[]>>;
}

const Technology = ({
  technology,
  setSelected,
}: TechnologiesProp) => {
  const [isAdded, setAdded] = useState(false);

  const againClick = () => {
    toast.warn(`${technology.name} is already selected`);
  };

  const handleClick = () => {
    setSelected((prev) => [...prev, technology]);

    setAdded(true);

    toast.success(`${technology.name} is Added Successfully`);
  };

  return (
    <div
      className={`rounded-lg border-2 ${
        isAdded ? "border-green-500" : "border-none"
      } bg-white p-4 sm:p-5 md:p-6 shadow-sm`}
    >
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain sm:h-12 sm:w-12"
        />

        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs text-blue-500 sm:px-4 sm:py-2 sm:text-sm">
          {technology.badge}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold text-gray-900 sm:mt-7 sm:text-2xl">
        {technology.name}
      </h2>

      <p className="mt-2 min-h-0 text-sm leading-6 text-gray-500 sm:mt-3 sm:min-h-[84px] sm:text-[15px]">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-300 pt-4">
        <span className="rounded-md bg-gray-100 px-3 py-1.5 text-xs text-gray-600 sm:py-2 sm:text-sm">
          {technology.category}
        </span>

        <span className="text-xs text-gray-600 sm:text-sm">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1 text-xs text-gray-700 sm:text-sm">
          <FaStar className="text-yellow-400" />
          <span>{technology.rating}</span>
        </div>
      </div>

      {isAdded ? (
  <button
    className="mt-4 sm:mt-5 w-full rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-semibold text-gray-400 cursor-not-allowed transition hover:bg-gray-100 sm:py-3 sm:text-base"
    onClick={againClick}
  >
    Added to Stack
  </button>
) : (
  <button
    className="mt-4 sm:mt-5 w-full rounded-lg bg-[#0A0F1D] py-2.5 text-sm text-white transition hover:bg-slate-800 sm:py-3 sm:text-base"
    onClick={handleClick}
  >
    Add to Stack
  </button>
)}
    </div>
  );
};

export default Technology;