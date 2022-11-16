import closeIcon from '../../assets/images/close-icon.svg';
import {Actions, ModalBody, OrderDetails, Overlay} from './styles';
import {Order} from '../../types/Order';
import {formatCurrency} from '../../utils/formatCurrency';
import {useEffect} from 'react';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.addEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }
  const total = order.products.reduce((total, { product, quantity }) =>
      (total + (product.price * quantity)),
    0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Close button" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕜'}
              {order.status === 'IN_PRODUCTION' && '‍🍳'}
              {order.status === 'DONE' && '🥗'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
                  //<img src={`http://localhost:3000/uploads/products/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51" />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary">
            <span>‍🍳</span>
            <strong>Iniciar produção</strong>
          </button>
          <button type="button" className="secondary">
            <strong>Cancelar pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
