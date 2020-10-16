import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const ProductSection = styled.FlatList`
  margin-top: 20px;
`;
export const ProductImage = styled.Image`
  height: 150px;
  width: 150px;
  margin-right: 15px;
  align-self: center;
`;

export const ProductTile = styled.Text.attrs({
  numberOfLines:2,
})`
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;

export const ProductItem = styled.View`
  margin-top: 20px;
  max-width: 250px;
  max-height: 400px;
  margin-right: 20px;
  padding: 0 10px;
  background-color: #fff;
`;
export const ProductPrice = styled.Text`
  font-size: 21px;
  line-height: 26px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;
export const ButtonPurchase = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  padding: 12px 12px;

`;
export const ButtonText = styled.Text`
  color: #FFF;
  font-size:14px;
  font-weight:bold;
  text-transform: uppercase;
`;
export const AmountItemSection = styled.View`
  flex-direction: row;
  padding: 12px;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
`;
