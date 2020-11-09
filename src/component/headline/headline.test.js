import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'
import { findByTestAttr, checkProps } from './../../../utils'

describe('Headline Component', () => {
  let component
  const props = {
    header: 'Test header',
    desc: 'Test desc'
  }
  beforeEach(() => {
    component = (props = {}) => shallow(<Headline {...props} />)
  })

  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: "Test Header",
        desc: 'Test desc',
      }
      const propErr = checkProps(Headline, expectedProps)
      expect(propErr).toBeUndefined()
    })
  })

  describe('Have Props', () => {
    beforeEach(() => {
      component = component(props)
    })
    it('should render without errors', () => {
      const element = findByTestAttr(component, 'HeadlineComponent')
      expect(element.length).toBe(1)
    })
    it('should render <h1>', () => {
      const element = findByTestAttr(component, 'header')
      expect(element.length).toBe(1)
    })
    it('should render <p>', () => {
      const element = findByTestAttr(component, 'desc')
      expect(element.length).toBe(1)
    })
  })
  describe('Have NO Props', () => {
    beforeEach(() => {
      component = component()
    })
    it('should render without erros', () => {
      const element = findByTestAttr(component, 'HeadlineComponent')
      expect(element.length).toBe(0)
    })
  })
})