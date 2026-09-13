import { useState, type Dispatch, type SetStateAction } from "react";
import type { DataType } from "../type";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

interface SelectedProp {
  selected: DataType[];
   setSelected: Dispatch<SetStateAction<DataType[]>>;
}

const Selected = ({ selected ,setSelected}: SelectedProp) => {

  const removeAll = () =>{
   setSelected([]);
   toast.info(`All card is removed Successfully`);
  }

  const removeOnlyOne = (item:number,itemName:string) => {
    const selectedCard = selected.filter((technology) =>{
      return technology.id!==item;
    })

    
    setSelected(selectedCard);
    toast.info(`${itemName} is removed Successfully`);
  }

  return (
    <>
      {selected.length === 0 ? (
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold text-[#0F172A]">
            Your Stack
          </h2>

          <p className="mt-2 text-[15px] text-[#94A3B8]">
            No technologies selected yet.
          </p>
          <div className="mt-5 flex h-20 items-center justify-center rounded-2xl border border-dashed border-slate-200">
            <p className="text-[15px] text-[#94A3B8]">
              Your stack is empty.
            </p>
          </div>

        </div>
      ) : (
        <div className="w-full rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-md">
          <h2 className="text-xl font-bold text-[#0F172A]">
            Your Stack
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {selected.length} Technology Selected
          </p>

          <div className="mt-4 mb-6">
            {selected.map((technology) => (
              <div
                key={technology.id}
                className="mb-3 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-3 shadow-sm"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-10 w-10 object-contain"
                />
                <div>
                  <p className="text-[16px] font-semibold text-gray-900">
                    {technology.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {technology.category}
                  </p>
                </div>
                <button
                  className="ml-auto text-gray-400 transition hover:text-red-500"
                  onClick={()=>removeOnlyOne(technology.id,technology.name)}
                >
                  <RxCross1 size={18} />
                </button>

              </div>
            ))}

          </div>

          <button className="w-full border rounded-xl border-[#DC392E] font-semibold text-[#DC392E] py-2 mt-7 mb-3" onClick={removeAll}>Romove All</button>
          
        </div>
      )}
    </>
  );
};

export default Selected;
