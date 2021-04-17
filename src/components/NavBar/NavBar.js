import React from 'react';
import Carrinho from '../../assets/shopping-cart.svg';
import Logo from '../../assets/logo.svg';
import Entrar from '../../assets/entrar.svg';

import ProductOption from '../ProductOption/ProductOption';

import './Navbar.css';
import OptionModal from '../OptionModal/OptionModal';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

export default function NavBar() {
  return (
    <>
      <nav className="navbar flex flex-row lg:justify-between justify-center items-center pt-4 pb-4 pr-10 pl-10 h-12 md:h-20">
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
      </nav>
      <div className="page-body px-16 py-6 flex lg:flex-row flex-col justify-between">
        <div className="flex justify-between flex-start  py-6 flex-col flex-grow-0 lg:w-1/2">
          <img
            src="http://teamsoft.com.br/test-frontend/picanha_cheddar_bacon.png"
            alt=""
          />
          <h2 className="product-title">Oferta Picanha Cheddar Bacon</h2>
          <p className="product-description">
            Hambúrguer de picanha, molho de picanha, cebola crispy, bacon,
            queijo cheddar, molho cheddar e pão mix de gergelim
          </p>
          <p className="preco">
            <span className="preco-desconto">R$31,99</span>{' '}
            <span className="preco-normal">R$34,95</span>
          </p>
        </div>
        <div className="rounded-xl lg:border-2 lg:border-gray lg:p-8 lg:w-2/5">
          <OptionModal
            title="Adicionar Ingredientes"
            subtitle="Até 8 ingredientes"
          />
          <div className="option-scroller lg:h-96">
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
            <ProductOption
              description="Cebola crispy"
              type="option"
              price="R$4.99"
            />
            <div className="option-separator"></div>{' '}
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
            <ProductOption
              description="Queijo Cheddar"
              quantity="0"
              price="R$4.99"
            />
            <div className="option-separator"></div>
          </div>
          <OptionModal title="Precisa de talher?" />
          <div className="flex flex-row justify-between mt-5">
            <QuantitySelector quantity={0} />
            <div className="button-add items-center justify-center">
              Adicionar
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
