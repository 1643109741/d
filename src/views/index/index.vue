<template>
  <div class="index">
    <div class="rows">
      <template>
        <el-table
          :data="tableData"
          ref="addformLabelAlign"
          stripe
          style="width: 100%"
        >
          <el-table-column prop="Rank" label="Rank" width="80">
          </el-table-column>
          <el-table-column prop="Address" label="Address"> </el-table-column>
          <el-table-column prop="Quantity" label="Quantity"> </el-table-column>
          <el-table-column prop="Percentage" label="Percentage">{{Percentage}}1 </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          Rank: "1",
          Address: "kskajdlkajldsjaldjdkajldjl",
          Quantity: "738217938713",
          Percentage: "18.987",
        },
        {
          Rank: "2",
          Address: "kskajdlkajldsjaldjdkajldjl",
          Quantity: "738217938713",
          Percentage: "18.987",
        },
        {
          Rank: "3",
          Address: "kskajdlkajldsjaldjdkajldjl",
          Quantity: "738217938713",
          Percentage: "18.987",
        },
        {
          Rank: "4",
          Address: "kskajdlkajldsjaldjdkajldjl",
          Quantity: "738217938713",
          Percentage: "18.987",
        },
      ],
    };
  },
  mounted() {},
};
</script>
<style scoped>
.index {
  display: flex;
  justify-content: space-around;
}
.rows {
  width: 80%;
}
</style>
