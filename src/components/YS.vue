<template>
  <div>
    <div style="margin-top:50px;width: calc(100% - 10px);height:calc(100vh - 140px);">
      <SeeksRelationGraph ref="seeksRelationGraph" :options="graphOptions" />
    </div>
    <el-button type="success" class="c-show-code-button"><el-link href="https://github.com/seeksdream/relation-graph/blob/master/doc/demo/Demo4SceneRelationship.vue" target="_blank" style="color: #ffffff;">查看代码</el-link></el-button>
  </div>
</template>

<script>
import SeeksRelationGraph from 'relation-graph'
export default {
  name: 'SeeksRelationGraphDemo',
  components: { SeeksRelationGraph },
  data() {
    return {
      g_loading: true,
      demoname: '---',
      graphOptions: {
        defaultNodeBorderWidth: 0,
        defaultNodeColor: 'rgba(238, 178, 94, 1)',
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        defaultLineShape: 1,
        'layouts': [
          {
            'label': '自动布局',
            'layoutName': 'force',
            'layoutClassName': 'seeks-layout-force'
          }
        ],
        defaultJunctionPoint: 'border'
        // 这里可以参考"Graph 图谱"中的参数进行设置
      }
    }
  },
  created() {
  },
  mounted() {
    this.demoname = this.$route.params.demoname
    this.setGraphData()
  },
  methods: {
    setGraphData() {
      var __graph_json_data = { 'rootId': '59', 'nodes': [
      {'id':'1', 'text':'琴', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718344593599.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">琴</div></div>'},
{'id':'2', 'text':'安柏', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718350213870.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">安柏</div></div>'},
{'id':'3', 'text':'丽莎', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617000181697.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">丽莎</div></div>'},
{'id':'4', 'text':'凯亚', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617001674227.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">凯亚</div></div>'},
{'id':'5', 'text':'芭芭拉', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617005720579.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">芭芭拉</div></div>'},
{'id':'6', 'text':'迪卢克', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617015669833.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">迪卢克</div></div>'},
{'id':'7', 'text':'雷泽', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617025961375.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">雷泽</div></div>'},
{'id':'8', 'text':'温迪', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617031747812.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">温迪</div></div>'},
{'id':'9', 'text':'可莉', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617033181769.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">可莉</div></div>'},
{'id':'10', 'text':'班尼特', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200312/2020031219222320482.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">班尼特</div></div>'},
{'id':'11', 'text':'诺艾尔', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200315/2020031516092797889.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">诺艾尔</div></div>'},
{'id':'12', 'text':'菲谢尔', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200330/2020033019074664412.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">菲谢尔</div></div>'},
{'id':'13', 'text':'砂糖', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200724/2020072414340926231.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">砂糖</div></div>'},
{'id':'14', 'text':'莫娜', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718352334387.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">莫娜</div></div>'},
{'id':'15', 'text':'迪奥娜', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20201106/2020110614164694989.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">迪奥娜</div></div>'},
{'id':'16', 'text':'阿贝多', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20201216/2020121617552012082.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">阿贝多</div></div>'},
{'id':'17', 'text':'罗莎莉亚', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718290075546.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">罗莎莉亚</div></div>'},
{'id':'18', 'text':'优菈', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210508/2021050817091079399.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">优菈</div></div>'},
{'id':'19', 'text':'埃洛伊', 'color':'#6ed2aa', 'borderColor':'#6ed2aa', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210825/2021082511163174110.png);border:#6ed2aa solid 5px;"><div class="c-node-name" style="color:#6ed2aa">埃洛伊</div></div>'},
{'id':'20', 'text':'魈', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617035787693.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">魈</div></div>'},
{'id':'21', 'text':'北斗', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617043374251.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">北斗</div></div>'},
{'id':'22', 'text':'凝光', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617042023125.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">凝光</div></div>'},
{'id':'23', 'text':'香菱', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200316/2020031618192613355.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">香菱</div></div>'},
{'id':'24', 'text':'行秋', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200324/2020032419030350146.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">行秋</div></div>'},
{'id':'25', 'text':'重云', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200602/2020060218324180299.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">重云</div></div>'},
{'id':'26', 'text':'刻晴', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814015644368.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">刻晴</div></div>'},
{'id':'27', 'text':'七七', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814265912018.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">七七</div></div>'},
{'id':'28', 'text':'达达利亚', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20201103/2020110314190784136.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">达达利亚</div></div>'},
{'id':'29', 'text':'钟离', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20201120/2020112010371210769.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">钟离</div></div>'},
{'id':'30', 'text':'辛焱', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20201125/2020112515344362241.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">辛焱</div></div>'},
{'id':'31', 'text':'甘雨', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210105/2021010518424084444.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">甘雨</div></div>'},
{'id':'32', 'text':'胡桃', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210222/2021022210584218038.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">胡桃</div></div>'},
{'id':'33', 'text':'烟绯', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210420/2021042014093440786.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">烟绯</div></div>'},
{'id':'34', 'text':'申鹤', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20211221/2021122118121612158.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">申鹤</div></div>'},
{'id':'35', 'text':'云堇', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20211221/2021122117591771295.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">云堇</div></div>'},
{'id':'36', 'text':'夜兰', 'color':'#ebb735', 'borderColor':'#ebb735', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/05/18/76cfc9a21e196fd316070196c1396950_2919759828280177295.png);border:#ebb735 solid 5px;"><div class="c-node-name" style="color:#ebb735">夜兰</div></div>'},
{'id':'37', 'text':'神里绫华', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011085576262.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">神里绫华</div></div>'},
{'id':'38', 'text':'枫原万叶', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210617/2021061716564818668.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">枫原万叶</div></div>'},
{'id':'39', 'text':'宵宫', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210802/2021080210195390130.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">宵宫</div></div>'},
{'id':'40', 'text':'早柚', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210802/2021080211352035312.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">早柚</div></div>'},
{'id':'41', 'text':'雷电将军', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714114216212.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">雷电将军</div></div>'},
{'id':'42', 'text':'九条裟罗', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714514765929.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">九条裟罗</div></div>'},
{'id':'43', 'text':'珊瑚宫心海', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414024724995.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">珊瑚宫心海</div></div>'},
{'id':'44', 'text':'托马', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20211021/2021102110372681510.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">托马</div></div>'},
{'id':'45', 'text':'荒泷一斗', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011275394620.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">荒泷一斗</div></div>'},
{'id':'46', 'text':'五郎', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011485830826.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">五郎</div></div>'},
{'id':'47', 'text':'八重神子', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://uploadstatic.mihoyo.com/contentweb/20220208/2022020813481182336.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">八重神子</div></div>'},
{'id':'48', 'text':'神里绫人', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/03/14/6713b70c875d723eb22c9effda407377_2979852309102536594.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">神里绫人</div></div>'},
{'id':'49', 'text':'久岐忍', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/06/15/d9e1610f9201fd4d5e8ca93c21380485_2031480174215672233.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">久岐忍</div></div>'},
{'id':'50', 'text':'鹿野院平藏', 'color':'#be84fc', 'borderColor':'#be84fc', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/07/07/8cb39b11a39045288b7ef800b9c8a085_4905643200701802462.png);border:#be84fc solid 5px;"><div class="c-node-name" style="color:#be84fc">鹿野院平藏</div></div>'},
{'id':'51', 'text':'提纳里', 'color':'#5a9216', 'borderColor':'#5a9216', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/1f88bdae2e99307e68a0bbfedf6cc74f_2882938237707913291.png);border:#5a9216 solid 5px;"><div class="c-node-name" style="color:#5a9216">提纳里</div></div>'},
{'id':'52', 'text':'柯莱', 'color':'#5a9216', 'borderColor':'#5a9216', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/3677cbc063b7ab3887ceb7f9a77287ac_1039229097287658400.png);border:#5a9216 solid 5px;"><div class="c-node-name" style="color:#5a9216">柯莱</div></div>'},
{'id':'53', 'text':'多莉', 'color':'#5a9216', 'borderColor':'#5a9216', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/08/29/b8a367991017a9f3c6bb445c5c8b68e6_1191967378101363412.png);border:#5a9216 solid 5px;"><div class="c-node-name" style="color:#5a9216">多莉</div></div>'},
{'id':'54', 'text':'赛诺', 'color':'#5a9216', 'borderColor':'#5a9216', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/09/21/377cfb0cf754a873c864e92208e540f0_2617971490404602601.png);border:#5a9216 solid 5px;"><div class="c-node-name" style="color:#5a9216">赛诺</div></div>'},
{'id':'55', 'text':'坎蒂丝', 'color':'#5a9216', 'borderColor':'#5a9216', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/09/22/4199ac7c190fe49d64215345c1c04f30_767621913108456368.png);border:#5a9216 solid 5px;"><div class="c-node-name" style="color:#5a9216">坎蒂丝</div></div>'},
{'id':'56', 'text':'妮露', 'color':'#5a9216', 'borderColor':'#5a9216', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/09/27/a5f2a564298709911b3ceef0289d183c_1572553848866085675.png);border:#5a9216 solid 5px;"><div class="c-node-name" style="color:#5a9216">妮露</div></div>'},
{'id':'57', 'text':'纳西妲', 'color':'#5a9216', 'borderColor':'#5a9216', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/10/20/62cb7fb1815d9d05d3ece2e0d8e85c7d_8731082942818264376.png);border:#5a9216 solid 5px;"><div class="c-node-name" style="color:#5a9216">纳西妲</div></div>'},
{'id':'58', 'text':'莱依拉', 'color':'#5a9216', 'borderColor':'#5a9216', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://webstatic.mihoyo.com/upload/contentweb/2022/10/20/f5b95c8f39180f0bf83303c6316439c4_2737625808068154153.png);border:#5a9216 solid 5px;"><div class="c-node-name" style="color:#5a9216">莱依拉</div></div>'},
{'id':'59', 'text':'旅行者', 'color':'#FF0000', 'borderColor':'#FF0000', 'innerHTML':'<div class="c-my-node" style="background-image: url(https://s1.ax1x.com/2022/11/27/zUNsYT.png);border:#ff0000 solid 10px;"><div class="c-node-name" style="color:#ff875e"></div></div>'},

], 
    'links': [
    {'from':'1', 'to':'2', 'text':'上下级'},
{'from':'1', 'to':'3', 'text':'同事'},
{'from':'1', 'to':'4', 'text':'同事'},
{'from':'1', 'to':'5', 'text':'姐妹'},
{'from':'1', 'to':'7', 'text':'师徒'},
{'from':'1', 'to':'9', 'text':'监护人'},
{'from':'1', 'to':'18', 'text':'上下级'},
{'from':'1', 'to':'59', 'text':'朋友'},
{'from':'2', 'to':'3', 'text':'同事'},
{'from':'2', 'to':'4', 'text':'同事'},
{'from':'2', 'to':'5', 'text':'同事'},
{'from':'2', 'to':'9', 'text':'姐姐'},
{'from':'2', 'to':'52', 'text':'同门'},
{'from':'2', 'to':'59', 'text':'朋友'},
{'from':'3', 'to':'9', 'text':'阿姨'},
{'from':'3', 'to':'59', 'text':'朋友'},
{'from':'4', 'to':'9', 'text':'哥哥'},
{'from':'4', 'to':'59', 'text':'朋友'},
{'from':'5', 'to':'9', 'text':'姐姐'},
{'from':'5', 'to':'59', 'text':'朋友'},
{'from':'6', 'to':'4', 'text':'朋友'},
{'from':'6', 'to':'59', 'text':'朋友'},
{'from':'7', 'to':'9', 'text':'哥哥'},
{'from':'7', 'to':'59', 'text':'朋友'},
{'from':'8', 'to':'1', 'text':'同事'},
{'from':'8', 'to':'59', 'text':'朋友'},
{'from':'9', 'to':'59', 'text':'朋友'},
{'from':'10', 'to':'9', 'text':'哥哥'},
{'from':'10', 'to':'59', 'text':'朋友'},
{'from':'11', 'to':'59', 'text':'朋友'},
{'from':'12', 'to':'59', 'text':'朋友'},
{'from':'13', 'to':'59', 'text':'朋友'},
{'from':'14', 'to':'59', 'text':'朋友'},
{'from':'15', 'to':'9', 'text':'姐姐'},
{'from':'15', 'to':'59', 'text':'朋友'},
{'from':'16', 'to':'9', 'text':'哥哥'},
{'from':'16', 'to':'59', 'text':'朋友'},
{'from':'17', 'to':'59', 'text':'朋友'},
{'from':'18', 'to':'59', 'text':'朋友'},
{'from':'19', 'to':'59', 'text':'朋友'},
{'from':'20', 'to':'29', 'text':'上下级'},
{'from':'20', 'to':'59', 'text':'朋友'},
{'from':'21', 'to':'59', 'text':'朋友'},
{'from':'22', 'to':'29', 'text':'上下级'},
{'from':'22', 'to':'59', 'text':'朋友'},
{'from':'23', 'to':'59', 'text':'朋友'},
{'from':'24', 'to':'59', 'text':'朋友'},
{'from':'25', 'to':'59', 'text':'朋友'},
{'from':'26', 'to':'29', 'text':'上下级'},
{'from':'26', 'to':'59', 'text':'朋友'},
{'from':'27', 'to':'59', 'text':'朋友'},
{'from':'28', 'to':'59', 'text':'朋友'},
{'from':'29', 'to':'59', 'text':'朋友'},
{'from':'30', 'to':'59', 'text':'朋友'},
{'from':'31', 'to':'22', 'text':'上下级'},
{'from':'31', 'to':'26', 'text':'上下级'},
{'from':'31', 'to':'34', 'text':'同门'},
{'from':'31', 'to':'59', 'text':'朋友'},
{'from':'32', 'to':'59', 'text':'朋友'},
{'from':'33', 'to':'49', 'text':'同门'},
{'from':'33', 'to':'59', 'text':'朋友'},
{'from':'34', 'to':'25', 'text':'姨甥'},
{'from':'34', 'to':'59', 'text':'朋友'},
{'from':'35', 'to':'59', 'text':'朋友'},
{'from':'36', 'to':'59', 'text':'朋友'},
{'from':'37', 'to':'48', 'text':'兄妹'},
{'from':'37', 'to':'59', 'text':'朋友'},
{'from':'38', 'to':'39', 'text':'朋友'},
{'from':'38', 'to':'59', 'text':'朋友'},
{'from':'39', 'to':'59', 'text':'朋友'},
{'from':'40', 'to':'59', 'text':'朋友'},
{'from':'41', 'to':'42', 'text':'上下级'},
{'from':'41', 'to':'47', 'text':'神与眷属'},
{'from':'41', 'to':'59', 'text':'朋友'},
{'from':'42', 'to':'40', 'text':'上下级'},
{'from':'42', 'to':'59', 'text':'朋友'},
{'from':'43', 'to':'59', 'text':'朋友'},
{'from':'44', 'to':'59', 'text':'朋友'},
{'from':'45', 'to':'49', 'text':'上下级'},
{'from':'45', 'to':'59', 'text':'朋友'},
{'from':'46', 'to':'59', 'text':'朋友'},
{'from':'47', 'to':'59', 'text':'朋友'},
{'from':'48', 'to':'59', 'text':'朋友'},
{'from':'49', 'to':'59', 'text':'朋友'},
{'from':'50', 'to':'59', 'text':'朋友'},
{'from':'51', 'to':'52', 'text':'师徒'},
{'from':'51', 'to':'59', 'text':'朋友'},
{'from':'52', 'to':'51', 'text':'师徒'},
{'from':'52', 'to':'59', 'text':'朋友'},
{'from':'53', 'to':'59', 'text':'朋友'},
{'from':'54', 'to':'55', 'text':'朋友'},
{'from':'54', 'to':'59', 'text':'朋友'},
{'from':'55', 'to':'54', 'text':'朋友'},
{'from':'55', 'to':'59', 'text':'朋友'},
{'from':'56', 'to':'57', 'text':'朋友'},
{'from':'56', 'to':'59', 'text':'朋友'},
{'from':'57', 'to':'56', 'text':'朋友'},
{'from':'57', 'to':'59', 'text':'朋友'},
{'from':'58', 'to':'59', 'text':'朋友'},



        ]
      }
          
          this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
        // 这些写上当图谱初始化完成后需要执行的代码
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .c-my-node{
    background-position: center center;
    background-size: 100%;
    border:#ff8c00 solid 2px;
    height:80px;
    width:80px;
    border-radius: 40px;
  }
  .c-node-name{
    width:160px;margin-left:-40px;text-align:center;margin-top:85px;
  }
</style>