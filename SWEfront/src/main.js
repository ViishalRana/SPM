import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import dashboard from './projectManager/Dashboard.vue'
import login from './projectManager/login.vue'
import forgetpassword from './projectManager/forgetpassword.vue'
import addproject from './projectManager/Addproject.vue'
import projectdetails from './projectManager/projectDetails.vue'
import projectview from './projectManager/projectView.vue'
import addclient from './projectManager/Addclient.vue'
import employeeview from './projectManager/viewEmployee.vue'
import issues from './projectManager/issue.vue'
import menu1 from './projectManager/menu1.vue'
import viewclient from './projectManager/viewclient.vue'
import updateclient from './projectManager/updateclient.vue'
import empprojectdetails from './projectManager/employeeProjectDetails.vue'
import announcement from './projectManager/Announcement.vue'
import announcementview from './projectManager/Announcementview.vue'
import updateannouncement from './projectManager/updateannouncement.vue'
import profile from './projectManager/profile.vue'


Vue.use(VueRouter);
Vue.use(require('vue-moment'));

Vue.component('login',login);
Vue.component('forgetpassword',forgetpassword);
Vue.component('dashboard',dashboard);
Vue.component('addproject',addproject);
Vue.component('projectdetails',projectdetails);
Vue.component('projectview',projectview);
Vue.component('addclient',addclient);
Vue.component('employeeview',employeeview);
Vue.component('issues',issues);
Vue.component('menu1',menu1);
Vue.component('viewclient',viewclient);
Vue.component('updateclient',updateclient);
Vue.component('empprojectdetails',empprojectdetails);
Vue.component('announcement','announcement');
Vue.component('announcementview',announcementview);
Vue.component('updateannouncement',updateannouncement);
Vue.component('profile',profile);

const routes=[
  {path:'/',component:login},
  {path:'/forgetpassword',component:forgetpassword},
  {path:'/dashboard/:email?',component:dashboard},
  {path:'/addproject',component:addproject},
  {path:'/projectdetails/:projectId',component:projectdetails},
  {path:'/projectview/:clientid?',component:projectview},
  {path:'/addclient',component:addclient},
  {path:'/employeeview',component:employeeview},
  {path:'/issues',component:issues},
  {path:'/viewclient',component:viewclient},
  {path:'/updateclient/:clientid',component:updateclient},
  {path:'/empprojectdetails/:empId',component:empprojectdetails},
  {path:'/announcement',component:announcement},
  {path:'/announcementview',component:announcementview},
  {path:'/updateannouncement/:announcementId',component:updateannouncement},
  {path:'/profile',component:profile},
]


const router=new VueRouter({
  routes:routes,
})


new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
