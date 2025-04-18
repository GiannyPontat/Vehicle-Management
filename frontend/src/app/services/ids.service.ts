import {Injectable} from '@angular/core'


@Injectable({providedIn: 'root'})
export class IdsService {
  ids: { [index: string]: any } = {}

  constructor() {
    console.log("constructor ids")
  }


  public has(key: string) {
    return key in this.ids
  }


  public set(key: string, value: any) {
    this.ids[key] = value
  }


  public get(key: string): any {
    return this.ids[key]
  }


  public delete(key: string) {
    if (this.has(key)) {
      delete this.ids[key]
      return true
    }
    return false
  }

}
