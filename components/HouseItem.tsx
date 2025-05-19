import GradientBar from "./GradientBar";
import TraitsList from "./TraitsList";

function HouseItem({ house }: { house: House }) {
  return (
    <div
      key={house.id}
      className="w-[530px] h-[300px] rounded-xl drop-shadow-sm shadow-lg bg-white border border-gray-200 shadow-black/15  px-6"
    >
      <div className="flex flex-col items-center w-full mt-6 space-y-4.5">
        <div className="flex items-end justify-between w-full text-3xl ">
          <div className="font-bold">{house.name}</div>
          <div className="text-xl">{house.animal}</div>
        </div>
        <GradientBar colors={house.houseColours} />
        <div className="flex items-baseline w-full gap-2 text-[19px]">
          Founder: <span className="font-bold">{house.founder}</span>
        </div>
      </div>

      <TraitsList traits={house.traits} />
    </div>
  );
}

export default HouseItem;
