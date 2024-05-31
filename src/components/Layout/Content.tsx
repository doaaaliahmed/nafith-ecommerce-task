import { FC, ReactNode } from "react";

type IProps = {
  children: ReactNode;
  additionalClass?: string;
};

const Content: FC<IProps> = ({ children, additionalClass = '' }) => {
  return (
    <div className={`${additionalClass} h-full w-full  bg-gray-100`}>
      {children}
    </div>
  );
};

export default Content;
