import React from 'react';
import OptionModal from '../OptionModal/OptionModal';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductOption from '../ProductOption/ProductOption';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

export default function AppBody(props) {
  return (
    <div className="page-body px-16 py-6 flex lg:flex-row flex-col justify-between">
      {props.product ? (
        <>
          <ProductDescription product={props.product} />
          <div className="rounded-xl lg:border-2  lg:border-gray lg:p-8 lg:w-2/5">
            <div className="lg:max-h-537 md:overflow-y-auto">
              {props.product.ingredients.map((group) => (
                <>
                  <OptionModal
                    title={group.group}
                    key={group.group}
                    subtitle={`Até ${group.max_itens} ingredientes`}
                  />
                  {group.itens.map((opt) => (
                    <>
                      <ProductOption
                        key={opt.id}
                        description={opt.nm_item}
                        price={opt.vl_item}
                      />
                      <div className="option-separator" />
                    </>
                  ))}
                </>
              ))}
            </div>
            <div className="flex flex-row justify-between mt-5">
              <QuantitySelector quantity={0} />
              <div className="button-add items-center justify-center">
                Adicionar
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
