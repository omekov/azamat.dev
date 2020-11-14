import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { findByTestAttr, testStore } from '../utils'

const setUp = (initalStore = {}) => {
  const wrapper = shallow(<App store={testStore(initalStore)} />).childAt(0).dive()
  // console.log(wrapper.debug())
  return wrapper
}


describe('App Component', () => {
  let wrapper
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title 1',
          body: 'Some text',
        },
        {
          title: 'Example title 2',
          body: 'Some text',
        },
        {
          title: 'Example title 3',
          body: 'Some text',
        },
      ]
    }
    wrapper = setUp(initialState)
  })
  it('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent')
    expect(component.length).toBe(1)
  })
  it('exampleMethod_updateState Method should update state as expected', () => {
    const classInstance = wrapper.instance()
    classInstance.exampleMethod_updateState()
    const newState = classInstance.state.hideBtn
    expect(newState).toBe(true)
  })
  it('exmapleMethod_returnsAValue Method should return value as expected', () => {
    const classInstance = wrapper.instance()
    const newValue = classInstance.exmapleMethod_returnsAValue(6)
    expect(newValue).toBe(7)
  })
})
