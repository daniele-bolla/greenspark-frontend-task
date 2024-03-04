export const badgeColours = ["white", "black", "blue","green","beige"] as const;
type Colors = typeof badgeColours[number];

// export const badgeColoursMap = {
//     "white":"white-dark", 
//     "black":"grey-darker", 
//     "blue":"blue",
//     "green":"green",
//     "beige":"beige"
// }
// type Colors = keyof typeof badgeColoursMap;

type Type= "carbon" | "plastic bottles" | "trees";
type Action= "collects" | "plants" | "offsets";

export interface WidgetProductsModel {
    id: number;
    type: Type;
    amount: number;
    action: Action;
    active: boolean;
    linked: boolean,
    selectedColor: Colors;
}