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
    domGeekHandle.style.cssText = `opacity:1;top:${
      domGeekWrapper.offsetTop + 100
    }px;left:${domGeekWrapper.offsetLeft - 10}px`;
  }
  if (domgeekSidebar) {
    domgeekSidebar.style.cssText = `opacity:1;left:${
      domGeekWrapper.offsetLeft + domGeekWrapper.clientWidth * 0.6666666
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
    fetch("https://cos.api.tngeek.com/GetFederationToken").then(async (res) => {
      res = await res.json();
      console.log(res);
      const opt = {
        method: "PUT",
        headers: {
          Authorization: res.data.Credentials.Token,
          "Content-Type": objectData.type,
        },
        body: objectData,
      };

      fetch(
        "https://tngeek-mall-1255310647.cos.ap-guangzhou.myqcloud.com/" +
          filePath,
        opt
      ).then((res) => {
        resolve(
          "https://tngeek-mall-1255310647.cos.ap-guangzhou.myqcloud.com" +
            filePath
        );
      });
    });
  });
}

/**
 * 得到文件的扩展名
 * @param {} filename
 */
function getFileExt(filename) {
  var d = /\.[^\.]+$/.exec(filename);
  var ext = new String(d);
  var s = ext.toLowerCase();
  return s;
}

/**
 * 1000+简写为K，10000+简写为W
 * @param {} filename
 */

function numFormat(num) {
  if (!num) {
    return 0;
  }
  if (num >= 10000) {
    num = Math.round(num / 1000) / 10 + "w";
  } else if (num >= 1000) {
    num = Math.round(num / 100) / 10 + "k";
  }
  return num;
}

const wxLogin = async ($api) => {
  let qrcode = await $api.GET("/wx/loginQrcode", {});
  const geekModalSwitch = document.getElementById("geek-modal");
  const geekModalBody = document.getElementById("geek-modal-body");

  geekModalBody.innerHTML = `<label class="btn-close" for="geek-modal">X</label>

  <div class="wxlogin-box" style="
  width:300px;
    display: flex; 
    align-items: center;
    flex-direction: column;">
  <div style="display: flex; align-items: center;">
<svg style="width:30px;height:30px;margin-right:10px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path data-name="XMLID 501 -1" d="M408.67 298.53a21 21 0 1 1 20.9-21a20.85 20.85 0 0 1-20.9 21m-102.17 0a21 21 0 1 1 20.9-21a20.84 20.84 0 0 1-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35s68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7c2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 0 1 8.13 2.34L454 462.83a11.62 11.62 0 0 0 3.48 1.17a5 5 0 0 0 4.65-4.66a14.27 14.27 0 0 0-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 0 1-.33-3.47a11.4 11.4 0 0 1 5-9.35" fill="#2ba245"></path><path data-name="XMLID 505 -7" d="M246.13 178.51a24.47 24.47 0 0 1 0-48.94c12.77 0 24.38 11.65 24.38 24.47c1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 1 1 147.45 154a24.57 24.57 0 0 1-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 0 1-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 0 0 5.8 5.83a7.15 7.15 0 0 0 3.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 0 1 5.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 0 1-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48" fill="#2ba245"></path></svg>
       微信扫码登录</div>
  <img style="width:200px;height:200px;border: 2px #000 solid; background:#eee;margin:25px 10px" src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${qrcode.data.ticket}">
  <p style="width:250px;color:#999">打开微信App，点击聊天列表右上角加号，点击扫一扫。</p>
  </div>  `;
  geekModalSwitch.checked = true;
  checkLogin({ $api: $api, ticket: qrcode.data.ticket });
};

const checkLogin = async ({ $api, ticket }) => {
  const token = useCookie("token", { maxAge: 2419200 });
  let loginRes = await $api.GET("/wx/checkLogin", { ticket: ticket });
  if (loginRes.code == 200) {
    token.value = loginRes.data;
    const geekModalSwitch = document.getElementById("geek-modal");
    geekModalSwitch.checked = false;
    addAlert({
      type: "success",
      text: "登录成功",
    });
    setTimeout(() => {
      location.reload();
    }, 250);
  } else if (loginRes.code == 404) {
    const geekModalSwitch = document.getElementById("geek-modal");
    if (geekModalSwitch.checked) {
      setTimeout(() => {
        checkLogin({ $api, ticket });
      }, 1000);
    }
  } else {
    addAlert({
      type: "danger",
      text: "服务端发送错误" + loginRes.tip,
    });
  }
};

export default {
  getBeautifyTime,
  randomInRange,
  addAlert,
  initDomStyle,
  PUTObject,
  getFileExt,
  numFormat,
  wxLogin,
};
