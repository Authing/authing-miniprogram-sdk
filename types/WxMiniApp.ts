namespace WxMiniApp {
  type IObject = Record<string, any>

  export type WxMethod =
    | 'OPTIONS'
    | 'GET'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'

  export type WxDataType = 'json' | string

  export type WxResponseType = 'text' | 'arraybuffer'

  export interface WxResponseDataProfile {
    redirectStart: number
    redirectEnd: number
    fetchStart: number
    domainLookupStart: number
    domainLookupEnd: number
    connectStart: number
    connectEnd: number
    SSLconnectionStart: number
    SSLconnectionEnd: number
    requestStart: number
    requestEnd: number
    responseStart: number
    responseEnd: number
    rtt: number
    estimate_nettype:
      | unknown
      | 'offline'
      | 'slow 2g'
      | '2g'
      | '3g'
      | '4g'
      | 'last/0'
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
    httpRttEstimate: number
    transportRttEstimate: number
    downstreamThroughputKbpsEstimate: number
    throughputKbps: number
    peerIP: string
    port: number
    socketReused: boolean
    sendBytesCount: number
    receivedBytedCount: number
    protocol: 'http1.1' | 'h2' | 'quic' | unknown
  }

  export interface WxResponseData {
    data: IObject | string | ArrayBuffer
    statusCode: number
    header: IObject
    cookies: string[]
    profile: WxResponseDataProfile
  }

  export interface WxResponseError {
    errMsg: string
  }

  export interface WxRequestConfig {
    url: string
    data?: IObject
    header?: IObject
    timeout?: number
    method?: WxMethod
    dataType?: WxDataType
    responseType?: WxResponseType
    enableHttp2?: boolean
    enableQuic?: boolean
    enableCache?: boolean
    enableHttpDNS?: boolean
    httpDNSServiceId?: string
    enableChunked?: boolean
    forceCellularNetwork?: boolean
    success?: (res: WxResponseData) => void
    fail?: (error: WxResponseError) => void
    complete?: (res: WxResponseData | WxResponseError) => void
  }

  interface SetStorageCallbackData {
    errMsg: string
  }

  export interface SetStorageOptions {
    key: string
    data: unknown
    encrypt?: boolean
    success?: (res: SetStorageCallbackData) => void
    fail?: (res: GetStorageFailData) => void
    complete?: (res: SetStorageCallbackData | GetStorageFailData) => void
  }

  export interface GetStorageSuccessData {
    errMsg: 'getStorage:ok',
    data: unknown
  }

  export interface GetStorageFailData {
    errMsg: 'getStorage:fail data not found'
  }

  export interface GetStorageOptions {
    key: string
    encrypt?: boolean
    success?: (res: GetStorageSuccessData) => void
    fail?: (res: GetStorageFailData) => void
    complete?: (res: GetStorageSuccessData | GetStorageFailData) => void
  }

  export interface RemoveStorageSuccessData {
    errMsg: "removeStorage:ok"
  }

  export interface RemoveStorageFailData {
    errMsg: "removeStorage:fail"
  }

  export interface RemoveStorageOptions {
    key: string,
    success?: (res: RemoveStorageSuccessData) => void
    fail?: (res: RemoveStorageFailData) => void
    complete?: (res: RemoveStorageSuccessData | RemoveStorageFailData) => void
  }

  export interface ScanCodeSuccessData {
    result: string
    scanType: string
    charSet: string
    path: string
    rawData: string
  }

  export interface ScanCodeFailData {
    errMsg: 'scanCode:fail'
  }

  export interface ScanCodeOptions {
    onlyFromCamera?: boolean
    scanType?: Array<'barCode' | 'qrCode'>
    success?: (res: ScanCodeSuccessData) => void
    fail?: (res: ScanCodeFailData) => void
    complete?: (res: ScanCodeSuccessData | ScanCodeFailData) => void
  }

  export interface LoginSuccessData {
    code: string
  }

  export interface LoginFailData {
    errMsg: 'login:fail'
  }

  export interface LoginOptions {
    timeout?: number
    success?: (res: LoginSuccessData) => void 
    fail?: (res: LoginFailData) => void 
    complete?: (res: LoginSuccessData | LoginFailData) => void 
  }

  export interface Wx {
    request(config: WxRequestConfig): Promise<WxResponseData>
    setStorage(options: SetStorageOptions): Promise<SetStorageCallbackData>
    getStorage(options: GetStorageOptions): Promise<GetStorageSuccessData>
    removeStorage(options: RemoveStorageOptions): Promise<RemoveStorageSuccessData>
    scanCode(options: ScanCodeOptions): Promise<ScanCodeSuccessData>
    login(options: LoginOptions): Promise<LoginSuccessData>
  }
}
