import React from 'react'
import { findByTestAttr, checkProps } from '../../../utils'
import SharedButton from './index'
import { shallow } from 'enzyme'

describe('SharedButton Component', () => {
  let component
  const props = {
    buttonText: 'Example Button Text',
    emitEvent: () => { }
  }
  beforeEach(() => {
    component = (props = {}) => shallow(<SharedButton {...props} />)
  })
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => { }
      }
      const propsError = checkProps(SharedButton, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  describe('Renders', () => {
    beforeEach(() => {
      component = component(props)
    })
    it('should render a button', () => {
      const button = findByTestAttr(component, 'buttonComponent')
      expect(button.length).toBe(1)
    })
  })
})
