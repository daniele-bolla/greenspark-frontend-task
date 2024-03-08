export const badgeColoursMap = {
  white: { bg: 'white-dark', text: 'green' },
  black: { bg: 'grey-darker', text: 'white-dark' },
  blue: { bg: 'blue', text: 'white-dark' },
  green: { bg: 'green', text: 'white-dark' },
  beige: { bg: 'beige', text: 'green' }
}

export type Colors = keyof typeof badgeColoursMap
export const badgeColours = Object.keys(badgeColoursMap) as [Colors]

type Type = 'carbon' | 'plastic bottles' | 'trees'
type Action = 'collects' | 'plants' | 'offsets'

export interface WidgetProductsModel {
  id: number
  type: Type
  amount: number
  action: Action
  active: boolean
  linked: boolean
  selectedColor: Colors
}
