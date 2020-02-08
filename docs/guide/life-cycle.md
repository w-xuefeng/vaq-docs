# Life Cycle

vue-apicloud-quickstart is strongly driven by `Vue`. Therefore, it supports all life cycles of Vue. For more details, please refer to the official Vue documentation [Vue Lifecycle Diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

In addition, vue-apicloud-quickstart registers a new life cycle of `onReady`. `onReady` will be executed after `mounted` and ensure that `apiready` has been executed. Therefore, some statements calling native modules can be executed in `onReady`.

For example, initialize the `bMap` module as follows:

``` vue
<script>
export default {
  name: 'demo',
  data () {
    return {
      map: null
    }
  },
  methods: {
    initMap () {
      this.map = this.api.require('bMap');
      if (this.api.systemType === 'ios') {
        this.map.initMapSDK(rs => {
          rs.status && this.$toast({ msg: 'bMap module initialized successfully' });
        });
      }
    }
  },
  onReady () {    
    this.initMap();
  }
}
</script>
```