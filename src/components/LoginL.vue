<template>
    <div>
    
    <div>
       <div class="container">
    <div class="row">
        <div class="col-md-6 mx-auto py-4 px-0">
            <div class="card p-0">
                <div class="card-title text-center">
                    <h2><small class="para"><strong>Login</strong></small></h2>
                </div>
                <form class="Login">
                
                    <div class="form-group"><input type="text" class="form-control" placeholder="Username"></div>
                    <div class="form-group"><input type="password" class="form-control" placeholder="password">
                    </div> <button type="button" v-on:click="Login()" class="btn btn-primary">"Login"</button>
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
export default {
    name: 'LoginL',
}
</script>