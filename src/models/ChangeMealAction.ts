import { Action } from "./enum/Actions";

export interface ChangeMealAction {
    actionType: Action,
    mealId: number
    countFactor: number
}