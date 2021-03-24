<template>
  <div class="arrow-down"><span></span></div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.arrow-down {
  position: relative;
  width: 0;
  height: 0;
  border-top: 10px solid #8891a1;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  transform: scaleX(1.4);

  span {
    display: block;
    position: absolute;
    top: -11px;
    left: -6px;
    width: 0;
    height: 0;
    border-top: 8px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
}
</style>
