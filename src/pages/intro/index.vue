<!--
 * new page
 * @author: blue
 * @since: 2024-02-27
 * index.vue
-->
<script setup lang="ts">
const containerRef = ref<HTMLElement | null>(null)
const showLeft = ref(false)
const containerClass = computed(() => {
  return {
    left: showLeft.value,
  }
})
function expandToLeft() {
  if (containerRef.value) {
    showLeft.value = !showLeft.value

    const uls = document.querySelectorAll('#container > div > ul')
    for (let i = 0; i < uls.length; i++) {
      uls[i].addEventListener('click', (e) => {
        e.stopPropagation()
      })
    }
  }
}
</script>

<template>
  <div class="wrapper nopre">
    <div id="container" ref="containerRef" :class="containerClass">
      <Continue class="absolute left-0 top-45% z-3 transform-none" :is-rotate="showLeft" @click="expandToLeft" />
      <div id="left" href="#">
        <span>M</span>

        <!--
    (messing around with rainbow animation effect + colors)
    <div class="rainbow"></div>
-->

        <div class="content">
          <h1 data-shadow-text="Personal intro">
            Personal intro
          </h1>
          <div class="intro">
            <span class="intro-text">
              <span>
                哈啰！这里是melingkk,codingName: bluestudyhard
              </span>
              <span>我是一名在校大学生
                热衷于前端开发(cvdafa)-ui设计-制作动效
              </span>
              <span>当然还是一名小小的摄影师和bboxer
                喜欢和了解各种领域的知识~</span>
            </span>
            <div class="avatar">
              <img src="/avatar.png">
            </div>
          </div>
          <h3 data-shadow-text="Me -> To" class="about">
            Know more about
          </h3>
        </div>

        <!--
        <ul>
            <li class="first"><a href="#">CV</a></li>
            <li class="second"><a href="#">Work</a></li>
            <li class="third"><a href="#">Contact</a></li>
        </ul> -->
      </div>

      <div id="right" href="#">
        <span>K</span>

        <div class="content">
          <h1 data-shadow-text="Business half">
            Business half
          </h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <ul>
          <li class="first">
            <a href="https://github.com/bluestudyhard" target="_blank">github</a>
          </li>
          <li class="second">
            <a href="https://github.com/bluestudyhard?tab=repositories" target="_blank">My
              Project</a>
          </li>
          <li class="third">
            <a href="https://blog.melingblue.top/" target="_blank">My Blog</a>
          </li>
          <li class="third">
            <a href="https://space.bilibili.com/30203825" target="_blank">BiliBli</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url(../../styles/intro.scss);
</style>
