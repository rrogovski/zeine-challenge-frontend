'use client'

import React, { useState } from 'react'
import * as S from './styles'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <S.Wrapper>
      <S.Container>
        <S.Form>
          {isSignUp ? (
            <>
              <S.Input type="text" placeholder="Name" />
              <S.Input type="email" placeholder="Email" />
              <S.Input type="password" placeholder="Password" />
              <S.Button type="button">Create Account</S.Button>
              <S.SwitchButton onClick={() => setIsSignUp(false)}>
                Already have an account? Log In
              </S.SwitchButton>
            </>
          ) : (
            <>
              <S.Input type="email" placeholder="Email" />
              <S.Input type="password" placeholder="Password" />
              <S.Button type="button">Login</S.Button>
              <S.SwitchButton onClick={() => setIsSignUp(true)}>
                {"Don't have an account? Sign Up"}
              </S.SwitchButton>
            </>
          )}
        </S.Form>
        <S.Title>Your Everyday Doctor Appointment Medical App</S.Title>
        <S.Description>We care about your health</S.Description>
      </S.Container>
    </S.Wrapper>
  )
}

export default Login
