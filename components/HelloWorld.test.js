import React from 'react'
import renderer from 'react-test-renderer'
import HelloWorld from './HelloWorld'

test('default props', () => {
  const component = renderer.create(<HelloWorld />)
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot(true)
})

test('companyName props', () => {
  const component = renderer.create(<HelloWorld companyName={'Ubisoft'} />)

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot()
})

test('simulate click on button', () => {
  const component = renderer.create(<HelloWorld companyName={'Ubisoft'} />)

  const button = component.root.findByType('button')
  button.props.onClick()

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot()
})
