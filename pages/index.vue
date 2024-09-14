<template>
    <div>
        <header class=" bg_1b0e3ah flex justify-between pl-4 pr-20 items-center pb-1 pt-1" style="width:100%">
            <div class="header-left flex ">
                <img @click="isSidebarOpen = !isSidebarOpen" class=" w-4 h-4 mr-1 mt-1.5 ml-2"
                    src="@/assets/images/ham.png" alt="">
                <img class=" w-10 h-6 " src="@/assets/images/logo.png" alt="">
            </div>
            <div class="header-right flex items-center ">
                <div class="header-r mr-3 flex bg_color rounded-full w-16 items-center  ">
                    <span class=" inline-block "></span>
                    <img src="~/assets/images/icon.png" class=" w-4 ml-4 h-3" alt="" srcset="">
                    <span class="text-gray-100 text14 pl-0.5 pr-0.5" style="font-size: 16px;">0</span>
                    <img src="~/assets/images/inon2.png" class=" w-3 h-3 mt-1 imageIcon"
                        :class="{ 'rotating': isRotating }" @click="rotateImage">
                </div>
                <div class="flex relative mr-3">
                    <div class="mr-3 ">
                        <img class=" w-8 h-8" src="@/assets/images/icon3.png" alt="">
                    </div>
                    <div class="text-gray-100 text-xs">
                        <div class="text14"><van-icon name="arrow-up" /></div>
                        <div class="text14">id:123</div>
                    </div>
                    <div class=" absolute  px-2 py-2 top-9 w-80 h-80 -left-60 bg121725 rounded">
                        <div class="flex justify-between">
                            <div class="flex">
                                <img class=" w-8 h-8" src="@/assets/images/icon3.png" alt="">
                                <span ref="textToCopy" class="text-gray-100 ml-2 mt-2 text14">ID:10000</span>
                                <img src="@/assets/images/copy.png"
                                    class=" w-2 h-2  inline-block mt-3 ml-1  cursor-pointer" @click="handleCopy" />
                            </div>
                            <div class="flex">
                                <img src="@/assets/images/quit.png" class=" w-4 h-4  inline-block cursor-pointer"
                                    @click="handleCopy" />
                            </div>
                        </div>
                        <div>
                            <van-cell class="text-gray-100 mb-2 rounded-md bg2a2e3e" title="Transaction History" is-link
                                to="index" :border="false" />
                            <van-cell class="text-gray-100 mb-2 rounded-md bg2a2e3e" title="Bet History" is-link
                                to="index" :border="false" />
                            <van-cell class="text-gray-100 mb-2 rounded-md bg2a2e3e" title="Notifications" is-link
                                to="index" :border="false" />
                            <van-cell class="text-gray-100 mb-2 rounded-md bg2a2e3e" title="Special Promotions" is-link
                                to="index" :border="false" />


                            <div class="listWrap bg15233a">
                                <div class="listWrapTop flex justify-between px-2">
                                    <span style="color: #ed812c;">LV0</span>
                                    <span class="text-gray-100 "><van-icon name="arrow" /></span>
                                </div>

                                <div class="listWrapButton relative">
                                    <div class="flex justify-between">
                                        <span
                                            class=" absolute top-1.5 left-2 z-10 text-gray-100 text14 font-black">VIP0</span>
                                        <span
                                            class=" absolute top-1.5 z-10 right-1 text-gray-100 text14 font-black">VIP1</span>
                                    </div>
                                    <div class="progressBar">
                                        <div class="progress" :style="{ width: progress + '%' }"></div>
                                    </div>
                                </div>
                                <div class="listWrapButton relative">
                                    <div class="flex justify-between">
                                        <span
                                            class=" absolute top-1.5 left-2 z-10 text-gray-100 text14 font-black">VIP0</span>
                                        <span
                                            class=" absolute top-1.5 z-10 right-1 text-gray-100 text14 font-black">VIP1</span>
                                    </div>
                                    <div class="progressBar">
                                        <div class="progress" :style="{ width: progress + '%' }"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <img class=" w-8 h-8  ml-1" src="@/assets/images/tz.png">
                </div>
            </div>
        </header>

        <div>

            <div class="flex">
                <div>
                    <!-- 侧边栏遮罩层 -->
                    <div v-if="isSidebarOpen" class="inset-0 r-width">
                        <!-- 背景遮罩 @click="isSidebarOpen = false" -->
                        <div class="fixed inset-0 bg-opacity-0"></div>

                        <!-- 侧边栏内容 -->
                        <div class="absolute top-0 left-0 bottom-0 z-30 pb-4 w-60 shadow-lg transform transition-transform ease-in-out duration-700 bg-slate-600"
                            :class="{ 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen }">
                            <div>
                                <div class="relative  mb-4  flex items-center justify-between w-full z-50 bg_1b0e3ah">
                                    <img :src="logo1" class="ml-4 w-14 mt-0.5 mb-0.5">
                                    <img class="ml-3 w-6 " @click="isSidebarOpen = !isSidebarOpen" :src="p1">
                                </div>
                                <div class="relative pl-4 pr-4" @click="goto('https://www.baidu.com/')">
                                    <img :src="b1">
                                    <span class="absolute top-3 left-3 text-xs pl-4 text-white">electronics
                                        channel</span>
                                </div>
                                <div class="mt-2 relative pl-4 pr-4" @click="goto('/recharge')">
                                    <img :src="b2">
                                    <span class="absolute top-3 left-3 pl-4 text-xs text-white">First deposit</span>
                                </div>
                                <div class="mt-2 relative pl-4 pr-4" @click="goto('/')">
                                    <img :src="b3">
                                    <span class="absolute top-3 pl-4 left-3 text-xs text-white">Chargeback</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="flex-1">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import { copyToClipboard, showMessage } from '@/utils/index'
