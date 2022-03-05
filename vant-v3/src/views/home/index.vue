<template>
    <div>
        <van-button type="primary">sadsadsadas</van-button>
        <div class="test">
            <div class="inner">ascsjcjsnjsc</div>
        </div>
        <van-tabs v-model="active">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "Home",
    setup() {
        const active = ref(2);
        return {
            active,
        };
    },
});
</script>
<style lang="scss" scoped>
.test {
    .inner {
        font-size: 24px;
    }
}
</style>
