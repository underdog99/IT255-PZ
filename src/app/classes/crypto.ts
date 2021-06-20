export class Crypto{

    id: string;
    symbol: string;
    name: string;
    //image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    price_change_percentage_24h: number;

    constructor(id: string, symbol: string, current_price: number, market_cap: number, market_cap_rank: number, fully_diluted_valuation: number, price_change_percentage_24h: number){
        this.id = id;
        this.symbol = symbol;
        this.current_price = current_price;
        this.market_cap = market_cap;
        this.market_cap_rank = market_cap_rank;
        this.fully_diluted_valuation = fully_diluted_valuation;
        this.price_change_percentage_24h = price_change_percentage_24h;
    }

}