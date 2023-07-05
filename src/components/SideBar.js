import React from "react";
import { CategoryBlock } from "./CategoryBlock";


function SideBar(props) {
  return (
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-4/12 px-2">
      <CategoryBlock {...props} />
    </div>
  );
}

export { SideBar };
