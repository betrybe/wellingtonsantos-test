import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { getMoeadas, gerarDespesas } from '../actions';
import { tratarMoeda } from '../utils/tratarMoeda';
import TableDespesas from './components/table.wallet';
import { ComponenteWallet, ComponenteForm } from '../assets/Styles/wallet/table';

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
    setDespesa({
      ...despesa,
      id: id,
      [name]: value,
    });
  };

  const cadastrarDespesas = (e) => {
    e.preventDefault();
    setId(id + 1)
    const cotacao = tratarMoeda(moedas)
      .map((item) => item)
      .filter((item) => item.code === despesa.siglaMoedas && item.codein !== 'BRLT');
    const cambio = cotacao.map((item) => item.ask) * despesa.valor;
    despesa.valor = cambio.toString().slice(0, -2);
    dispatch(gerarDespesas(despesa));
    setTimeout(() => setDespesa({}), 200)
  };

  return (
    <ComponenteWallet >
      <ComponenteForm>
        <form>
          <div className="campos" >
          <label htmlFor="valor">
            Valor:
            <input
              type="text"
              name="valor"
              onChange={handleChange}
              value={despesa.valor || ''}
            />
          </label>
          </div>
          <div className="campos">
          <label htmlFor="descricao">
            Descrição:
            <input
              type="text"
              name="descricao"
              onChange={handleChange}
              value={despesa.descricao || ''}
            />
          </label>
          </div>
          <div className="campos">
          <label htmlFor="moeda">
            Moeda:
            <select name="siglaMoedas" value={despesa.siglaMoedas || ''} onChange={handleChange}>
              <option value="#">Selecione</option>
              {siglasMoedas.map(
                (item, index) => (<option key={index} value={item}>{item}</option>)
              )};
            </select>
          </label>
          </div>
          <div className="campos">
          <label htmlFor="metodoPagamento">
            Método de pagamento:
            <input
              type="text"
              name="metodoPagamento"
              onChange={handleChange}
              value={despesa.metodoPagamento || ''}
            />
          </label>
          </div>
          <div className="campos">
          <label htmlFor="categoria">
            Categoria:
            <select name="categoria" value={despesa.categoria || ''} onChange={handleChange}>
              <option value="#">Selecione</option>
              <option value="Lazer">Lazer</option>
              <option value="Mercado">Mercado</option>
            </select>
          </label>
          </div>
        </form>
        </ComponenteForm>
        <Button type="primary" onClick={(e) => cadastrarDespesas(e)}>Cadastrar</Button>
      <TableDespesas despesas={despesas} />
    </ComponenteWallet>
  );
};

export default Wallet;
