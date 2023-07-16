import RoleItem from "./RoleItem";
import { RoleItemsInfo } from "../../constants/RoleItemsInfo";

const RoleContent = () => {
  return (
    <div className={`flex flex-col gap-16`}>
      {RoleItemsInfo.map((roleItemInfo) => {
        return (
          <RoleItem
            key={roleItemInfo.name}
            name={roleItemInfo.name}
            desc={roleItemInfo.desc}
            imgPath={roleItemInfo.imgPath}
          />
        );
      })}
    </div>
  );
};
export default RoleContent;
