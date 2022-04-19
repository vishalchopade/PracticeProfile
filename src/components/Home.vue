<template>
    <div>
        <PassPass />
  <SlidShow />
   <RegistrationForm />
    </div>
</template>



<script>
import PassPass from "./PassPass.vue";
import SlidShow from "./SlidShow.vue";
import RegistrationForm from "./RegistrationForm.vue";
export default {
    name:"HomeComponent",
    components:{
         PassPass,
    SlidShow,
   RegistrationForm
    }
}
</script>