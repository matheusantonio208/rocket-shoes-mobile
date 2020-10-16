import React, { Component } from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import { formatPrice } from '#utils/format';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container } from '#views/styles/global-style';
import {
  ProductSection,
  ProductImage,
  ProductTile,
  ProductItem,
  ProductPrice,
  ButtonPurchase,
  ButtonText,
  AmountItemSection
  } from '#views/styles/home-page-style';

import api from '#services/axios';

export default class HomePage extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const req = await api.get('/products');
    const data = req.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice('pt-BR','BRL',product.price)
    }));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductSection
          data={products}
          horizontal
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item }) => (
            <ProductItem>
              <ProductImage source={{ uri: item.image }}/>
              <ProductTile>{item.title}</ProductTile>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <ButtonPurchase>
                <AmountItemSection>
                  <Icon name="shopping-cart" size={16} color="#FFF" />
                  <Text>1</Text>
                </AmountItemSection>

                <ButtonText>
                  Adicionar ao Carrinho
                </ButtonText>

              </ButtonPurchase>
            </ProductItem>
          )
          }
        />
      </Container>
    );
  }
}
