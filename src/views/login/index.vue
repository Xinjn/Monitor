<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
          <div>
              <!-- <div>欢迎光临</div> -->
              <!-- <div>此站点为演示地址</div> -->
          </div>
      </el-col>
      <el-col :lg="8" :md="12" class="right">
          <!-- Header -->
          <h2 class="title">
            <img src="../../assets/logo.png" >
            欢迎回来
          </h2>
          <!-- Tip -->
          <div>
              <span class="line"></span>
              <span>账号密码登录</span>
              <span class="line"></span>
          </div>
          <!-- Form -->
          <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
              <!-- username -->
              <el-form-item prop="username">
                  <el-input v-model="form.username" placeholder="用户名：admin">
                      <template #prefix>
                          <el-icon><user /></el-icon>
                      </template>
                  </el-input>
              </el-form-item>
              <!-- password -->
              <el-form-item prop="password">
                  <el-input type="password" v-model="form.password" placeholder="密码：admin" show-password>
                      <template #prefix>
                          <el-icon><lock /></el-icon>
                      </template>
                  </el-input>
              </el-form-item>
              <!-- login -->
              <el-form-item>
                  <el-button round color="#6197fd" class="w-[250px]" type="primary" @click="onSubmit" :loading="loading">
                      <span class="login">登 录</span>    
                  </el-button>
              </el-form-item>
              <!-- register -->
              <el-form-item>
                  <el-button round color="#e3e7f1" class="w-[250px]" type="primary" >
                      <span class="register">注 册</span>    
                  </el-button>
              </el-form-item>
          </el-form>
      </el-col>

  </el-row>
</template>

<script setup>
import { ref,reactive,onMounted,onBeforeUnmount } from 'vue'
import { toast } from '@/composables/util'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const form = reactive({
  username:"",
  password:""
})

const rules = {
  username:[
      { 
          required: true, 
          message: '用户名不能为空', 
          trigger: 'blur' 
      },
  ],
  password:[
      { 
          required: true, 
          message: '用户名不能为空', 
          trigger: 'blur' 
      },
  ]
}

const formRef = ref(null)
const loading = ref(false)

const onSubmit = () => {
  formRef.value.validate((valid)=>{
      if(!valid){
          return false
      }
      loading.value = true
      store.dispatch("user/login",form)
      .then(res=>{
        toast("登录成功")
        router.push("/")
      }).catch(err=>{
        toast(err,'error')
      })
      .finally(()=>{
        loading.value = false
      })
  })
}

// 监听回车事件
function onKeyUp(e){
  if(e.key == "Enter") onSubmit()
}

// 添加键盘监听
onMounted(()=>{
  document.addEventListener("keyup",onKeyUp)
})
// 移除键盘监听
onBeforeUnmount(()=>{
  document.removeEventListener("keyup",onKeyUp)
})
</script>

<style scoped>
.login-container{
  @apply min-h-screen;
  /* background: url(../assets/bg.jpg) */
}
.login-container::before {
          background: url(@/assets/bg.jpg) no-repeat ;
          content: '';
          display: block;
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          /* filter: blur(3px); */
      }

.login-container .left,.login-container .right{
  @apply flex items-center justify-center;
}
.login-container .right{
  @apply bg-light-50 flex-col;
}
.left>div>div:first-child{
  @apply font-bold text-5xl text-light-50 mb-4;
}
.left>div>div:last-child{
  @apply text-gray-200 text-sm;
}
.right .title{
  @apply  font-bold text-3xl text-gray-800;
    display: flex;
    align-items: center;
    > img {
    margin-right:5px;
    width:50px;
  }
}
.right>div{
  @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}
.right .line{
  @apply h-[1px] w-16 bg-gray-200;
}
.login{
  color:aliceblue
}
.register{
  @apply text-gray-400;
}
</style>