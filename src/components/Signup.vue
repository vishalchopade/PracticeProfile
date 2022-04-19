<template>
    <div>
    <div>
       <div class="container">
    <div class="row">
        <div class="col-md-6 mx-auto py-4 px-0">
            <div class="card p-0">
                <div class="card-title text-center">
                    <h2><small class="para"><strong>SignUp</strong></small></h2>
                </div>
                <form class="signup">
                    <div class="form-group"><input type="text" class="form-control" placeholder="Email"></div>
                    <div class="form-group"><input type="text" class="form-control" placeholder="Username"></div>
                    <div class="form-group"><input type="password" class="form-control" placeholder="password">
                    </div> <button type="button" v-on:click="Register()" class="btn btn-primary">Register</button>
                    <div class="row">
                        <div class="col-6 col-sm-6"> <a href="#">
                                <p class="text-left pt-2 ml-1">Forgot password?</p>
                            </a> </div>
                                  </div>
                    
                    <div class="row">
                        <div class="d-flex mx-auto pt-1 pb-3"> <a href="#"><i class="fab fa-facebook"></i></a> <a href="#"><i class="fab fa-twitter"></i></a> <a href="#"><i class="fab fa-linkedin"></i></a> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:'SignUp',
    data() {
        return {
            // count: 0
            Email:"",
            Username:"", 
            Password:"",

            // password:null,
            value:[]
        }
    },
    methods:{
        getData(){
            // this.count=this.count+1
            console.warn("values:", this.name, this.password)
        },
        Register(){
            let url="http://localhost:4887/o/setStudentData"
        axios
             .post(url,{EMAIL:this.Email,USERNAME:this.Username,PASSWORD:this.Password})
             .then(response=> {
               console.log(response.data)
               this.value=response.data
             })
             .catch(function(err){
               console.error(err)
             })
  }
        }
    }

</script>
<style scoped>

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgba(255, 1, 1, 0.1)
}

.card {
    border: none;
    border-radius: 0;
    width: 420px !important;
    margin: 0 auto
}

.signup {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 10px 50px
}

a {
    text-decoration: none !important
}

h5 {
    color: #ff0147;
    margin-bottom: 3px;
    font-weight: bold
}

small {
    color: rgba(0, 0, 0, 0.3)
}

input {
    width: 100%;
    display: block;
    margin-bottom: 7px
}

.form-control {
    border: 1px solid #dc354575;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, .075);
    letter-spacing: 1px
}

.form-control:focus {
    border: 0.5px solid #dc354575;
    border-radius: 30px;
    box-shadow: none;
    background-color: rgba(0, 0, 0, .075);
    color: #000;
    letter-spacing: 1px
}

.btn {
    display: block;
    width: 100%;
    border-radius: 30px;
    border: none;
    background: linear-gradient(to right, rgba(249, 0, 104, 1) 0%, rgba(247, 117, 24, 1) 100%);
    background: -webkit-linear-gradient(left, rgba(249, 0, 104, 1) 0%, rgba(247, 117, 24, 1) 100%)
}

.text-left {
    color: rgba(0, 0, 0, 0.3);
    font-weight: 400
}

.text-right {
    color: #ff0147;
    font-weight: bold
}

span.text-center {
    color: rgba(0, 0, 0, 0.3)
}

.fab {
    padding: 15px;
    font-size: 23px
}

.fa-facebook {
    color: #0303d9bf
}

.fa-twitter {
    color: #0078fade
}

.fa-linkedin {
    color: #18b1c0
}
</style>