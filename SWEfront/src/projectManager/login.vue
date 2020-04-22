<template>
   <div class="theme-orange">
       <div id="wrapper">
		<div class="vertical-align-wrap">
			<div class="vertical-align-middle auth-main">
				<div class="auth-box">
                    <div class="top">
                        <img src="../assets/images/logo.png" alt="Lucid">
                    </div>
					<div class="card">
                        <div class="header">
                            <p class="lead">Login to your account</p>
                        </div>
                        <div class="body">
                            <form class="form-auth-small">
                                <div class="form-group">
                                    <label for="signin-email" class="control-label sr-only">Email</label>
                                    <input type="email" v-model="email" class="form-control" id="signin-email" value="user@domain.com" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label for="signin-password" class="control-label sr-only">Password</label>
                                    <input type="password" v-model="password" class="form-control" id="signin-password" value="thisisthepassword" placeholder="Password">
                                </div>
                                <div class="form-group clearfix">
                                    <label class="fancy-checkbox element-left">
                                        <input type="checkbox">
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <button type="button" class="btn btn-primary btn-lg btn-block" @click="onlogin">LOGIN</button>
                                <div class="bottom">
                                    <span class="helper-text m-b-10"><i class="fa fa-lock"></i><router-link to="/forgetpassword"> Forgot password?</router-link></span>
                                </div>
                            </form>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
   </div>
</template>

<script>
import loginclass from '../services/login'
export default {
data () {
    return {
      email:'',
	    password:'',
    }
    },
    methods:{
        onlogin:function(){
          loginclass.getEmpByEmailPassword(this.email,this.password).then(doc=>{
            if(doc.data.length>0){

              if(doc.data[0].empTypeId == 1){
                this.$router.push({path:'/dashboard/' + this.email});
                localStorage.setItem('empId',JSON.stringify(doc.data[0].empId));
                console.log(localStorage.getItem('empId'));
              }
              else{
                alert("Aji Baki che member nu dashboard");
              }
            }
            else{
              alert("EmailId and Password does not match");
            }
          })
			 	}
    },
    created(){

    },
    filters:{

    }

}
</script>

<style scoped>

</style>
