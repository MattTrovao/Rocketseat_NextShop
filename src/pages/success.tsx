import Link from 'next/link'
import * as S from '../styles/pages/success'

import { GetServerSideProps } from 'next'
import Image from "next/image";


import { stripe } from '../lib/stripe';
import Stripe from 'stripe';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const costumerName = session.customer_details.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      }
    }
  }
}

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ costumerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex"/>
      </Head>

      <S.Container>
        <h1>Compra efetuada!</h1>

        <S.ProdImg>
          <Image src={product.imageUrl} alt="" width={200} height={200}></Image>
        </S.ProdImg>

        <h2>
          <strong>{costumerName}</strong>, sua compra do produto <strong>{product.name}</strong> foi realizado com sucesso!
        </h2>

        <Link href='/'>
          Voltar ao catálogo
        </Link>
      </S.Container>
    </>
  )
}