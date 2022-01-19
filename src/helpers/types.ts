export type CurrencyData = {
      ticker: string,
      bid: string,
      ask: string,
      changes: number,
}

export type ForexData = {
      forexList: CurrencyData[]
}
