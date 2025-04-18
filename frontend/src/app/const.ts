import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms'


export const FEC_FIELD_TYPE = {
  siren: 'siren',
  dateCloture: 'dateCloture',
  pcg: 'pcg',
  journalCode: 'journalCode',
  journalLib: 'journalLib',
  ecritureNum: 'ecritureNum',
  ecritureDate: 'ecritureDate',
  compteNum: 'compteNum',
  compteLib: 'compteLib',
  compAuxNum: 'compAuxNum',
  compAuxLib: 'compAuxLib',
  pieceRef: 'pieceRef',
  pieceDate: 'pieceDate',
  ecritureLib: 'ecritureLib',
  ecritureLet: 'ecricotureLet',
  dateLet: 'dateLet',
  validDate: 'validDate',
  montantDevise: 'montantDevise',
  idevise: 'idevise',
  montant: 'montant',
  sens: 'sens',
  dateRglt: 'dateRglt',
  modeRglt: 'modeRglt',
  natOp: 'natOp',
  idClient: 'idClient',
  lettrage: 'lettrage',
  dateLettrage: 'dateLettrage',
  tauxTva: 'tauxTva',
  tvaType: 'tvaType'
}


export const STORAGE = {
  token: 'app.token',
  refreshToken: 'app.refreshToken',
  role: 'app.role'
}

const BASE = {
  vehicles: 'vehicles',
}


export const URLS = {
  api: '/api',
  vehicles: {
    base: BASE.vehicles,
    vehicles: undefined,
    id:':idVehicle'
  }
}


export const ROUTE = (obj: any, url?: string | null) => {
  return `/${PATH(obj, url)}`
}


export const PATH = (obj: any, url?: string | null) => {
  return `${obj.base}${url && obj[url] ? '/' + obj[url] : ''}`
}


export const ROUTE_VARS = (obj: any, url: string | null, keys: any) => {
  return VARS(ROUTE(obj, url), keys)
}


export const API_VARS = (obj: any, url: string | null, keys: any) => {
  return VARS(API(obj, url), keys)
}


export const API = (obj: any, url: string | null) => {
  return `/api/v1/${obj.base}${url && obj[url] ? '/' + obj[url] : ''}`
}


export const VARS = (url: string, keys: any) => {
  Object.entries(keys.ids).forEach(([key, value]) => {
    url = url.replaceAll(`:${key}`, '' + value)
  })
  return url
}


export const SPLT = (url: string) => {
  return url.split('/').pop()
}
