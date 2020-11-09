import React from 'react'
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../utils'

describe('Header Component', () => {
  let component
  beforeEach(() => {
    component = (props = {}) => shallow(<Header {...props} />)
    component = component()
  })
  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent')
    expect(wrapper.length).toBe(1)
  })
  it('should render a logo', () => {
    const logo = findByTestAttr(component, 'logoIMG')
    expect(logo.length).toBe(1)
  })
  it('should render css class "wrap"', () => {
    const wrap = component.find('.wrap')
    expect(wrap.length).toBe(1)
  })
  it('should render css class "logo"', () => {
    const wrap = component.find('.logo')
    expect(wrap.length).toBe(1)
  })
})