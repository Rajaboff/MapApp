import { FC, useState } from "react";

export const Loader: FC = () => {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 4000);

  return (
    <div data-testid="loader-block"
      className={
        (loader ? "visible opacity-100" : "invisible opacity-0") +
        " fixed transition-all top-0 left-0 w-full h-full z-[600] backdrop-blur-md"
      }
    >
      <div className="loader-bg w-full h-full bg-white opacity-60"></div>

      <div className="circler flex gap-2 items-center fixed top-1/2 left-1/2 scale-[1.7] -translate-x-1/2 -translate-y-1/2">
        <div className="circle w-5 h-5 rounded-full bg-green-500 animate-bounce"></div>
        <div className="circle w-5 h-5 rounded-full bg-green-500 animate-bounce"></div>
        <div className="circle w-5 h-5 rounded-full bg-green-500 animate-bounce"></div>
      </div>
    </div>
  );
};
