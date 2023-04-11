import { styled } from "..";

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 50,
  maxWidth: 1180,
  margin: '0 auto',
  height: 'calc(640px - 0.5rem)',
  textAlign: 'center',


  h1: {
    fontSize: '$xl',
    color: '$white',
    fontWeight: '600',
  },

  h2: {
    fontSize: '$md',
    color: '$white',
    fontWeight: '400',
    maxWidth: 400,
  },

  a: {
    fontSize: '$md',
    color: '$green500',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all ease-in-out .4s',
    padding: '.5rem 1rem',
    borderRadius: 8,
    display: 'inline-block',
    maxWidth: 200,
    margin: '0 auto',
    border: '2px solid transparent',

    '&:hover': {
      color: '$green300',
      borderColor: '$green300'
    }
  }
})

export const ProdImg = styled('div', {
  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  padding: 8,
  height: 250,
  width: 250,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',

  img: {
    objectFit: 'cover',
    transition: 'all ease-in-out .8s',
  },
})