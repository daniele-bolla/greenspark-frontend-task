import type { WidgetProductsModel } from '@/models/WidgetProductsModel'

export const all: WidgetProductsModel[] = [
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

export const green: WidgetProductsModel = {
  id: 1,
  type: 'plastic bottles',
  amount: 100,
  action: 'collects',
  active: true,
  linked: true,
  selectedColor: 'green'
}

export const beige: WidgetProductsModel = {
  selectedColor: 'beige',
  id: 2,
  type: 'trees',
  amount: 10,
  action: 'plants',
  active: false,
  linked: true
}

export const blue: WidgetProductsModel = {
  id: 3,
  type: 'carbon',
  amount: 20,
  action: 'offsets',
  active: false,
  linked: false,
  selectedColor: 'blue'
}
