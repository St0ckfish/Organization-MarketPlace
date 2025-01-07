import type { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`ml-0 mx-[10px] md:ml-[130px] lg:ml-[170px] mt-5 transform transition duration-300 ease-in`}
    >
      {children}
    </div>
  );
};

export default Container;
