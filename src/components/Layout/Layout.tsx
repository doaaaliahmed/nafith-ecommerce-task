import { FC, ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/hooks";

type IProps = {
  children: ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  const currentLang = useAppSelector((state) => state.language.language);
  const dir = useAppSelector((state) => state.language.dir);
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  useEffect(() => {
    changeLanguage(currentLang);
    document.body.dir = dir;
  }, [currentLang, language, changeLanguage, dir]);

  return (
    <div className= ''>
      <Navbar />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
