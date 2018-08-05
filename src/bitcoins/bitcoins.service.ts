import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { Bitcoin } from './interfaces/bitcoin.interface'
import Config from '../configs'

@Injectable()
export class BitcoinsService {
  private readonly bitcoins: Bitcoin[] = []

  async list(limit: number | string): Promise<any> {
    try {
      return await axios.get(`${Config.coinMarketCapUrl}/?limit=${limit}`)
    } catch (e) {
      throw e
    }
  }
}