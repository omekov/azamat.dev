import React from 'react'
import { shallow } from 'enzyme'
import ListItem from './index'
import { findByTestAttr, checkProps } from './../../../utils'

describe('ListItem Component', () => {
  let component
  const props = {
    title: 'Example Title',
    desc: 'Some Text'
  }
  beforeEach(() => {
    component = (props = {}) => shallow(<ListItem {...props} />)
  })
  afterEach(() => {
    component = null
  })

  describe('Checking PropTypes', () => {
    it('should NOT throw a waring', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Some Text'
      }
      const propsError = checkProps(ListItem, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })
  describe('Component Renders', () => {
    beforeEach(() => {
      component = component(props)
    })
    it('should renders without error', () => {
      const element = findByTestAttr(component, 'listItemComponent')
      expect(element.length).toBe(1)
    })
    it('should render a title', () => {
      const element = findByTestAttr(component, 'componentTitle')
      expect(element.length).toBe(1)
    })
    it('should render a desc', () => {
      const element = findByTestAttr(component, 'componentDesc')
      expect(element.length).toBe(1)
    })
  })

})