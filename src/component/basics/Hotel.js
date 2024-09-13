import React,{useState} from 'react'
import Menu from './menuApi'
import MenuCard from './MenuCard';
import "./style.css";
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
  
const Hotel = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
          setMenuData(Menu);
          return;
        }
    
        const updatedList = Menu.filter((curElem) => {
          return curElem.category === category;
        });
    
        setMenuData(updatedList);
      };
    
  return (


    <div>

        <Navbar  filterItem={filterItem} menuList={menuList}></Navbar>
     <MenuCard menuData={menuData} />
    </div>
  )
}

export default Hotel
