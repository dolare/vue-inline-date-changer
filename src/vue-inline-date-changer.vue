<template>
  <div class="wrapper">
    <div class="inner">
    <span @click="leftMove()">
      <i class="fas fa-caret-left"><i>
    </span>
    {{dateConcert()}} 
    <span>
      <i class="fas fa-caret-right"><i>
    </span>
    </div>
  </div>
</template>

<script>
  import { moment } from 'moment'
  export default {
    name: 'vue-inline-date-changer',
    props: ['date'],
    methods: {
      dateConvert: function () {
        return moment(this.date).format('LL')
      },
      leftMove: function () {
        this.date = this.date - 86400000
      },
      rightMove: function () {
        this.date = this.date + 86400000
      }
    }
  }
</script>

<style lang="scss">
  .wrapper {
    text-aligh: center;
  }
  .inner {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2 rem;
    span {
      padding: 0 10px;
      :hover {
        cursor: pointer;
      }
    }
  }

</style>
