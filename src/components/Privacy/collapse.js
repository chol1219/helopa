import React from "react";

export default function MyCollapse({ title, description, id }) {
  return (
    <>
        <button type="button" class="hs-collapse-toggle bg-blue-700 mt-2 py-3 px-4 w-full h-16 inline-flex justify-between items-center gap-2 rounded-lg border border-transparent font-semibold text-slate-800 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm text-white" id={id} data-hs-collapse={"#" + id + "-heading"}>
            {title}
            <svg class="hs-collapse-open:rotate-180 w-2.5 h-2.5 text-slate-800 dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
        <div id={id + "-heading"} class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-collapse">
            <div class="bg-gray-200 rounded-lg py-3 px-4">
                <p class="text-blue-700">
                    {description}
                </p>
            </div>
        </div>
    </>
  );
}