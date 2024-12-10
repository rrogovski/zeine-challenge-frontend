import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #101010;
  color: #fff;
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #0fbc66;
  border-radius: 4px;
  font-size: 1.4rem;
`

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #0fbc66;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    background-color: #22c532;
  }
`

export const SwitchButton = styled.button`
  background: none;
  border: none;
  color: #0fbc66;
  cursor: pointer;
  font-size: 1.4rem;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`
