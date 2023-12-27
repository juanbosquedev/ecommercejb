import { useSelector, useDispatch } from "react-redux/";
import {
  deleteOrder,
  puerchesOrder,
  cleanOrder,
} from "../../redux/actions/actionCreator";

export const Carrito = () => {
  
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  const handleOrder = () => {
    dispatch(puerchesOrder(order));
    dispatch(cleanOrder());
  };

  const calcularTotal = () => {
    return order.purcheseOrder.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  return (
    <>
      <div>CARRITO</div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {order.purcheseOrder?.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.title}</th>
                <td>{item.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteOrder(item.id))}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
          <th>
            <b>TOTAL:</b>
          </th>
          <td>${calcularTotal()}</td>
          <td></td>
          <td></td>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={handleOrder}
          disabled={order.purcheseOrder < 0}
        >
          SOLICITAR
        </button>
      </div>
    </>
  );
};
