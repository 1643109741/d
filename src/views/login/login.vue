<template>
  <div class="login">
    <van-notify v-model="shows" :type="types"><span>{{messages}}</span></van-notify>
      <div class="login_body">
          <div class="login_right">
              <h2>Sign in</h2>
              <p>Enter your details below.</p>
              <el-form  :model="formName" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                <el-form-item label="name" prop="username">
                 <el-input class='inputs' v-model="formName.username"></el-input>
               </el-form-item>
                <el-form-item label="password" prop="password">
                   <el-input class='inputs' type="password" v-model="formName.password"  show-password></el-input>
                </el-form-item>
             </el-form>
             <div style="height:3vh"></div>
              <el-button style=" width:100%;" id="el-button"   type="primary"  @click="submitForm('ruleForm')">Login</el-button>
          </div>
      </div>
  </div>
</template>

<script>
import {login} from '../../api/test'
export default {
  data() {
     var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
         " Password is required"
          )
        );
        return false;
      }else {
        callback();
      }
    };
    return {
    shows:false,
    types:'primary',
    messages:'',
    formName:{
      username:'',
      password:'',
    },
    rules: {
      password: [{ validator: validatePassword, trigger: "blur" }],
    }
    };
  },
  mounted() {
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const parms = {...this.formName}
                console.log(this.formName)
            login(parms).then((res)=>{
              if(res.data.code == 200){
                this.$router.push('/phonehome')
              }else{
                this.$message({
                message: '账号或密码错误',
                type: 'error'
            });
              }
            })
            .catch(() => {
            });
          } else {
          }
        });
      },
     showNotify(types,messages) {
     this.types = types
     this.messages = messages
     this.shows =true
     setTimeout(() => {
      this.shows = false;
    }, 2000);
  },
  }
};
</script>
<style lang="less">
.login_right{
  position: absolute;
  width: 80%;
  right: 5%;
  top: 30%;
  padding: 5%;
}
.login_right p{
  margin-top: 1vh;
  margin-bottom: 3vh;
}
 .inputs{
    width: 100%;
  }
</style>

