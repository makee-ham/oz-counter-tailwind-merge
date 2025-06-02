import { useState } from "react";
import { twMerge } from "tailwind-merge";

// 참고: https://github.com/dcastil/tailwind-merge/blob/v3.3.0/docs/when-and-how-to-use-it.md#how-to-use-it
const COUNTER_BUTTON_BASE_STYLE =
  "px-3 py-1 rounded text-white transition cursor-pointer text-sm";
const BUTTON_VARIANTS = {
  add: "bg-green-500 hover:bg-green-600",
  subtract: "bg-red-500 hover:bg-red-600",
};

export default function Counter() {
  const [countNum, setCountNum] = useState(0);

  return (
    <section className="flex flex-col items-center gap-6 p-6">
      <div
        id="num-display"
        className={twMerge(
          "text-4xl font-bold text-stone-800 transition-colors",
          countNum >= 5 && "text-green-500",
          countNum >= 50 && "text-blue-500",
          countNum >= 500 && "text-purple-500",
          countNum <= -5 && "text-red-500",
          countNum <= -50 && "text-orange-500",
          countNum <= -500 && "text-yellow-500"
        )}
      >
        {countNum}
      </div>

      <div id="buttons" className="grid grid-cols-3 gap-4">
        <button
          className={twMerge(COUNTER_BUTTON_BASE_STYLE, BUTTON_VARIANTS.add)}
          onClick={() => setCountNum((prev) => prev + 1)}
        >
          +1
        </button>
        <button
          className={twMerge(COUNTER_BUTTON_BASE_STYLE, BUTTON_VARIANTS.add)}
          onClick={() => setCountNum((prev) => prev + 10)}
        >
          +10
        </button>
        <button
          className={twMerge(COUNTER_BUTTON_BASE_STYLE, BUTTON_VARIANTS.add)}
          onClick={() => setCountNum((prev) => prev + 100)}
        >
          +100
        </button>
        <button
          className={twMerge(
            COUNTER_BUTTON_BASE_STYLE,
            BUTTON_VARIANTS.subtract
          )}
          onClick={() => setCountNum((prev) => prev - 1)}
        >
          -1
        </button>
        <button
          className={twMerge(
            COUNTER_BUTTON_BASE_STYLE,
            BUTTON_VARIANTS.subtract
          )}
          onClick={() => setCountNum((prev) => prev - 10)}
        >
          -10
        </button>
        <button
          className={twMerge(
            COUNTER_BUTTON_BASE_STYLE,
            BUTTON_VARIANTS.subtract
          )}
          onClick={() => setCountNum((prev) => prev - 100)}
        >
          -100
        </button>
      </div>
    </section>
  );
}
