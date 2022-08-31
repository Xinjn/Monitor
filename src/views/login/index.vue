<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
          <div>
              <!-- <div>欢迎光临</div> -->
              <!-- <div>此站点为演示地址</div> -->
          </div>
      </el-col>
      <el-col :lg="8" :md="12" class="right">
 
          <h2 class="title">
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
            欢迎回来
          </h2>
          <div>
              <span class="line"></span>
              <span>账号密码登录</span>
              <span class="line"></span>
          </div>
          <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
              <el-form-item prop="username">
                  <el-input v-model="form.username" placeholder="用户名：admin">
                      <template #prefix>
                          <el-icon><user /></el-icon>
                      </template>
                  </el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input type="password" v-model="form.password" placeholder="密码：admin" show-password>
                      <template #prefix>
                          <el-icon><lock /></el-icon>
                      </template>
                  </el-input>
              </el-form-item>
              <el-form-item>
                  <el-button round color="#6197fd" class="w-[250px]" type="primary" @click="onSubmit" :loading="loading">
                      <span class="login">登 录</span>    
                  </el-button>
              </el-form-item>
              <el-form-item>
                  <el-button round color="#e3e7f1" class="w-[250px]" type="primary"  :loading="loading">
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

// do not use same name with ref
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
      }).finally(()=>{
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
  @apply flex  font-bold text-3xl text-gray-800;
  > svg {
    margin-right:10px;
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