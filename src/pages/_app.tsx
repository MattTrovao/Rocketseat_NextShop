import { AppProps } from "next/app"
import Image from 'next/image'

import { globaStyles } from "../styles/global"
import { Container, Header } from "../styles/pages/app";

import logo from '../assets/logo.svg'

globaStyles();

function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logo.src} alt="Logotipo da aplicação"  width={130} height={52}/>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App