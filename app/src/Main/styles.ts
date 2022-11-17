import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const isAndroid = Platform.OS === 'android';

StatusBar.currentHeight = isAndroid ? StatusBar.currentHeight : 0;

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  flex: 1;
  background: #FAFAFA;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #FAFAFA;
  padding: 8px 16px;
`;

export const FooterContainer = styled.SafeAreaView`

`;
