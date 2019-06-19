<template>
  <span class="ndms-timebox">
      <input type="text" maxlength="2" />
      <input type="text" maxlength="2" />
  </span>
</template>

<script>
export default {
  name: "TimeBox",
  props: {},
  data: function() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
.ndms-timebox {
  margin: 6px 3px;
  padding: 3px;
  -moz-border-radius: 4px 4px 4px 4px; 
  border-radius: 4px 4px 4px 4px;
  border: solid 1px #bbb;
  background-color: #fff;
  padding: 4px;
}
.ndms-timebox>input {
    display: inline;
    border: none;
    border-width: 0;
}
.ndms-timebox>input:focus {
    outline-width: 0;
}
</style>
