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
