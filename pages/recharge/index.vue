<template>
  <div class="mx-auto flex justify-center">
    <div class="w-10/12">
      <div class="border-white rounded-sm p-2 border-2 text-center text-xs text-yellow-300">
        The more recharge amount, the more gift amount!
      </div>
      <div class="relative mt-2 z-0">
        <input type="text" placeholder="请输入手机号" class="p-2 rounded-md w-full border-white rounded-sm border-2 bg-black text-white text-xs">
        <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-white text-sm">+0.00</span>
      </div>
      <div class="mt-2">
        <div class="grid grid-cols-4 gap-2">
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
          <div class="p-2 relative z-0 rounded-md text-center bg-gray-700 text-white text-xs">
            <span>$25</span>
            <span class="absolute right-0 top-0 px-2 bg-orange-500 rounded-bl-md rounded-tr-md text-xs">+0.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import request from '@/middleware/request'
import {useRouter} from 'vue-router'

const router = useRouter();

const isSidebarOpen = ref(true)
onMounted(() => {
  request.get('/tenant1000/v1/oauth/oauth/captcha/image')
      .then((response) => {
        // 处理成功响应
        console.log(response)
      })
      .catch((error) => {
        // 处理错误
      })
})
const goto = (url) => {
  if (url.startsWith('http')) {
    // window.open(url)
    window.location.href = url
  } else {
    router.push(url)
  }
}
</script>

<style>
/* 可以在这里添加额外的样式，但通常使用 TailwindCSS 的实用类就足够了 */
</style>
