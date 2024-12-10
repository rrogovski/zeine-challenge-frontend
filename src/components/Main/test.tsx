import { render, screen } from '@testing-library/react'
import Main from '.'

describe('Main component', () => {
  it('displays splash screen initially', () => {
    render(<Main />)
    expect(
      screen.getByAltText('Imagem de uma cruz médica.')
    ).toBeInTheDocument()
  })
})
