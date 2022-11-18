import {Modal} from 'react-native';
import {CheckCircle} from '../Icons/CheckCircle';
import {Container, OkButton} from './styles';
import {Text} from '../Text';
import {StatusBar} from 'expo-status-bar';


interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <StatusBar style="light" />

      <Container>
        <CheckCircle />

        <Text size={20} weight="600" color="#fff" style={{ marginTop: 12}}>Pedido confirmado</Text>
        <Text size={20} opacity={0.9} color="#fff" style={{ marginTop: 4}}>O seu pedido já entrou na fila de produção!</Text>

        <OkButton onPress={onOk}>
          <Text color="#d73035" weight="600">Ok</Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
