<style lang="scss" scoped>
#GeekAvatarEdit {
  max-width: 400px;
  max-height: 400px;
}
.title {
  font-size: 18px;
}
</style>

<template>
  <div class="geek-modal">
    <span v-show="false" id="geekAvatarEditUserId"></span>
    <input
      v-show="false"
      id="upAvatar"
      type="file"
      @change="updateAvatar"
      accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
    />
    <input
      class="modal-state"
      id="geekAvatarEditModal"
      type="checkbox"
      v-show="false"
    />
    <div class="modal">
      <div class="modal-body">
        <div class="title margin-bottom">更新你的头像</div>
        <div class="geek-avatar-edit">
          <img id="GeekAvatarEdit" crossorigin="anonymous" />
        </div>
        <div class="row flex-center">
          <label for="upAvatar">
            <a class="paper-btn btn-small margin-top"> 重新上传 </a></label
          >
          <button class="btn-small margin-top margin-left" @click="saveFn">
            保存头像
          </button>
          <button class="btn-small margin-top margin-left" @click="closeFn">
            关闭
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 头像裁剪
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import util from "~~/util";
import { ref, onMounted } from "vue";
const { $api } = useNuxtApp();
const cropper = ref({} as any);

const src = ref<any>("");
const user_id = ref<any>({});

const init = () => {
  const GeekAvatarEdit: any = document.getElementById("GeekAvatarEdit");
  cropper.value = new Cropper(GeekAvatarEdit, {
    viewMode: 1,
    dragMode: "none",
    initialAspectRatio: 1,
    aspectRatio: 1,
    preview: ".before",
    background: false,
    autoCropArea: 0.8,
    zoomOnWheel: false,
  });
};

const updateAvatar = async (e) => {
  var oFReader = new FileReader();
  var file = e.target.files[0];
  oFReader.readAsDataURL(file);
  oFReader.onloadend = function (oFRevent) {
    cropper.value.replace(oFRevent.target.result, false); // 默认false，适应高度，不失真
    const geekAvatarEditModal: any = document.getElementById(
      "geekAvatarEditModal"
    );
    if (!geekAvatarEditModal.checked) {
      geekAvatarEditModal.checked = true; // 打开加载窗口
    }
  };
};

const saveFn = () => {
  cropper.value.getCroppedCanvas().toBlob(async function (blob) {
    const geekModalSwitch: any = document.getElementById("geek-modal");
    const geekModalBody: any = document.getElementById("geek-modal-body");
    geekModalBody.innerHTML = `<div style="display:flex; height:100px;width:180px;align-items: center;justify-content: center;">上传中，请耐心等待。</div>`;
    geekModalSwitch.checked = true; // 打开加载窗口
    const geekAvatarEditModal: any = document.getElementById(
      "geekAvatarEditModal"
    );
    geekAvatarEditModal.checked = false;

    const resFileUrl = await util.PUTObject(
      `/user/${user_id.value}/avatar/${new Date().getTime()}.jpeg`,
      blob
    );
    const res: any = await $api.PUT("/user/updateAratar", {
      avatar: resFileUrl,
    });
    geekModalSwitch.checked = false; // 关闭加载窗口
    if (res.code == 200) {
      util.addAlert({
        type: "success",
        text: "更新成功",
      });

      setTimeout(() => {
        location.reload();
      }, 1000);
    } else {
      geekAvatarEditModal.checked = true;
      util.addAlert({
        type: "danger",
        text: res.tips,
      });
    }
  }, "image/jpeg");
};

const closeFn = () => {
  const geekAvatarEditModal: any = document.getElementById(
    "geekAvatarEditModal"
  );
  geekAvatarEditModal.checked = false;
};
const route = useRoute();

onMounted(() => {
  // 设置用户头像 和 id
  const geekAvatarEditUserId: any = document.getElementById(
    "geekAvatarEditUserId"
  );

  user_id.value = geekAvatarEditUserId.innerHTML;
  init();
});
</script>
