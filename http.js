import { defineNuxtPlugin} from '#app'
import { inisHelper } from '~~/assets/utils/helper'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      env   : env(),
      GET   : (url, params, config) => GET(url   , params, config),
      PUT   : (url, params, config) => PUT(url   , params, config),
      POST  : (url, params, config) => POST(url  , params, config),
      PATCH : (url, params, config) => PATCH(url , params, config),
      DELETE: (url, params, config) => DELETE(url, params, config),
    }
  }
})

// 获取配置
export const env = () => useRuntimeConfig()

// 处理API
export const api = () => inisHelper.customProcessApi(env().inis.api)

// 网络请求 - GET
export const GET = (url, params, config = {}) => {

  // 定义 Token
  const headers  = {token:env().inis.token}
  // 合并 headers 数据
  config.headers = {...headers, ...config.headers}
  
  return inisHelper.fetch.get(api() + url, params, config)
}

// 网络请求 - POST
export const POST = (url, params, config = {}) => {

  const headers  = {token:env().inis.token}
  config.headers = {...headers, ...config.headers}

  return inisHelper.fetch.post(api() + url, params, config)
}

// 网络请求 - PUT
export const PUT = (url, params, config = {}) => {

  const headers  = {token:env().inis.token}
  config.headers = {...headers, ...config.headers}

  return inisHelper.fetch.put(api() + url, params, config)
}

// 网络请求 - DELETE
export const DELETE = (url, params, config = {}) => {

  const headers  = {token:env().inis.token}
  config.headers = {...headers, ...config.headers}

  return inisHelper.fetch.delete(api() + url, params, config)
}

// 网络请求 - PATCH
export const PATCH = (url, params, config = {}) => {

  const headers  = {token:env().inis.token}
  config.headers = {...headers, ...config.headers}
  
  return inisHelper.fetch.patch(api() + url, params, config)
}