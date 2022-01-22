
# Progress

Progress is used to show the progress of current operation, and inform the user the current status.

### Linear progress bar


<template>
  <div class="card-wrap">
    <div class="card">{{ title }}</div>
    <el-button type="primary" @click="onClick">点击</el-button>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'

const title = ref('vitepress-theme-demoblock')

const instance = getCurrentInstance()

const onClick = () => {
  instance.appContext.config.globalProperties.$message.success('消息')
}
</script>



<div class="section-block">
  <div class="progress-widget">
    <div class="progress-widget progress-widget--line" role="progressbar" aria-valuenow="50" aria-valuemin="0"
      aria-valuemax="100">
      <div class="progress-widget__text progress-widget__text--left"><span>0%</span></div>
      <div class="progress-widget-bar">
        <div class="progress-widget-bar__outer">
          <div class="progress-widget-bar__inner" style="width: 60%;"></div>
        </div>
      </div>
      <div class="progress-widget__text"><span>60%</span></div>
    </div>
  </div>
  
  <div class="progress-widget">
    <div class="progress-widget progress-widget--line" role="progressbar" aria-valuenow="50" aria-valuemin="0"
      aria-valuemax="100">
      <div class="progress-widget-bar">
        <div class="progress-widget-bar__outer">
          <div class="progress-widget-bar__inner" style="width: 40%;"></div>
        </div>
      </div>
      <div class="progress-widget__text"><span>40%</span></div>
    </div>
  </div>
</div>


```html
  <div class="progress-widget">
    <div class="progress-widget progress-widget--line" role="progressbar" aria-valuenow="50" aria-valuemin="0"
      aria-valuemax="100">
      <div class="progress-widget__text progress-widget__text--left"><span>0%</span></div>
      <div class="progress-widget-bar">
        <div class="progress-widget-bar__outer">
          <div class="progress-widget-bar__inner" style="width: 60%;"></div>
        </div>
      </div>
      <div class="progress-widget__text"><span>60%</span></div>
    </div>
  </div>
  
  <div class="progress-widget">
    <div class="progress-widget progress-widget--line" role="progressbar" aria-valuenow="50" aria-valuemin="0"
      aria-valuemax="100">
      <div class="progress-widget-bar">
        <div class="progress-widget-bar__outer">
          <div class="progress-widget-bar__inner" style="width: 40%;"></div>
        </div>
      </div>
      <div class="progress-widget__text"><span>40%</span></div>
    </div>
  </div>
```


### Internal percentage

In this case the percentage takes no additional space.

<div class="section-block">
  <div class="progress-widget">
    <div class="progress-widget progress-widget--line progress-widget--text-inside" role="progressbar" aria-valuenow="70"
      aria-valuemin="0" aria-valuemax="100">
      <div class="progress-widget-bar">
        <div class="progress-widget-bar__outer" style="height: 26px;">
          <div class="progress-widget-bar__inner" style="width: 70%; animation-duration: 3s;">
            <div class="progress-widget-bar__innerText"><span>70%</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>      

```html
<div class="progress-widget">
  <div class="progress-widget progress-widget--line progress-widget--text-inside" role="progressbar" aria-valuenow="70"
    aria-valuemin="0" aria-valuemax="100">
    <div class="progress-widget-bar">
      <div class="progress-widget-bar__outer" style="height: 26px;">
        <div class="progress-widget-bar__inner" style="width: 70%; animation-duration: 3s;">
          <div class="progress-widget-bar__innerText"><span>70%</span></div>
        </div>
      </div>
    </div>
  </div>
</div>
```



<style lang="scss">
.section-block {
  margin-top: 30px;
}


$progress-text-color: #616367 !default;
$progress-background-color: #ebeef5 !default;
$progress-color: #409eff !default;
$progress-bar-radius: 100px !default;
$progress-bar-height: 6px !default;

// Demo
.progress-widget {
  width: 300px;
  margin-bottom: 10px;
}

.progress-widget {
  position: relative;
  line-height: 1;
  display: flex;
  align-items: center;

  &-bar {
    flex-grow: 1;
    box-sizing: border-box;

    &__outer {
      height: $progress-bar-height;
      border-radius: $progress-bar-radius;
      background-color: $progress-background-color;
      overflow: hidden;
      position: relative;
      vertical-align: middle;
    }

    &__inner {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: $progress-color;
      text-align: right;
      border-radius: $progress-bar-radius;
      line-height: 1;
      white-space: nowrap;
      transition: width .6s ease;
      animation-duration: 3s;
    }

    &__inner::after {
      display: inline-block;
      content: "";
      height: 100%;
      vertical-align: middle;
    }
  }

  &__text {
    font-size: 14px;
    color: $progress-text-color;
    margin-left: 5px;
    min-width: max-content;
    // min-width: 50px;
    line-height: 1;

    &--left {
      margin-right: 5px;
      margin-left: 0;
    }
  }

  // Internal percentage
  &--text-inside .progress-widget-bar {
    padding-right: 0;
    margin-right: 0;
  }

  &-bar__innerText {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    font-size: 12px;
    margin: 0 5px;
  }
}
</style>