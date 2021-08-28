<template>
  <div id="main" class="h-screen grid grid-rows-[98px,auto,64px] text-white">
   <div id="navbar" class="pt-[26px] pl-[46px] text-[32px] font-bold">
   <a href="/"><font color="#FF7B00">i</font>Shorten</a>
   </div> 
   <div id="route" class="grid items-center justify-center">
    <div class="mb-[140px]">
   <router-view></router-view>
   </div>
   </div>
   <div class="text-[12px] grid grid-cols-[max-content,max-content] gap-[5px] w-full justify-center items-center">
    © 2021 - Open source on <a href="https://github.com/i358/iShorten" target="_blank" class="font-semibold hover:text-[#FF7B00] hover:underline transition-all delay-[3s]">Github</a>
   </div>
  </div>     
</template>

     
<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
@import "@/assets/styles/index.scss";
</style>
                