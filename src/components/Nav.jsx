import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Badge, Modal } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Login } from "../components/login/Login"; 
export const NavBar = ({ logged }) => {
  useEffect(() => {
    console.log(logged);
  }, [logged]);
  const orderProduct = useSelector((state) => state.order.purcheseOrder);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Ecommerce APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/Tienda" className="nav-link ">
                Tienda
              </NavLink>
            </li>

            {logged && (
              <li className="nav-item">
                <NavLink to="/Pedidos" className="nav-link">
                  Pedidos
                </NavLink>
              </li>
            )}
            {!logged && (
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={openModal}>
                  Log in
                </NavLink>
              </li>
            )}
            <Modal
              open={isModalOpen}
              onClose={closeModal}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Login closeModal={closeModal} />
            </Modal>
          </ul>
        </div>
        {logged && (
          <NavLink to="/Carrito">
            <Badge badgeContent={orderProduct.length} color="primary">
              🛒
            </Badge>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

NavBar.prototype = {
  logged: PropTypes.bool,
};
