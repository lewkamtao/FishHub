function randomInRange(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

/**
 * 人性化时间处理 传入时间 YY-MM-dd hh-mm-ss
 */
function getBeautifyTime(date) {
  var timestamp = new Date(date.replace(/-/g, "/")).getTime();
  var mistiming = Math.round(new Date() / 1000) - timestamp / 1000;
  var postfix = mistiming > 0 ? "前" : "后";
  if (mistiming <= 0) {
    return "刚刚";
  }
  mistiming = Math.abs(mistiming);
  var arrr = ["年", "个月", "星期", "天", "小时", "分钟", "秒"];
  var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
  for (var i = 0; i < 7; i++) {
    var inm = Math.floor(mistiming / arrn[i]);

    if (inm != 0) {
      if (i == 6) {
        return "刚刚";
      }

      return inm + " " + arrr[i] + postfix;
    }
  }
}

const addAlert = ({ type, text }) => {
  let alertListDom = document.getElementById("geek-message-box");
  var newNode = document.createElement("div");
  let svgArr = {
    success: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 176L217.6 336L160 272"></path></svg>`,
    warning: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20z" fill="currentColor"></path></svg>`,
    danger: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 320l128-128"></path></svg>`,
  };
  let alertStyle = `border-bottom-left-radius: ${randomInRange(
    15,
    55
  )}px ${randomInRange(155, 225)}px;
      border-bottom-right-radius:  ${randomInRange(15, 55)}px ${randomInRange(
    155,
    225
  )}px;
      border-top-left-radius:  ${randomInRange(15, 55)}px ${randomInRange(
    155,
    225
  )}px;
      border-top-right-radius: ${randomInRange(15, 55)}px  ${randomInRange(
    155,
    225
  )}px;`;

  newNode.innerHTML = `${svgArr[type]}<span>${text}</span>`;
  newNode.style.cssText = alertStyle;
  newNode.setAttribute("class", `alert alert-${type} shadow`);
  alertListDom.appendChild(newNode, alertListDom.childNodes[0]);
  setTimeout(() => {
    newNode.setAttribute("class", `alert alert-${type} alert-show shadow`);
    setTimeout(() => {
      newNode.setAttribute("class", `alert alert-${type} alert-hidden`);
      setTimeout(() => {
        alertListDom.removeChild(newNode);
      }, 250);
    }, 2500);
  }, 10);
};

function initDomStyle() {
  let domGeekWrapper = document.getElementById("geekWrapper");
  let domGeekHandle = document.getElementById("geekHandle");
  let domgeekSidebar = document.getElementById("geekSidebar");
  // 设置侧边操作台
  if (domGeekHandle) {
    domGeekHandle.style.cssText = `opacity:1;top:${domGeekWrapper.offsetTop + 100
      }px;left:${domGeekWrapper.offsetLeft - 10}px`;
  }
  if (domgeekSidebar) {
    domgeekSidebar.style.cssText = `opacity:1;left:${domGeekWrapper.offsetLeft + domGeekWrapper.clientWidth * 0.6666666
      }px; width:${domGeekWrapper.clientWidth * 0.33333333}px`;
    domGeekWrapper.style.cssText = `opacity:1;`;
  }
}
/**
 * 上传一个文件
 */
async function PUTObject(filePath, objectData) {
  // 初始化实例
  return new Promise((resolve) => {


    fetch('https://cos.api.tngeek.com/GetFederationToken').then(async (res) => {
      res = await res.json()
      console.log(res)
      const opt = {
        method: "PUT",
        headers: {
          Authorization: res.data.Credentials.Token,
          'Content-Type': objectData.type,
        },
        body: objectData,
      };

      fetch(
        'https://tngeek-mall-1255310647.cos.ap-guangzhou.myqcloud.com/' + filePath, opt)
        .then((res) => {
          resolve(
            'https://tngeek-mall-1255310647.cos.ap-guangzhou.myqcloud.com' +
            filePath
          )
        })
    })
  })
}

/**
 * 得到文件的扩展名
 * @param {} filename
 */
function getFileExt(filename) {
  var d = /\.[^\.]+$/.exec(filename)
  var ext = new String(d)
  var s = ext.toLowerCase()
  return s
}


/**
 * 远程链接转Base64
 * @param {} filename
 */
function getBase64(img) {
  function getBase64Image(img, width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL();
    return dataURL;
  }
  var image = new Image();
  image.crossOrigin = '*';
  image.src = img + '?v=' + Math.random();
  return new Promise((resolve, reject) => {
    image.onload = function () {
      resolve(getBase64Image(image));//将base64传给done上传处理
    }
  });
};
 
export default {
  getBeautifyTime,
  randomInRange,
  addAlert,
  initDomStyle,
  PUTObject,
  getFileExt,
  getBase64
};
