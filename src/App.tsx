import React from 'react'
import './styles/App.css'
import TImage from './assets/images/image.jpg'
import Product from './components/product'

function App() {
  return (
    <div className="App">
      <div className="main db-flex">
        <div className="sideBarNav">
          {/* <div>{"|->"}</div> */}
          <ul className="listItems">
            <div>
              <a href="">{'|->'}</a>
            </div>

            <li className="active">
              <a href="">{'1'}</a>
            </li>
            <li>
              <a href="">{'2'}</a>
            </li>
            <li>
              <a href="">{'3'}</a>
            </li>
            <li>
              <a href="">{'4'}</a>
            </li>
            <li>
              <a href="">{'5'}</a>
            </li>
            <li>
              <a href="">{'6'}</a>
            </li>
            <li>
              <a href="">{'6'}</a>
            </li>
            <li>
              <a href="">{'7'}</a>
            </li>
          </ul>
        </div>
        <div className="mainContent">
          <header>
            <h2 style={{ marginBottom: 5 }}>Checkout</h2>
            <span style={{ color: '#929292', marginTop: 20 }}>
              Tuesday, 2 Feb 2021
            </span>
          </header>

          <div className="productPagination">
            <span className="active">Hot Dishes</span>
            <span>Cold Dishes</span>
            <span>Soup</span>
            <span>Grill</span>
            <span>Appetizer</span>
            <span>Dessert</span>
          </div>
          <div className="productSection">
            <Product
              src={TImage}
              title="Hot spicy fried rice with omelet"
              price="3.49"
            />
            <Product
              src={TImage}
              title="Hot spicy fried rice with omelet"
              price="3.49"
            />
            <Product
              src={TImage}
              title="Hot spicy fried rice with omelet"
              price="3.49"
            />
            <Product
              src={TImage}
              title="Hot spicy fried rice with omelet"
              price="3.49"
            />
          </div>
        </div>
        <div className="cart">
          <header className="cartHead db-flex">
            <h2 style={{ fontSize: 24 }}>Panier</h2>
            <span>+ Ajouter un panier</span>
          </header>
        </div>
      </div>
    </div>
  )
}

export default App
