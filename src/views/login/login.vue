<template>
  <div class="login-wrap">
       <el-form class="login-container">
        <h2 class="title">The user login</h2>
         <el-form  :model="formName" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                <el-form-item label="name" prop="username">
                 <el-input class='inputs' v-model="formName.username"></el-input>
               </el-form-item>
                <el-form-item label="password" prop="password">
                   <el-input class='inputs' type="password" v-model="formName.password"  show-password></el-input>
                </el-form-item>
           </el-form>
              <el-button style=" width:100%;" id="el-button"   type="primary"  @click="submitForm('ruleForm')">Login</el-button>
    
      </el-form>
  </div>
</template>

<script>
import {login} from '../../api/test'
export default {
  data() {
    var validatename = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
         " name is required"
          )
        );
        return false;
      }else {
        callback();
      }
    };
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
      username: [{ validator: validatename, trigger: "blur" }],
    }
    };
  },
  mounted() {
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/index')
            // const parms = {...this.formName}
            //     console.log(this.formName)
            // login(parms).then((res)=>{
            //   if(res.data.code == 200){
            //     this.$router.push('/phonehome')
            //   }else{
            //     this.$message({
            //     message: '账号或密码错误',
            //     type: 'error'
            // });
            //   }
            // })
            // .catch(() => {
            // });
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
.login-wrap {
  		box-sizing: border-box;
  		width: 100%;
  		height: 100%;
  		padding-top: 10%;
  		/* background-color: #112346; */
  		background-repeat: no-repeat;
  		background-position: center right;
  		background-size: 100%;
  	}
 
  	.login-container {
  		border-radius: 10px;
  		margin: 0px auto;
  		width: 350px;
  		padding: 30px 35px 35px 35px;
  		background: #fff;
  		border: 1px solid #eaeaea;
  		text-align: left;
  		box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  	}
 
  	.title {
  		margin: 0px auto 30px auto;
  		text-align: center;
  		color: #505458;
  	}
</style>
