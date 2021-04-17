import React from 'react';
import Carrinho from '../../assets/shopping-cart.svg';
import Logo from '../../assets/logo.svg';
import Entrar from '../../assets/entrar.svg';

import './Navbar.css';

export default function NavBar(props) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar--container mx-auto flex flex-row lg:justify-between justify-center items-center pt-4 pb-4 pr-10 pl-10 h-12 md:h-20">
          <img src={Logo} alt="" className="h-8 md:h-12" />
          <div className="hidden lg:flex flex-row flex-shrink-0 justify-end mt-6 mb-6">
            <select className="w-full rounded">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <form
              className=" flex flex-shrink-0 ml-6"
              action="#"
              style={{ width: '384px', height: '48px' }}
            >
              <input
                className="w-full p-4 rounded busca"
                type="text"
                placeholder="Busque por estabelecimento ou produto"
              />
              <input
                type="submit"
                style={{ width: 0, height: 0, visibility: 'hidden' }}
              />
            </form>
            <div className=" flex flex-row flex-shrink-0 items-center ml-6">
              <img src={Entrar} className="w-8 h-8 mr-2" />
              <span>Entrar</span>
            </div>
            <div className="flex flex-row flex-shrink-0 items-center ml-6">
              <img src={Carrinho} className="w-8 h-8 mr-2" />
              <span>Carrinho</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
