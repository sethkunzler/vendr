import { AppState } from "../AppState.js"
import { vendingService } from "../services/VendingService.js"
import { setText } from "../utils/Writer.js";


export class VendingController {
  constructor() {
    console.log("Vending Controller Constructed")
    AppState.on('money', this.#_drawMoney)
  }
  CollectMoney(data) {
    vendingService.MoneyGoesUp(data)
  }

  #_drawMoney() {
    setText('moneyDisplay', AppState.money)
  }
}
