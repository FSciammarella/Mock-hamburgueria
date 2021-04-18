import React from 'react';
import Carrinho from '../../assets/shopping-cart.svg';
import Logo from '../../assets/logo.svg';
import Entrar from '../../assets/entrar.svg';

import './Navbar.css';
import DeliveryAddress from '../DeliveryAddress/DeliveryAddress';

export default function NavBar(props) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar--container mx-auto flex flex-row lg:justify-between justify-center items-center pt-4 pb-4 pr-10 pl-10 h-12 md:h-20">
          <img src={Logo} alt="" className="h-8 md:h-12" />
          <div className="hidden lg:flex flex-grow ml-6 flex-row justify-end mt-6 mb-6">
            <DeliveryAddress
              options={['R. Antonio Braune, 222', 'Rua 123 de Oliveira 4']}
            />
            <form
              className="flex flex-shrink-0 flex-grow ml-6 md:h-12"
              action="#"
            >
              <input
                className="w-full p-4 rounded busca"
                type="text"
                placeholder="Busque por estabelecimento ou produto"
              />
              <input className="h-0 w-0 hidden" type="submit" />
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
