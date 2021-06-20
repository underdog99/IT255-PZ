
export class Info{

    id: string;
    symbol: string;
    name: string;
    high_24h: number;
    low_24h: number;
    block_time_in_minutes: number;
    hashing_algorithm: string;
    public_notice: string;
    description: string;

    constructor(id: string, symbol: string, name: string, block_time_in_minutes: number, hashing_algorithm: string, public_notice: string, description: string, high_24h: number, low_24h: number){
        this.id = id;
        this.symbol = symbol;
        this.name = name;
        this.block_time_in_minutes = block_time_in_minutes;
        this.hashing_algorithm = hashing_algorithm;
        this.public_notice = public_notice;
        this.description = description;
        this.high_24h = high_24h;
        this.low_24h = low_24h;
    }
}