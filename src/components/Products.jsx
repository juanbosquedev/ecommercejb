import { useDispatch, useSelector } from "react-redux/";
import { useEffect } from "react";
import { get_all, addOrder, deleteOrder } from "../redux/actions/actionCreator";
import { Card } from "./card/Card";
import PropTypes from "prop-types";


export const Products = ({logged}) => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(get_all());
  }, []);

  const handleAdd = (purches) => {
    dispatch(addOrder(purches))
  };

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  return (
    <>
      <div>PRODUCTOS</div>
      <hr />
      {products?.map((prod) => {
        return (
          <Card
            key={prod.id}
            imagen={prod.image}
            titulo={prod.title}
            descripcion={prod.description}
            precio={prod.price}
            handleAdd={() => handleAdd(prod)}
            handleDelete={() => handleDelete(prod.id)}
            logged={logged}
          />
        );
      })}
    </>
  );
};

Products.Prototype={
    logged: PropTypes.bool,
}
