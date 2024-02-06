import { AppState } from "../AppState.js"

class VendingService {
  constructor() {
    console.log("Vending Service Constructed")
  }

  // /**@type  */
  MoneyGoesUp(amount) {
    {
      AppState.money += amount
      console.log(AppState.money)
    }
  }
}

export const vendingService = new VendingService()