<template>
   <div class="theme-orange">
        <div id="wrapper">
		<div class="vertical-align-wrap">
			<div class="vertical-align-middle auth-main">
				<div class="auth-box">
                    <div class="top">
                        <img src="http://www.wrraptheme.com/templates/lucid/hr/html/assets/images/logo-white.svg" alt="Lucid">
                    </div>
					<div class="card">
                        <div class="header">
                            <p class="lead">Recover my password</p>
                        </div>
                        <div class="body">
                            <p>Please enter your email address below to receive instructions for resetting password.</p>
                            <form class="form-auth-small">
                                <div class="form-group">
                                    <input type="email" v-model="email" class="form-control" id="signup-email" placeholder="Email">
                                </div>
                                <button type="submit" @click="onforget" class="btn btn-primary btn-lg btn-block">RESET PASSWORD</button>
                                <div class="bottom">
                                    <span class="helper-text">Know your password? <router-link to="/">Login</router-link></span>
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
import login from '../services/login'
export default {
  data:function(){
    return{
      email:'',
      mail:{
        to:'',
        subject:'',
        message:''
      }
    }
  },
  methods:{
    onforget:function(){
      login.getpassword(this.email).then(doc=>{
        if(doc.data.length>0){
          this.mail.to = this.email;
          this.mail.subject = "Password";
          this.mail.message = "Your password is " + doc.data[0].empPassword;
          console.log(this.mail);
          login.sendmail(this.mail).then(doc=>{
            console.log(doc);
          }).catch(err=>{
            console.log(err);
          })
        }
        else{
          alert("Invalid emailId")
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
