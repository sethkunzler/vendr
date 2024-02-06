import { AppState } from "../AppState.js"
import { vendingService } from "../services/VendingService.js"

export class VendingController {
  constructor() {
    console.log("Vending Controller Constructed")
  }
  CollectMoney(data) {
    vendingService.MoneyGoesUp(data)
  }
}