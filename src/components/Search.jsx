import React, { useEffect, useState } from "react";
import { Links } from "./Links";
import { useDebounce } from "use-debounce";
import { useContextResult } from "../contexts/ResultContextProvider";

export const Search = () => {
  const { setSearchTerm } = useContextResult();
  const [text, setText] = useState("Sajal Tiwari Anonymous7code");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className=" sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== "" && (
        <button
          type="button"
          className="absolute top-2.5 right-4  "
          onClick={() => setText("")}
        >
          ❌
        </button>
      )}
      <Links />
    </div>
  );
};
