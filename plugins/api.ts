import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: {
        GET: (url, params) => GET(url, params),
        GETP: (url, params) => GETP(url, params),
        PUT: (url, params) => PUT(url, params),
        POST: (url, params) => POST(url, params),
        PATCH: (url, params) => PATCH(url, params),
        DELETE: (url, params) => DELETE(url, params),
      },
    },
  };
});

// 获取配置
const env = () => useRuntimeConfig();

// 网络请求 - GET
const GET = async (url, params) => {
  // 定义 Token
  const config = { headers: { token: env().TOKEN } };
  // 合并 headers 数据
  const response = await fetch(
    env().BASE_URL + url + "?" + stringfy(params),
    config
  );
  return await response.json();
};

// 网络请求 - GET
const GETP = async (url, params) => {
  // 定义 Token
  const config = { headers: { token: env().TOKEN } };
  // 合并 headers 数据
  const response = await fetch(url + "?" + stringfy(params), config);
  return await response.json();
};

// 网络请求 - POST
const POST = async (url, params) => {
  // 默认配置
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: env().TOKEN,
    },
    body: JSON.stringify(params),
  };

  const response = await fetch(env().BASE_URL + url, opt);

  return await response.json();
};

// 网络请求 - PUT
const PUT = async (url, params) => {
  // 默认配置
  const opt = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: env().TOKEN,
    },
    body: JSON.stringify(params),
  };

  const response = await fetch(env().BASE_URL + url, opt);

  return await response.json();
};

// 网络请求 - DELETE
const DELETE = async (url, params) => {
  // 默认配置
  const opt = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: env().TOKEN,
    },
    body: JSON.stringify(params),
  };

  const response = await fetch(env().BASE_URL + url, opt);

  return await response.json();
};

// 网络请求 - PATCH
const PATCH = async (url, params) => {
  // 默认配置
  const opt = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      token: env().TOKEN,
    },
    body: JSON.stringify(params),
  };

  const response = await fetch(env().BASE_URL + url, opt);

  return await response.json();
};

/**
 *
 * @name   对象序列化
 * @param  {Object} obj
 * @return {str}
 */
function stringfy(obj) {
  let s = [],
    add = (key, value) => {
      // 空数据处理
      value = encodeURIComponent(value) == "undefined" ? "" : value;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    };

  if (Array.isArray(obj)) for (let v in obj) add(v, obj[v]);
  else
    for (let prefix in obj) {
      stringfyBuild(prefix, obj[prefix], add);
    }

  return s.join("&");
}
/**
 *
 * @name   对象序列化 - 格式数据
 * @param  {String} prefix 前缀
 * @param  {Object} obj 对象数据
 * @param  {function} add 回调函数
 */
function stringfyBuild(prefix, obj, add) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      stringfyBuild(
        prefix + "[" + (typeof obj[i] === "object" ? i : "") + "]",
        obj[i],
        add
      );
    }
  } else if (typeof obj == "object") {
    for (let name in obj) {
      stringfyBuild(prefix + "[" + name + "]", obj[name], add);
    }
  } else add(prefix, obj);
}
/**
 * @name 判断是否为空 (包括空字符串、空格、null,{})
 * @param {str} str 字符串
 * @return {boolean} result
 */
function isEmpty(str) {
  let result = false;
  if (Array.isArray(str)) {
    if (Array.prototype.isPrototypeOf(str) && str.length === 0) result = true;
  } else if (!this.isNull(str)) {
    if (str instanceof Object) {
      if (JSON.stringify(str) == "{}") result = true;
    } else if ((str + "").replace(/(^\s*)|(\s*$)/g, "").length === 0)
      result = true;
  } else result = true;

  return result;
}
