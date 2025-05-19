import { useEffect, useState } from "react";
import TraitsTag from "./TraitsTag";

function TraitsList({ traits }: { traits: Trait[] }) {
  const [filteredTraits, setFilteredTraits] = useState<Trait[]>([]);
  const [searchTraitsValue, setSearchTraitsValue] = useState<string>("");

  useEffect(() => {
    if (searchTraitsValue === "") {
      setFilteredTraits(traits);
    } else {
      const filtered = traits.filter((trait) =>
        trait.name.toLowerCase().includes(searchTraitsValue.toLowerCase())
      );
      setFilteredTraits(filtered);
    }
  }, [searchTraitsValue, traits]);

  return (
    <div className="flex flex-col pt-2">
      <input
        type="search"
        value={searchTraitsValue}
        onChange={(e) => setSearchTraitsValue(e.target.value)}
        placeholder={"Search House's Traits "}
        className={`h-[40px] w-[300px] border border-gray-300 ring-border-blue-400 rounded-xl  focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-600 text-md px-4 py-2 transition duration-200 ease-in-out`}
      />
      <div className="flex flex-wrap items-start space-x-2.5 space-y-2.5 pt-2">
        {searchTraitsValue === ""
          ? traits.map((trait) => <TraitsTag key={trait.id} trait={trait} />)
          : filteredTraits.map((trait) => (
              <TraitsTag key={trait.id} trait={trait} />
            ))}
      </div>
    </div>
  );
}

export default TraitsList;
