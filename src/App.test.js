import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { findByTestAttr } from '../utils'

describe('App Component', () => {
  let component
  beforeEach(() => {
    component = (props = {}) => shallow(<App {...props} />)
    component = component()
  })

  it('should render without errors', () => {
    const element = findByTestAttr(component, 'AppComponent')
    expect(element.length).toBe(1)
  })
})
