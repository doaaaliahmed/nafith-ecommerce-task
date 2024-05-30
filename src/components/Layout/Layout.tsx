import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

type IProps = {
  children: ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
