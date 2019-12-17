import { Product } from '../product';
import { ProductActions, ProductActionTypes } from './product.actions';


export interface ProductState {
  showProductCode: boolean
  currentProductId: number | null
  products: Product[]
  error: string
  loading: boolean
}

const initialState : ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
  loading: false
}

export function reducer(state = initialState, action : ProductActions) : ProductState {

  switch (action.type) {

    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };
    
    case ProductActionTypes.SetCurrentProduct:
      return {
        ...state,
        currentProductId: action.payload
      }
    
    case ProductActionTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProductId: null
      }
    
    case ProductActionTypes.InititalizeCurrentProduct:
      return {
        ...state,
        currentProductId: 0
      }
    
    case ProductActionTypes.LoadSuccess:
      return {
        ...state,
        products: action.payload
      }
    
    case ProductActionTypes.LoadFail:
      return {
        ...state,
        error: action.payload
      }

    case ProductActionTypes.UpdateProduct:
      return {
        ...state,
        loading: true
      }

    case ProductActionTypes.UpdateProductSuccess:
      const updatedProducts = state.products.map(product =>
        action.payload.id === product.id ? action.payload : product)
      return {
        ...state,
        products: updatedProducts,
        currentProductId: action.payload.id,
        loading: false
      }

    case ProductActionTypes.UpdateProductFail:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case ProductActionTypes.DeleteProductSuccess:
      return {
        ...state,
        products: state.products.filter(product => action.payload !== product.id),
        currentProductId: null
      }

    case ProductActionTypes.DeleteProductFail:
      return {
        ...state,
        error: action.payload
      }

    case ProductActionTypes.CreateProductSuccess:
      return {
        ...state,
        products: [...state.products, action.payload],
        currentProductId: action.payload.id
      }
    
      case ProductActionTypes.CreateProductFail:
        return {
          ...state,
          error: action.payload
        }

    default:
      return state;
  }
}
