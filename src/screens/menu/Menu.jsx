import React from 'react'
import ThrowMenus from '../../components/throwMenus/ThrowMenus'
import menuImg from "../../assets/delas-bg.png"
import Navbar from '../navbar/Navbar'

const Menu = () => {
  return (
    <div>
           <div className="menu">

             <Navbar/> 
             {/* <div className="textLeft">
              <h1>Welcome to Our Resturant</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iure atque nostrum dolores numquam magni, debitis esse, maxime sequi temporibus modi suscipit ratione eligendi beatae incidunt aspernatur. Ipsum itaque commodi adipisci nostrum. Quibusdam libero quis beatae voluptas nisi atque sapiente magnam corporis obcaecati non aut deleniti debitis, ipsam qui adipisci quidem commodi, a consectetur temporibus nam dolores fuga! Magni, illum. Magnam a alias error impedit explicabo eius dolor esse, aspernatur assumenda placeat inventore iste provident nulla temporibus magni est quo quod veniam laborum nobis iure! Consequuntur eum quas laboriosam doloremque quo enim optio. Itaque accusantium saepe delectus consequatur facere omnis.</p>
             </div> */}
             <div className="leftCC">
              <h1>Welcome to Our Resturant</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, odit? Excepturi ducimus qui quasi quo aliquam natus dolor nemo et magni veritatis cumque eius, sed, fugiat suscipit architecto saepe atque aspernatur, nihil corporis! Facilis dicta quo placeat enim accusantium modi aut nobis nam tenetur unde, inventore aperiam ipsum sunt culpa.</p>
              <div className="foodBtns">
                <button id='foodOneBtn'>Explore Food</button>
                <button id='foodTwoBtn'>Main Menu</button>
              </div>
             </div>
            <div className="imageC">
            <img src={menuImg} alt="" />
            </div>
           </div>
          <div className="spDeals">
          <h1>SPECIAL DELAS</h1>
          </div>
    <div className="firstFlex">
    <ThrowMenus/>
      <ThrowMenus/>
      <ThrowMenus/>
    </div>
    <div className="secondFlex">
      <ThrowMenus/>
      <ThrowMenus/>
      <ThrowMenus/>
    </div>
    </div>
  )
}

export default Menu
