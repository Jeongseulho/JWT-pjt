import mainImg from "../assets/img/mainImg.png";
import { LayoutChildrenProps } from "../types/LayoutChildrenProps";

const HomeLayout = ({ children }: LayoutChildrenProps) => {
  return (
    <div className="w-screen h-screen bg-cover" style={{ backgroundImage: `url(${mainImg})` }}>
      {children}
    </div>
  );
};

export default HomeLayout;
