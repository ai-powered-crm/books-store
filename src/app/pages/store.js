import React from "react";
import "./store.css";
import book1 from "./imgs/book1.jpg";
import book2 from "./imgs/book2.jpg";
import book3 from "./imgs/book3.jpg";
import book4 from "./imgs/book4.jpg";
import book5 from "./imgs/book5.jpg";
import book6 from "./imgs/book6.jpg";
function Store() {
  return (
    <>
      <h1 className="books">Books</h1>
      <div className="all-store">
        <div className="filter">
          <form method="get" action="">
            <table>
              <tbody>
                <tr>
                  <th>
                    <td>
                      <input type="text" placeholder="What's your book name?" />
                    </td>
                    <td>
                      <select>
                        <option>Select your category</option>
                      </select>
                    </td>
                  </th>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <div className="products">
      <div className="boxes">
          <div className="box">
            <img src={book1} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>
          <div className="box">
            <img src={book2} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>
          <div className="box">
            <img src={book3} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>
          <div className="box">
            <img src={book4} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>
          <div className="box">
            <img src={book5} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>
          <div className="box">
            <img src={book6} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>




          <div className="box">
            <img src={book1} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>
          <div className="box">
            <img src={book2} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>
          <div className="box">
            <img src={book3} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>
          <div className="box">
            <img src={book4} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>
          <div className="box">
            <img src={book5} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>
          <div className="box">
            <img src={book6} alt="Book" />
            <h2>THE LAST FOUR KINGS</h2>
            <h5>price : 55 DT</h5>
          </div>

         
        </div>



        
        
      </div>
    </>
  );
}
export default Store;
