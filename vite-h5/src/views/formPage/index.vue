<template>
  <div class="form_container">
    <div class="name">这是一个表单</div>
	<!-- svg的使用 -->
    <svg-icon icon-class="link" />
    <van-form @submit="handleSubmit">
      <van-cell-group inset>
        <van-field
          v-model="messageForm.userName"
          name="validator"
          placeholder="姓名"
          label="姓名："
          :rules="[{ required: true, message: '请输入姓名', trigger: 'blur' }]"
        />
        <van-field
          v-model="messageForm.age"
          name="validator"
          placeholder="请输入年龄"
          label="年龄："
          :rules="[{ required: true, message: '请输入年龄', trigger: 'blur' }]"
        />
        <van-field
          v-model="messageForm.sex"
          name="validator"
          placeholder="性别"
          label="性别："
          :rules="[{ required: true, message: '请输入性别', trigger: 'blur' }]"
        />
        <van-field
          v-model="messageForm.address"
          name="validator"
          placeholder="地址"
          label="地址："
          :rules="[{ required: true, message: '请输入地址', trigger: 'blur' }]"
        />
        <van-field
          v-model="messageForm.email"
          name="validator"
          placeholder="邮箱"
          label="邮箱："
          :rules="[{ required: true, message: '请输入邮箱', trigger: 'blur' }]"
        />
        <van-field
          v-model="messageForm.phone"
          name="validator"
          placeholder="电话"
          label="电话："
          :rules="[
            { required: true, message: '请输入电话号码', trigger: 'blur' },
          ]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import {
  defineComponent,
  reactive,
  toRefs,
} from "vue";
// import { Notify } from 'vant'
export default defineComponent({
  name: "FormPage",
  setup() {
    const dataForm = reactive({
      messageForm: {
        userName: "",
        age: "",
        sex: "",
        address: "",
        email: "",
        phone: "",
      },
    });
	// Notify({
	// 	type: 'danger',
	// 	message: 'djksadbsadjsada'
	// })
	const handleSubmit = () => {
		// console.log(dataForm.messageForm.userName)
		// 此处提交数据
	}
    return {
		handleSubmit,
      ...toRefs(dataForm),
    };
  },
});
</script>
<style lang="scss" scoped>
.form_container {
  // width: 100%;
  height: 100vh;
  padding-top: 40px;
  .name {
    font-size: 24rpx;
    font-weight: 700;
    color: red;
    text-align: center;
  }
}
</style>
