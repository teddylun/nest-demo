import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { Bitcoin } from './interfaces/bitcoin.interface'
import Config from '../configs'

@Injectable()
export class BitcoinsService {
  private readonly bitcoins: Bitcoin[] = []

  create(bitcoin: Bitcoin) {
    this.bitcoins.push(bitcoin)
  }

  async list(limit: number | string): Promise<any> {
    return await axios.get(`${Config.coinMarketCapUrl}/?limit=${limit}`)
  }

  async findOne(id: number) {
    return await axios.get(`${Config.coinMarketCapUrl}/${id}`)
  }
}