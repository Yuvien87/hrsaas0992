<template>
  <div v-loading="loading" class="dashboard-container">
    <div class="app-container">
      <!-- 实现页面的基本布局 -->
      <el-card class="tree-card">
        <!-- 用了一个行列布局 -->
        <!-- 缺少treeNode -->
        <tree-tools :tree-node="company" :is-root="true" @addDepts="addDepts" />
        <!--放置一个属性   这里的props和我们之前学习的父传子 的props没关系-->
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
          <!-- 说明el-tree里面的这个内容 就是插槽内容 => 填坑内容  => 有多少个节点循环多少次 -->
          <!-- scope-scope 是 tree组件传给每个节点的插槽的内容的数据 -->
          <!-- 顺序一定是 执行slot-scope的赋值 才去执行 props的传值 -->
          <template v-slot="{ data }">
            <tree-tools :tree-node="data" @editDepts="editDepts" @addDepts="addDepts" @delDepts="getDepartments" />
          </template>
        </el-tree>
      </el-card>
    </div>
    <add-dept ref="addDept" :tree-node="node" :show-dialog.sync="showDialog" @addDepts="getDepartments" />
  </div>
</template>

<script>
import TreeTools from './components/tree-tools.vue'
import { getDepartments } from '@/api/departments'
import { transListToTreeData } from '@/utils'
import AddDept from './components/add-dept'
export default {
  components: {
    TreeTools,
    AddDept
  },
  data() {
    return {
      company: { name: '上海雪韵股份有限公司', manager: '负责人' },
      departs: [],
      defaultProps: {
        label: 'name' // 表示 从这个属性显示内容
      },
      showDialog: false,
      node: null
    }
  },
  created() {
    this.getDepartments() // 调用自身的方法
  },
  methods: {
    async getDepartments() {
      this.loading = true
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: '负责人', id: '' }
      this.departs = transListToTreeData(result.depts, '') // 需要将其转化成树形结构
      this.loading = false
    },
    // 自定义事件的接收方法 node就是操作的节点
    addDepts(node) {
      this.showDialog = true
      this.node = node // 记录node是为了记住往哪个部门下 添加子部门
    },
    async editDepts(node) {
      await this.$refs.addDept.getDepartDetail(node.id)
      this.showDialog = true
      this.node = node // 记录当前点击的编辑节点
      // 调用子组件方法？父组件  => 子组件方法
    }
  }
}
</script>

<style scoped>
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>
