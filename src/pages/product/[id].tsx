import React, { useState } from "react";
import Head from "next/head";


import axios from "axios";

import Stripe from "stripe";
import { stripe } from "../../lib/stripe";

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import * as P from '../../styles/pages/product'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_NcwTDNIHTGyIlz' } }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productID = params.id;

  const product = await stripe.products.retrieve(productID, {
    expand: ['default_price'],
  })

  const defaultPrice = product.default_price as Stripe.Price
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(defaultPrice.unit_amount / 100),
        description: product.description,
        defaultPriceId: defaultPrice.id,
      }
    },
    revalidate: 60 * 60 * 5 // 5h
  }
}

interface ProductPros {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductPros) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return (
      <>
        

        <P.Container>
          <P.SkImg></P.SkImg>

          <P.SkData>
            <div className="Sk-title"></div>
            <div className="Sk-price"></div>
            <div className="Sk-desc"></div>
            <div className="Sk-btn"></div>
          </P.SkData>
        </P.Container>
      </>
    )
  }

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert(`Erro: ${error}`)
    }
  }

  return (
    <>
      <Head>
        <title> {product.name} | Ignite Shop</title>
      </Head>
      <P.Container>

        <P.ProdImg>
          <Image src={product.imageUrl} alt="Camisa" width={520} height={480} className="product" />
        </P.ProdImg>

        <P.ProdData>
          <h1>
            {product.name}
          </h1>

          <h2>
            {product.price}
          </h2>

          <p>
            {product.description}
          </p>

          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
            Comprar
          </button>
        </P.ProdData>

      </P.Container>
    </>
  )
}