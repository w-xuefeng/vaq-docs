# 生命周期

vue-apicloud-quickstart 由 `Vue` 强力驱动，因此支持 Vue 的所有生命周期，更多细节请参考 Vue 官方文档 [Vue 生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)。

除此之外，vue-apicloud-quickstart 引入了一个新的生命周期 `onReady`。 `onReady` 将在 `mounted` 之后执行，并且保证 `apiready` 已经执行，因此一些调用原生模块的语句可以放在 `onReady` 中执行。

如初始化 `bMap` 模块如下：

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
          rs.status && this.$toast({ msg: '地图模块初始化成功' });
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