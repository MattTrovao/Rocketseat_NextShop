import { keyframes, styled } from "..";

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 50,
  alignItems: 'stretch',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ProdImg = styled('div', {
  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  padding: 8,
  height: 'calc(640px - 0.5rem)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    transition: 'all ease-in-out .8s',
  },
})

export const ProdData = styled('div', {
  padding: '40px 20px 0',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  
  h1: {
    fontSize: '$2xl',
    color: '$white',
  },

  h2: {
    fontSize: '$xl',
    color: '$green500',
    fontWeight: '600',
    margin: '30px 0',
  },

  p:{
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    fontSize: '$md',
    color: '$gray500',
    fontWeight: '600',
    background: '$green500',
    border: '2px solid transparent',
    padding: '10px 0',
    textAlign: 'center',
    width: 'calc(100% - 40px)',
    borderRadius: '8px',
    marginTop: 'auto',

    cursor: 'pointer',
    transition: 'all ease-in-out .4s',

    '&:not(:disabled):hover':{
      filter: 'brightness(1.2)',
      borderColor: '$green300',
    },

    '&:disabled':{
      opacity: .6,
      cursor: 'not-allowed'
    }
  }
})

const skLoad = keyframes({
  '0%, 100%': { backgroundPosition: '0% 50%', },
  '50%': { backgroundPosition: '100% 50%', },
})

export const SkImg = styled('div',{
  borderRadius: '8px',
  background: 'linear-gradient(90deg, #33312E 0%, #1C2A33 100%)',
  padding: 8,
  height: 'calc(640px - 0.5rem)',
  width: 520,
  backgroundSize: '400% 400%',
  animation: `${skLoad} 4s infinite`,
})

export const SkData = styled('div',{
  padding: '40px 20px 0',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',

  div:{
    background: 'linear-gradient(90deg, #33312E 0%, #1C2A33 100%)',
    width: '100%',
    borderRadius: '8px',
    backgroundSize: '400% 400%',
    animation: `${skLoad} 4s infinite`,


    '&.Sk-title': {
      height: 50,
    },
    '&.Sk-price': {
      height: 40,
      margin: '30px 0'
    },
    '&.Sk-desc': {
      height: 250,
    },
    '&.Sk-btn': {
      height: 50,
      marginTop: 'auto',
    }
  }
})