import { expect, describe, it } from 'vitest'
import mutations from '@/store/modules/widget_products/mutations'
import getters from '@/store/modules/widget_products/getters'

const { setAll, setActive, setLinked, setColor } = mutations
const { getAll, getById } = getters
const state = {
  all: []
}
const all = [
  {
    id: 1,
    type: 'plastic bottles',
    amount: 100,
    action: 'collects',
    active: true,
    linked: true,
    selectedColor: 'green'
  },
  {
    id: 2,
    type: 'trees',
    amount: 10,
    action: 'plants',
    active: false,
    linked: false,
    selectedColor: 'black'
  },
  {
    id: 3,
    type: 'carbon',
    amount: 20,
    action: 'offsets',
    active: false,
    linked: false,
    selectedColor: 'blue'
  }
]
describe('widget_products mutations and getters', () => {
  it('sets all', () => {
    setAll(state, all)
    expect(state.all).toEqual(getAll(state))
  })
  it('sets active ', () => {
    const id = 2
    const value = true
    const others = getAll(state).filter((w) => w.id !== id)
    setActive(state, { id, value })
    expect(getById(state)(id)).toBeDefined()
    expect(others.every(({ active }) => active === false)).toBeTruthy()
    expect(getById(state)(id)?.active).toBeTruthy()
  })
  it('sets linked ', () => {
    const id = 3
    const value = true
    setLinked(state, { id, value })
    expect(getById(state)(id)).toBeDefined()
    expect(getById(state)(id)?.linked).toBeTruthy()
  })
  it('sets color ', () => {
    const id = 3
    const value = 'beige'
    setColor(state, { id, value })
    expect(getById(state)(id)).toBeDefined()
    expect(getById(state)(id)?.selectedColor).toBe('beige')
  })
})
