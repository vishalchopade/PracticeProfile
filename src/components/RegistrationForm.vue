<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-5 md-4">
          <p></p>
          <div class="card p-0">
            <P></P>
            <div class="card-title text-center">
              <h1>
                <small class="badge badge-light"><strong>Login</strong></small>
              </h1>
            </div>
            <form class="signup">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username" 
                  v-model="username"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                  v-model="password"
                />
              </div>
              <button type="button" class="btn btn-primary" v-on:click="Login()"><router-link to="/profile">Login</router-link></button>
              <div class="row">
                <div class="col-6 col-sm-6">
                  <a href="#">
                    <p class="text-left pt-2 ml-1">Forgot password?</p>
                  </a>
                </div>
                <div class="col-6 col-sm-6">
                  <a href="#">
                    <!-- <p class="text-right pt-2 mr-1">Sign Up Now</p> -->
                  </a>
                </div>
              </div>
              
            </form>
          </div>
        </div>
        <div class="col-md-6 mx-auto py-4 px-0">
          <div class="card p-0">
            <div class="card-title text-center">
              <h1>
                <small class="badge badge-light"><strong>SignUp</strong></small>
              </h1>
            </div>
            <form class="signup">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Email"   v-model="Email" />
               
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                   v-model="Username"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                  v-model="Password"
                />
              </div>
              <button
                type="button"
                v-on:click="Register()"
                class="btn btn-primary"
              >
                Register
              </button>
              <div class="row">
                <div class="col-6 col-sm-6">
                  <a href="#">
                    <p class="text-left pt-2 ml-1">Forgot password?</p>
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="d-flex mx-auto pt-1 pb-3">
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div>
      {{ values }}
    </div>
  </div>
  <div>
    <div class="w3-container w3-green">
      <div class="row">
        <div class="col-5 md-4">
          <div class="card p-0"><P></P></div>
        </div>
      </div>
    </div>
  </div>

  <div class="w3-third">
    <h2>Updates News</h2>
    <p>
      Doctors typically treat people with nonsmall cell lung cancer, a prevalent
      and typically incurable type of cancer that makes up 80%-85% of lung
      cancers, with tyrosine kinase inhibitors,specifically epidermal growth
      factor receptor inhibitors. Why did the virus SARS-CoV-2, which caused the
      COVID-19 pandemic, start infecting people? There is evidence that our
      interactions with the natural environment are creating perfect conditions
      for pathogens to move from wild animals to people, as population growth,
      urbanization and climate change bring us into closer contact with
      wildlife. Medical News Today looks at the connections between health,
      sustainability, and the environment, and the lessons we must learn from
      the pandemic.
    </p>
  </div>

  <div>
  
  <div class="container my-5">

 
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>

  <div class="text-center text-white p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      Contact Info. - 123456789
      
    </div>
    
  
</div>
        
  
</template>

<script>
import axios from "axios";
export default {
  name: "RegistrationForm",
  data() {
    return {
      // count: 0
      Email: "",
      Username: "",
      Password: "",
      username:"",
      password:"",

      // password:null,
      value: [],
    };
  },
  methods: {
    getData() {
      // this.count=this.count+1
      console.warn("values:", this.name, this.password);
    },
    Register() {
      let url = "http://localhost:4887/o/setStudentData";
      axios
        .post(url, {
          EMAIL: this.Email,
          USERNAME: this.Username,
          PASSWORD: this.Password,
        })
        .then((response) => {
          console.log(response.data);
          this.value = response.data;
        })
        .catch(function (err) {
          console.error(err);
        });
    },
    Login() {
      let url = "http://localhost:4887/o/LoginData";
      axios
        .post(url, {
          USERNAME: this.username,
          PASSWORD: this.password,
        })
        .then((response) => {
          console.log(response.data);
          this.value = response.data;
          if(response.data==true){
           console.log(response.data)
            this.$router.push({name: "ProfilePage"})
            
          }
          else{
            alert("Failed")
          }
        })
        .catch(function (err) {
          console.error(err);
        });
        // this.$router.push({name: "ProfilePage"})
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(255, 1, 1, 0.1);
}

.card {
  border: none;
  border-radius: 0;
  width: 420px !important;
  margin: 0 auto;
}

.signup {
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 10px 50px;
}

a {
  text-decoration: none !important;
}

h5 {
  color: #ff0147;
  margin-bottom: 3px;
  font-weight: bold;
}

small {
  color: rgba(0, 0, 0, 0.3);
}

input {
  width: 100%;
  display: block;
  margin-bottom: 7px;
}

.form-control {
  border: 1px solid #dc354575;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.075);
  letter-spacing: 1px;
}

.form-control:focus {
  border: 0.5px solid #dc354575;
  border-radius: 30px;
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.075);
  color: #000;
  letter-spacing: 1px;
}

.btn {
  display: block;
  width: 100%;
  border-radius: 30px;
  border: none;
  background: linear-gradient(
    to right,
    rgba(249, 0, 104, 1) 0%,
    rgba(247, 117, 24, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(249, 0, 104, 1) 0%,
    rgba(247, 117, 24, 1) 100%
  );
}

.text-left {
  color: rgba(0, 0, 0, 0.3);
  font-weight: 400;
}

.text-right {
  color: #ff0147;
  font-weight: bold;
}

span.text-center {
  color: rgba(0, 0, 0, 0.3);
}

.fab {
  padding: 15px;
  font-size: 23px;
}

.fa-facebook {
  color: #0303d9bf;
}

.fa-twitter {
  color: #0078fade;
}

.fa-linkedin {
  color: #18b1c0;
}
</style>
