import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const Wrapper = styled.main`
  background: linear-gradient(to bottom, #0fbc66, #22c532);
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition:
    opacity 1s ease-out,
    background 1s ease-out;

  &.fade-out {
    opacity: 0;
  }
`

export const Logo = styled.img`
  width: 16rem;
  margin-bottom: 2rem;
  background: transparent;
  animation: ${pulse} 2s infinite;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 5rem;
  background: transparent;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  background: transparent;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  background: transparent;
`
export const LoginWrapper = styled.div`
  background-color: #101010;
  color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
