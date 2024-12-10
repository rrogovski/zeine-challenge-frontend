import { render } from '@testing-library/react'

import IconCross from '.'

describe('<IconCross />', () => {
  it('should render the heading', () => {
    const { container } = render(<IconCross />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
