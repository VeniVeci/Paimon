<template>
  <div>
    <div style="height:calc(100vh - 50px);">
      <SeeksRelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-click="onNodeClick"
        :on-line-click="onLineClick" />
    </div>
    <el-button type="success" class="c-show-code-button">
      <el-link href="https://github.com/seeksdream/relation-graph/blob/master/doc/demo/Demo4LayoutCenter.vue"
        target="_blank" style="color: #ffffff;">查看代码</el-link>
    </el-button>
  </div>
</template>

<script>
import SeeksRelationGraph from 'relation-graph'
export default {
  name: 'Demo',
  components: { SeeksRelationGraph },
  data() {
    return {
      isShowCodePanel: false,
      graphOptions: {
        defaultNodeBorderWidth: 0,
        defaultNodeColor: 'rgba(238, 178, 94, 1)',
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        defaultLineShape: 1,
        'layouts': [
          {
            'label': '中心',
            'layoutName': 'center',
            'layoutClassName': 'seeks-layout-center'
          }
        ],
        defaultJunctionPoint: 'border'
        // 这里可以参考"Graph 图谱"中的参数进行设置
      }
    }
  },
  mounted() {
    this.showSeeksGraph()
  },
  methods: {
    showSeeksGraph(query) {
      var __graph_json_data = {
        rootId: '2',
        nodes: [
          { id: '1', name: '丽莎', myicon: 'el-icon-star-on', innerHTML:'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718350213870.png);border:#ff875e solid 3px;"><div class="c-node-name" style="color:#ff875e">丽莎</div></div>' },
          { id: '2', name: '优菈', myicon: 'el-icon-star-on' },
          { id: '3', name: '凯亚', myicon: 'el-icon-star-on' },
          { id: '4', name: '可莉', myicon: 'el-icon-star-on' },
          { id: '5', name: '埃洛伊', myicon: 'el-icon-star-on' },
          { id: '6', name: '安柏', myicon: 'el-icon-star-on' },
          { id: '7', name: '温迪', myicon: 'el-icon-star-on' },
          { id: '8', name: '班尼特', myicon: 'el-icon-star-on' },
          { id: '9', name: '琴', myicon: 'el-icon-star-on' },
          { id: '10', name: '砂糖', myicon: 'el-icon-star-on' },
          { id: '11', name: '罗莎莉亚', myicon: 'el-icon-star-on' },
          { id: '12', name: '芭芭拉', myicon: 'el-icon-star-on' },
          { id: '13', name: '莫娜', myicon: 'el-icon-star-on' },
          { id: '14', name: '菲谢尔', myicon: 'el-icon-star-on' },
          { id: '15', name: '诺艾尔', myicon: 'el-icon-star-on' },
          { id: '16', name: '迪卢克', myicon: 'el-icon-star-on' },
          { id: '17', name: '迪奥娜', myicon: 'el-icon-star-on' },
          { id: '18', name: '阿贝多', myicon: 'el-icon-star-on' },
          { id: '19', name: '雷泽', myicon: 'el-icon-star-on' },
          { id: '20', name: '七七', myicon: 'el-icon-star-on' },
          { id: '21', name: '云堇', myicon: 'el-icon-star-on' },
          { id: '22', name: '凝光', myicon: 'el-icon-star-on' },
          { id: '23', name: '刻晴', myicon: 'el-icon-star-on' },
          { id: '24', name: '北斗', myicon: 'el-icon-star-on' },
          { id: '25', name: '夜兰', myicon: 'el-icon-star-on' },
          { id: '26', name: '烟绯', myicon: 'el-icon-star-on' },
          { id: '27', name: '甘雨', myicon: 'el-icon-star-on' },
          { id: '28', name: '申鹤', myicon: 'el-icon-star-on' },
          { id: '29', name: '胡桃', myicon: 'el-icon-star-on' },
          { id: '30', name: '行秋', myicon: 'el-icon-star-on' },
          { id: '31', name: '辛焱', myicon: 'el-icon-star-on' },
          { id: '32', name: '达达利亚', myicon: 'el-icon-star-on' },
          { id: '33', name: '重云', myicon: 'el-icon-star-on' },
          { id: '34', name: '钟离', myicon: 'el-icon-star-on' },
          { id: '35', name: '香菱', myicon: 'el-icon-star-on' },
          { id: '36', name: '魈', myicon: 'el-icon-star-on' },
          { id: '37', name: '久岐忍', myicon: 'el-icon-star-on' },
          { id: '38', name: '九条裟罗', myicon: 'el-icon-star-on' },
          { id: '39', name: '五郎', myicon: 'el-icon-star-on' },
          { id: '40', name: '八重神子', myicon: 'el-icon-star-on' },
          { id: '41', name: '宵宫', myicon: 'el-icon-star-on' },
          { id: '42', name: '托马', myicon: 'el-icon-star-on' },
          { id: '43', name: '早柚', myicon: 'el-icon-star-on' },
          { id: '44', name: '枫原万叶', myicon: 'el-icon-star-on' },
          { id: '45', name: '珊瑚宫心海', myicon: 'el-icon-star-on' },
          { id: '46', name: '神里绫人', myicon: 'el-icon-star-on' },
          { id: '47', name: '神里绫华', myicon: 'el-icon-star-on' },
          { id: '48', name: '荒泷一斗', myicon: 'el-icon-star-on' },
          { id: '49', name: '雷电将军', myicon: 'el-icon-star-on' },
          { id: '50', name: '鹿野院平藏', myicon: 'el-icon-star-on' },
          { id: '51', name: '坎蒂丝', myicon: 'el-icon-star-on' },
          { id: '52', name: '多莉', myicon: 'el-icon-star-on' },
          { id: '53', name: '妮露', myicon: 'el-icon-star-on' },
          { id: '54', name: '提纳里', myicon: 'el-icon-star-on' },
          { id: '55', name: '柯莱', myicon: 'el-icon-star-on' },
          { id: '56', name: '纳西妲', myicon: 'el-icon-star-on' },
          { id: '57', name: '莱依拉', myicon: 'el-icon-star-on' },
          { id: '58', name: '赛诺', myicon: 'el-icon-star-on' },
          { id: '59', name: '旅行者和派蒙', myicon: 'el-icon-star-on' }

        ],
        links: [
          { from: '1', to: '19', text: '师徒' },
          { from: '9', to: '12', text: '姐妹' },
          { from: '16', to: '3', text: '义兄弟' },
          { from: '18', to: '4', text: '兄妹' },
          { from: '22', to: '23', text: '同事' },
          { from: '23', to: '22', text: '同事' },
          { from: '27', to: '22', text: '上下级' },
          { from: '27', to: '23', text: '上下级' },
          { from: '27', to: '28', text: '同门' },
          { from: '28', to: '33', text: '姨甥' },
          { from: '40', to: '49', text: '神与眷属' },
          { from: '42', to: '46', text: '上下级' },
          { from: '42', to: '47', text: '上下级' },
          { from: '46', to: '47', text: '兄妹' },
          { from: '48', to: '37', text: '上下级' },
          { from: '59', to: '1', text: '朋友' },
          { from: '59', to: '2', text: '朋友' },
          { from: '59', to: '3', text: '朋友' },
          { from: '59', to: '4', text: '朋友' },
          { from: '59', to: '5', text: '朋友' },
          { from: '59', to: '6', text: '朋友' },
          { from: '59', to: '7', text: '朋友' },
          { from: '59', to: '8', text: '朋友' },
          { from: '59', to: '9', text: '朋友' },
          { from: '59', to: '10', text: '朋友' },
          { from: '59', to: '11', text: '朋友' },
          { from: '59', to: '12', text: '朋友' },
          { from: '59', to: '13', text: '朋友' },
          { from: '59', to: '14', text: '朋友' },
          { from: '59', to: '15', text: '朋友' },
          { from: '59', to: '16', text: '朋友' },
          { from: '59', to: '17', text: '朋友' },
          { from: '59', to: '18', text: '朋友' },
          { from: '59', to: '19', text: '朋友' },
          { from: '59', to: '20', text: '朋友' },
          { from: '59', to: '21', text: '朋友' },
          { from: '59', to: '22', text: '朋友' },
          { from: '59', to: '23', text: '朋友' },
          { from: '59', to: '24', text: '朋友' },
          { from: '59', to: '25', text: '朋友' },
          { from: '59', to: '26', text: '朋友' },
          { from: '59', to: '27', text: '朋友' },
          { from: '59', to: '28', text: '朋友' },
          { from: '59', to: '29', text: '朋友' },
          { from: '59', to: '30', text: '朋友' },
          { from: '59', to: '31', text: '朋友' },
          { from: '59', to: '32', text: '朋友' },
          { from: '59', to: '33', text: '朋友' },
          { from: '59', to: '34', text: '朋友' },
          { from: '59', to: '35', text: '朋友' },
          { from: '59', to: '36', text: '朋友' },
          { from: '59', to: '37', text: '朋友' },
          { from: '59', to: '38', text: '朋友' },
          { from: '59', to: '39', text: '朋友' },
          { from: '59', to: '40', text: '朋友' },
          { from: '59', to: '41', text: '朋友' },
          { from: '59', to: '42', text: '朋友' },
          { from: '59', to: '43', text: '朋友' },
          { from: '59', to: '44', text: '朋友' },
          { from: '59', to: '45', text: '朋友' },
          { from: '59', to: '46', text: '朋友' },
          { from: '59', to: '47', text: '朋友' },
          { from: '59', to: '48', text: '朋友' },
          { from: '59', to: '49', text: '朋友' },
          { from: '59', to: '50', text: '朋友' },
          { from: '59', to: '51', text: '朋友' },
          { from: '59', to: '52', text: '朋友' },
          { from: '59', to: '53', text: '朋友' },
          { from: '59', to: '54', text: '朋友' },
          { from: '59', to: '55', text: '朋友' },
          { from: '59', to: '56', text: '朋友' },
          { from: '59', to: '57', text: '朋友' },
          { from: '59', to: '58', text: '朋友' }
        ]
      }
      this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
        // 这些写上当图谱初始化完成后需要执行的代码
      })
    },
    onNodeClick(nodeObject, $event) {
      console.log('onNodeClick:', nodeObject)
    },
    onLineClick(lineObject, $event) {
      console.log('onLineClick:', lineObject)
    }
  }
}
</script>
  
<style lang="scss">

</style>
  
<!-- <style lang="scss" scoped> -->

</style>