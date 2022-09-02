<template>
    <div class="f-header">
        <!-- logo -->
        <span class="logo">
            <div class="mr-1">
                <img src="../../assets/logo.png" alt="" />
            </div>
            前端监控平台
        </span>
        <!-- 面包屑 -->
        <el-icon class="icon-btn" @click="$store.commit('user/setAsideWidth')">
            <fold v-if="$store.getters.asideWidth == '250px'" />
            <Expand v-else/>
        </el-icon>

        <!-- 刷新 -->
        <el-tooltip effect="dark" content="刷新" placement="bottom">
            <el-icon class="icon-btn" @click="handleRefresh">
                <refresh />
            </el-icon>
        </el-tooltip>

        <!-- 项目部分 -->
        <a-select
          :style="{ width: '160px', margin: '30px',background:'white' }"
          placeholder="Please select ..."
          default-value="Project 1"
        >
          <a-option>Project 1</a-option>
          <a-option>Project 2</a-option>
          <a-option>Project 3</a-option>
        </a-select>
       
        <div class="ml-auto flex items-center">
            <!-- 全屏 -->
            <el-tooltip effect="dark" content="全屏" placement="bottom">
                <el-icon class="icon-btn" @click="toggle">
                    <full-screen v-if="!isFullscreen" />
                    <aim v-else />
                </el-icon>
            </el-tooltip>

            <!-- 头像 -->
            <el-dropdown class="dropdown" @command="handleCommand">
                <span class="flex items-center ">
                    <el-avatar class="mr-2" :size="25" :src="$store.state.user.avatar" />
                    {{ $store.state.user.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

    <Drawer ref="formDrawerRef" title="修改密码" destroyOnClose @submit="onSubmit">
        <el-form ref="formRef" :rules="rules" :model="form" label-width="80px" size="small">
            <el-form-item prop="oldpassword" label="旧密码">
                <el-input v-model="form.oldpassword" placeholder="请输入旧密码"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="新密码">
                <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item prop="repassword" label="确认密码">
                <el-input type="password" v-model="form.repassword" placeholder="请输入确认密码" show-password></el-input>
            </el-form-item>
        </el-form>
    </Drawer>
</template>
<script setup>
// 侧面板
import Drawer from '../../components/Drawer.vue';
import { useFullscreen } from '@vueuse/core'
import { useRepassword,useLogout } from "@/composables/useManager"

const {
    // 是否全屏状态
    isFullscreen,
    // 切换全屏
    toggle
} = useFullscreen()

const {
    formDrawerRef,
    form,
    rules,
    formRef,
    onSubmit,
    openRePasswordForm
} = useRepassword()

const {
    handleLogout
} = useLogout()

const handleCommand = (c) => {
    switch (c) {
        case "logout":
            handleLogout()
            break;
        case "rePassword":
            openRePasswordForm()
            break;
    }
}

// 刷新
// const handleRefresh = () => location.reload()
</script>

<style>
.f-header {
    /* @apply flex items-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0; */
    @apply flex items-center bg-light-50 fixed top-0 left-0 right-0;
    height: 64px;
    z-index: 1000;
    border-bottom: 1px solid #e5e7eb;
    overflow: hidden;
}
.f-header::before {
            background: url(../../assets/bg.jpg) no-repeat;
            content: '';
            display: block;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            filter: blur(20px);
}


.logo {
    width: 250px;
    @apply flex justify-center items-center text-xl ;
    font-weight: bold;
    color: #6d7280;
    color:#303133;
}

.mr-1{
    width: 40px;
    /* transform: rotateX(180deg); */
    /* transform: rotateY(-180deg); */
    /* transform: scaleX(-1) rotateX(180deg); */
}
.icon-btn {
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    cursor: pointer;
}

.icon-btn:hover {
    /* @apply bg-indigo-600; */
    background-color:white;
    
}

.f-header .dropdown {
    height: 64px;
    cursor: pointer;
    @apply flex justify-center items-center mx-5;
}
</style>