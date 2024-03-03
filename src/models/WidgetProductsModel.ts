export interface WidgetProductsModel {
    id: number;
    type: "carbon" | "plastic bottles" | "trees";
    amount: number;
    action: "collects" | "plants" | "offsets";
    active: boolean;
    linked: boolean,
    selectedColor: "white" | "black" | "blue";
}