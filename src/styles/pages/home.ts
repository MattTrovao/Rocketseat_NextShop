import { keyframes, styled } from '..';

export const Container = styled('main', {
  display: 'flex',
  flexAlign: 'space-between',
  alignItems: 'center',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2) )',
  minHeight: 656,
  marginLeft: 'auto',
  marginRight: '0',
})

const cloudLeft = keyframes({
  '0%, 100%': { left: '5%', },
  '50%': { left: '200%', },
})
const cloudRight = keyframes({
  '0%, 100%': { right: '5%', },
  '50%': { right: '200%', },
})

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: '8px',
  cursor: 'pointer',
  overflow: 'hidden',
  minWidth: 540,
  padding: 1,
  textDecoration: 'none',

  '&:hover': {
    img: {
      '&.product': {
        filter: 'drop-shadow(0px 0px 7px rgba(255,255,255,.4) )',
        transform: 'scale(1.1)',
        zIndex: 2,
      },
      '&.cloud': {
        opacity: 1,
      }
    },

    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    }
  },

  img: {
    '&.product': {
      objectFit: 'cover',
      transition: 'all ease-in-out .8s',
    },
    '&.cloud': {
      position: 'absolute',
      opacity: 0,
      transition: 'all ease-in-out .8s',

      '&.cloud--1': {
        top: '20%',
        left: 0,
        animation: `${cloudLeft} 4s infinite`,
        zIndex: 1,
      },
      '&.cloud--2': {
        top: '35%',
        right: 0,
        animation: `${cloudRight} 6s infinite`,
        zIndex: 3,
      },
      '&.cloud--3': {
        bottom: '30%',
        left: '180%',
        animation: `${cloudLeft} 6s infinite`,
        zIndex: 1,
      },
      '&.cloud--4': {
        bottom: '15%',
        right: '180%',
        animation: `${cloudRight} 4s infinite`,
        zIndex: 3,
      },
    }
  },

  footer: {
    background: '$gray800',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '0 0 8px 8px',
    opacity: 0,
    transform: 'translateY(200px)',
    transition: 'all ease-in-out .6s',

    '&>*': {
      margin: 0,
    },

    h2: {
      fontSize: '$xl',
      color: '$white',
    },

    h3: {
      fontSize: '$lg',
      color: '$green300',
      fontWeight: 'bold',
    }
  }
})