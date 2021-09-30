import React from 'react';
import { TableComponent } from '../../assets/Styles/wallet/table';

const TableDespesas = ({ despesas }) => (
    <TableComponent>
        <table>
            <thead>
                <tr>
                    <th>Valor:</th>
                    <th>Descrição:</th>
                    <th>Moeda:</th>
                    <th>Pagamento:</th>
                    <th>Categoria:</th>
                </tr>
            </thead>
            <tbody>
            {despesas.map((item) => {

                const valor = item.valor

                return (
                    <tr>
                        <td>{valor.replace(/$\1\2\3\4/)}</td>
                        <td>{item.descricao}</td>
                        <td>{item.siglaMoedas}</td>
                        <td>{item.metodoPagamento}</td>
                        <td>{item.categoria}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </TableComponent>
)


export default TableDespesas;
