<template>
  <div>
    <el-row >
  <el-col :span="12" :push="3"><div class="grid-content bg-purple-dark" >logo</div></el-col>
      <el-col :span="12" :push="3"><div class="grid-content bg-purple-dark">
            <div>
              <router-link  to="/uhome">商城</router-link>&nbsp;	
              <router-link  to="/uhome">背包</router-link>&nbsp;
              <router-link  to="/uhome">任务</router-link>
              <router-link  to="/adminhome">活动</router-link>
              &nbsp;<router-link  to="/adminhome">邮件</router-link>
              
              <a href="#">退出</a>
            </div>
            </div>
      </el-col>
    </el-row>
  </div>
</template>