<template>
    <div class="f-header">
        <!-- logo -->
        <span class="logo">
            <div class="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <g clip-path="url(#clip0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.37754 16.9795L12.7498 9.43027C14.7163 7.41663 17.9428 7.37837 19.9564 9.34482C19.9852 9.37297 20.0137 9.40145 20.0418 9.43027L20.1221 9.51243C22.1049 11.5429 22.1049 14.7847 20.1221 16.8152L12.7498 24.3644C10.7834 26.378 7.55686 26.4163 5.54322 24.4498C5.5144 24.4217 5.48592 24.3932 5.45777 24.3644L5.37754 24.2822C3.39468 22.2518 3.39468 19.0099 5.37754 16.9795Z" fill="#12D2AC"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0479 9.43034L27.3399 16.8974C29.3674 18.9735 29.3674 22.2883 27.3399 24.3644C25.3735 26.3781 22.147 26.4163 20.1333 24.4499C20.1045 24.4217 20.076 24.3933 20.0479 24.3644L12.7558 16.8974C10.7284 14.8213 10.7284 11.5065 12.7558 9.43034C14.7223 7.4167 17.9488 7.37844 19.9624 9.34489C19.9912 9.37304 20.0197 9.40152 20.0479 9.43034Z" fill="#307AF2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1321 9.52163L23.6851 13.1599L16.3931 20.627L9.10103 13.1599L12.6541 9.52163C14.6707 7.45664 17.9794 7.4174 20.0444 9.434C20.074 9.46286 20.1032 9.49207 20.1321 9.52163Z" fill="#0057FE"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="26" height="19" fill="white" transform="translate(3.5 7)"/>
                    </clipPath>
                    </defs>
                </svg>
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
        <el-select
          :style="{ width: '160px', margin: '30px' }"
          placeholder="Please select ..."
          default-value="Project 1"
        >
          <el-option>Project 1</el-option>
          <el-option>Project 2</el-option>
          <el-option>Project 3</el-option>
        </el-select>
       
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

    <!-- <form-drawer ref="formDrawerRef" title="修改密码" destroyOnClose @submit="onSubmit">
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
    </form-drawer> -->
</template>
<script setup>
// import FormDrawer from '~/components/FormDrawer.vue'
// import { useFullscreen } from '@vueuse/core'
// import { useRepassword,useLogout } from "~/composables/useManager"

// const {
//     // 是否全屏状态
//     isFullscreen,
//     // 切换全屏
//     toggle
// } = useFullscreen()

// const {
//     formDrawerRef,
//     form,
//     rules,
//     formRef,
//     onSubmit,
//     openRePasswordForm
// } = useRepassword()

// const {
//     handleLogout
// } = useLogout()

// const handleCommand = (c) => {
//     switch (c) {
//         case "logout":
//             handleLogout()
//             break;
//         case "rePassword":
//             openRePasswordForm()
//             break;
//     }
// }

// // 刷新
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

}

.mr-1{
    /* border:1px solid red; */
    width: 40px;
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