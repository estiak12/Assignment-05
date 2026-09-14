import { useEffect, useState } from "react";
import type { DataType } from "../type";
import Technology from "./technology";
import Selected from "./selected";

const Technologies = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);

  const fetchData = async (): Promise<DataType[]> => {
    const res = await fetch("/package.json");
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="w-[90%] md:max-w-[80%] mx-auto mt-10 pb-20">
      <h2 className="font-bold text-3xl sm:text-4xl mb-1">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <p className="text-[#64748B] mb-6 text-sm sm:text-base">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((technology) => (
            <Technology
              key={technology.id}
              technology={technology}
              setSelected={setSelected}
            />
          ))}
        </div>

        <div className="lg:col-span-3">
          <Selected selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
