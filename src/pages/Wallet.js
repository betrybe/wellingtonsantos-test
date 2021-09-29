import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { getMoeadas, gerarDespesas } from '../actions';
import { tratarMoeda } from '../utils/tratarMoeda';

const Wallet = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoeadas());
  }, [dispatch]);

  const [despesa, setDespesa] = useState({});
  const [id, setId] = useState(0);

  const moedas = useSelector((state) => state.wallet.moedas);
  const despesas = useSelector((state) => state.global.wallet.expenses);

  const siglasMoedas = Object.keys(moedas).filter((item) => item !== 'USDT');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setId(id + 1);
    setDespesa({
      ...despesa,
      id: id === 1 ? 0 : id - 1,
      [name]: value,
    });
  };
  
  const cadastrarDespesas = (e) => {
    e.preventDefault();
    const cotacao = tratarMoeda(moedas)
      .map((item) => item)
      .filter((item) => item.code === despesa.siglaMoedas && item.codein !== 'BRLT');
    const cambio = cotacao.map((item) => item.ask) * despesa.valor;
    despesa.valor = cambio.toString().slice(0, -2);
    dispatch(gerarDespesas(despesa));
  };

  return (
    <div>
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="valor"
            onChange={ handleChange }
            value={ despesa.valor || '' }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="descricao"
            onChange={ handleChange }
            value={ despesa.descricao || '' }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="siglaMoedas" onChange={ handleChange }>
            <option value="#">Selecione</option>
            { siglasMoedas.map(
              (item, index) => (<option key={ index } value={ item }>{ item }</option>)
            ) };
          </select>
        </label>
        <label htmlFor="metodoPagamento">
          Método de pagamento:
          <input
            type="text"
            name="metodoPagamento"
            onChange={ handleChange }
            value={ despesa.metodoPagamento || '' }
          />
        </label>
        <label htmlFor="categoria">
          Categoria:
          <select name="categoria" onChange={ handleChange }>
            <option value="#">Selecione</option>
            <option value="Lazer">Lazer</option>
            <option value="Mercado">Mercado</option>
          </select>
        </label>
        <Button type="primary" onClick={ (e) => cadastrarDespesas(e) }>Cadastrar</Button>
      </form>
      <pre>{ JSON.stringify(despesas, null, 2) }</pre>
    </div>
  );
};

export default Wallet;
