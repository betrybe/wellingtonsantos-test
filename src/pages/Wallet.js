import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoeadas } from '../actions';

const Wallet = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoeadas());
  });

  const moedas = useSelector((state) => state.wallet.moedas);

  const siglasMoedas = Object.keys(moedas).filter((item) => item !== 'USDT');

  return (
    <div>
      <form>
        <label htmlFor="valor">Valor:
          <input type="text" />
        </label>
        <label htmlFor="descricao">Descrição:
          <input type="text" />
        </label>
        <label htmlFor="moeda">Moeda:
          <select name="siglaMoedas">
            <option value="#">Selecione uma moeda</option>
            {siglasMoedas.map(
              (item, index) => (<option key={ index } value={ item }>{ item }</option>)
            )};
          </select>
        </label>
        <label htmlFor="metodoPagamento">Método de pagamento:
          <input type="text" />
        </label>
        <label htmlFor="categoria">Categoria:
          <select name="" id="">
            <option value="#">Selecione uma moeda</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Wallet;