// import request from '@/middleware/request'
import b1 from '@/assets/images/b1.png'
import b2 from '@/assets/images/b2.png'
import b3 from '@/assets/images/b3.png'
import logo1 from '@/assets/images/logo1.png'
import p1 from '@/assets/images/p1.png'
import { useRouter } from 'vue-router'

const router = useRouter();
const isRotating = ref(false)
const textToCopy = ref(null);  // 用于获取文本元素的引用
const copySuccess = ref(false); // 用于显示复制状态

const progress = ref(10); // 初始化进度为 0

const isSidebarOpen = ref(true)
onMounted(() => {
    window.addEventListener('resize', windowResize)
    //   request.get('/tenant1000/v1/oauth/oauth/captcha/image')
    //       .then((response) => {
    //         // 处理成功响应
    //         console.log(response)
    //       })
    //       .catch((error) => {
    //         // 处理错误
    //       })
})
const windowResize = () => {
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (windowWidth < 750) {
        isSidebarOpen.value = false
    } else {
        isSidebarOpen.value = true
    }
}
const goto = (url) => {
    if (url.startsWith('http')) {
        // window.open(url)
        window.location.href = url
    } else {
        router.push(url)
    }
}
const rotateImage = () => {
    // 开始旋转
    isRotating.value = false;
    // 1秒后动画结束，停留在旋转后的位置
    setTimeout(() => {
        isRotating.value = true; // 可选：不需要重置可以删除这行
    }, 10); // 1秒与 CSS 动画时间匹配
}
// 文本复制
const handleCopy = async () => {

    const text = textToCopy.value.innerText; // 获取要复制的文本
    const success = await copyToClipboard(text); // 复制文本
    if (success) {
        showMessage('复制成功!');
    } else {
        showMessage('复制失败，请重试!');
    }
}
</script>

<style>
/* 可以在这里添加额外的样式，但通常使用 TailwindCSS 的实用类就足够了 */


.bg_1b0e3ah {
    background: #1b0e3a;
}

/* web */
@media (max-width: 414px) {
    .bg_1b0e3ah {
        background: #1b0e3a;
    }

    .header-r {
        height: .3rem;
    }

    .text14 {
        font-size: 0.28rem;
    }
}

/* pc端 */

@media (min-width: 1024px) and (max-width: 1440px) {
    .bg_color {
        background: #5b5bff;
    }

    .text14 {
        font-size: 14px;
    }

    .header-r {
        height: 30px;
    }
}

.imageIcon {
    transition: transform 1s;
    /* 动画过渡效果，持续1秒 */
}

.rotating {
    transform: rotate(180deg);
    /* 旋转一圈 */
}

.bg121725 {
    background: #121725;
}

.bg2a2e3e {
    background: #2a2e3e;
    color: #fff
}

/* .progressBar{
    background: #f00;
    width: 300px;
    height: 20px;
    border-radius: 50px;
} */

.progressBar {
    background: #304149;
    /* 红色底色 */
    width: 100%;
    /* 进度条总宽度 */
    height: 20px;
    border-radius: 50px;
    position: relative;
    margin-top: 10px;
    overflow: hidden;
    /* 防止超出边界 */
}

.progress {
    background-image: linear-gradient(90deg, #14e2f5, #93dd77, #f9d912);
    /* 灰色进度条 */
    height: 100%;
    border-radius: 50px;
    transition: width 0.8s ease
}

.bg15233a {
    background: linear-gradient(180deg, #182d30, #15233a)
}
</style>
