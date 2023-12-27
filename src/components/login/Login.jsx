import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userLog } from "../../redux/actions/actionCreator";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Login = ({ closeModal }) => {
  const dispatch = useDispatch();
  const userLogs = useSelector((state) => state.userLogged.logged);

  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault(), closeModal();
    dispatch(userLog(user));
  };
  return (
    <form onSubmit={onSubmit}>
      {userLogs === false && <p>datos incorrectos</p>}
      <div className="modal" tabIndex="-1"></div>

      <Box sx={style}>
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          <div className={style}>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="user"
              name="user"
              placeholder="user name"
              value={user.user}
              onChange={onInputChange}
            ></input>
          </div>
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              placeholder="password"
              value={user.password}
              onChange={onInputChange}
            ></input>
          </div>
        </Typography>
        <button type="submit" onClick={onSubmit} className="btn btn-primary">
          Ingresar
        </button>
      </Box>
    </form>
  );
};
