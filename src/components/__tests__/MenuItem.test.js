import React from 'react'
import Colonel from '../../Colonel'
import Item from '../MenuItem'
import config from './fixtures/colonelConfig'
import TestUtils from 'react-dom/test-utils'

const render = TestUtils.renderIntoDocument

describe('Components - Menu Item', function() {
  let app

  beforeEach(function(done) {
    app = new Colonel(config)
    app.start(done)
  })

  it('has a default noop onClick prop', function() {
    let block = app.state.blocks[0]
    let item = render(<Item app={app} block={block} id="id" label="test" />)

    item.props.onClick()
  })

  it('has a default noop isDisabled prop', function() {
    let block = app.state.blocks[0]
    let item = render(<Item app={app} block={block} id="id" label="test" />)

    expect(item.props.isDisabled()).not.toBeDefined()
  })

  it('sends the item component into the onClick callback', function(done) {
    function testClick(app, block, component) {
      expect(component).toEqual(item)
      done()
    }

    let block = app.state.blocks[0]
    let item = render(
      <Item app={app} onClick={testClick} block={block} id="id" label="test" />
    )

    item._onClick()
  })
})
