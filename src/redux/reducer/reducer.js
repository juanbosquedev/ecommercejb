import {
  ADD_ORDER,
  DELETE_ORDER,
  GET_ALL,
  USER_LOG,
  DELETE_ORDERED,
  CLEAN_ORDER,
  GET_PURCHASES,
  GET_USER_PURCHASES
} from "../actions/actionCreator";

const initialState = {
  // users:[],PURCHESE_ORDER

  // userCreate: {
  //   id:"id",
  //   name:"name",
  //   email:"",
  //   type:""
  // },

  userLogged: {
    id:"",
    name: "",
    role: "",
    logged: "",
  },

  products: [],
  comprasBack: [],
  order: {
    userID: "",
    purcheseOrder: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case USER_LOG: {
      return {
        ...state,
        userLogged: action.payload,
        order: {
          ...state.order,
          userID: action.payload.id,
        },
      };
    }
    case ADD_ORDER: {
      return {
        ...state,
        order: {
          ...state.order,
          purcheseOrder: [...state.order.purcheseOrder, action.payload],
        },
      };
    }
    case CLEAN_ORDER: {
      return {
        ...state,
        order: {
          ...state.order,
          purcheseOrder: [],
        },
      };
    }
    case DELETE_ORDER : {
      return {
        ...state,
        order: {
          ...state.order,
          purcheseOrder: state.order.purcheseOrder.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    }
  
    
    case  GET_USER_PURCHASES: {
      return {
        ...state,
        comprasBack: action.payload ,
      };
    }
    case  GET_PURCHASES: {
      return {
        ...state,
        comprasBack: action.payload,
      };
    }
    case DELETE_ORDERED: {
     
      return {
        ...state,
        comprasBack: state.comprasBack.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
