import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


import { stripe } from "../lib/stripe";

import * as H from "../styles/pages/home";

import Stripe from "stripe";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import cloud from '../assets/cloud.svg'

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map(product => {
    const defaultPrice = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(defaultPrice.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
    <Head>
      <title>Ignite Shop</title>
    </Head>
    
    <H.Container ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <H.Product className="keen-slider__slide">
            <img src={cloud.src} className="cloud cloud--1"  width="295" height="47" />
            <img src={cloud.src} className="cloud cloud--2"  width="295" height="47" />
            <Image src={product.imageUrl} alt="Camisa" width={520} height={480} className="product" />
            <img src={cloud.src} className="cloud cloud--3"  width="295" height="47" />
            <img src={cloud.src} className="cloud cloud--4"  width="295" height="47" />

            <footer>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
            </footer>
          </H.Product>
          </Link>
        )
      })}

    </H.Container>
    </>
  )
}