
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
          className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-blue-500">
          {technology.badge}
        </span>
      </div>
      <h2 className="mt-5 sm:mt-7 text-xl sm:text-2xl font-bold text-gray-900">
        {technology.name}
      </h2>

      <p className="mt-2 sm:mt-3 min-h-0 sm:min-h-[84px] text-sm sm:text-[15px] leading-6 text-gray-500">
        {technology.description}
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-300 pt-4">

        <span className="rounded-md bg-gray-100 px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs sm:text-sm text-gray-600">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-700">
          <FaStar className="text-yellow-400" />
          <span>{technology.rating}</span>
        </div>

      </div>


      {isAdded ? (
        <button
          className="mt-4 sm:mt-5 w-full rounded-lg bg-[#0A0F1D] py-2.5 sm:py-3 text-sm sm:text-base text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          disabled
        >
          Added to Stack
        </button>
      ) : (
        <button
          className="mt-4 sm:mt-5 w-full rounded-lg bg-[#0A0F1D] py-2.5 sm:py-3 text-sm sm:text-base text-white transition hover:bg-slate-800"
          onClick={handleClick}
        >
          Add to Stack
        </button>
      )}

    </div>
  );
};

export default Technology;

