'use client'

import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Login from '../../components/Login'

const Main = ({
  title = 'MyDoctor App',
  description = 'We care about your health'
}: {
  title?: string
  description?: string
}) => {
  const [showSplash, setShowSplash] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setShowSplash(false)
      }, 1000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return (
      <S.Wrapper className={fadeOut ? 'fade-out' : ''}>
        <S.Logo src="/img/logo.svg" alt="Imagem de uma cruz médica." />
        <S.Container>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Container>
      </S.Wrapper>
    )
  }

  return (
    <S.LoginWrapper>
      <Login />
    </S.LoginWrapper>
  )
}

export default Main
