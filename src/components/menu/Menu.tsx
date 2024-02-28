import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <div className="item">
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => {
              return (
                <Link key={listItem.id} to={listItem.url} className="listItem">
                  <img src={listItem.icon} alt="" />
                  <span className="listItemTitle">{listItem.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
