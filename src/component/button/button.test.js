import React from 'react'
import { findByTestAttr, checkProps } from '../../../utils'
import SharedButton from './index'
import { shallow } from 'enzyme'

describe('SharedButton Component', () => {

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
    let component
    let mockFunc

    beforeEach(() => {
      mockFunc = jest.fn()
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: mockFunc
      }
      component = shallow(<SharedButton {...props} />)
    })
    it('should render a button', () => {
      const button = findByTestAttr(component, 'buttonComponent')
      expect(button.length).toBe(1)
    })
    it('should emit callback on click event', () => {
      const button = findByTestAttr(component, 'buttonComponent')
      button.simulate('click')
      const callback = mockFunc.mock.calls.length
      expect(callback).toEqual(1)
    })
  })
})
