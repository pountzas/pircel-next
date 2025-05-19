"use client";
import { cssColorNames } from "@/lib/cssColorNames";

function GradientBar({ colors }: { colors: string }) {
  const color1 = colors?.split(" and ")[0].toLowerCase();
  const color2 = colors?.split(" and ")[1].toLowerCase();

  const fromColor = cssColorNames.find((color) => color.colorName === color1);
  const toColor = cssColorNames.find((color) => color.colorName === color2);

  return (
    <div
      style={{
        background: `linear-gradient(to right, ${fromColor?.hex}, ${toColor?.hex})`
      }}
      className={`from-white to-black bg-gradient-to-r w-full h-[24px] rounded-md`}
    ></div>
  );
}

export default GradientBar;
