function TraitsTag({ trait }: { trait: Trait }) {
  return (
    <div
      className="bg-[#3c3333] rounded-lg text-white px-2 py-0.5 text-[15px] flex flex-col items-center justify-center font-thin"
      key={trait.id}
    >
      {trait.name}
    </div>
  );
}

export default TraitsTag;
