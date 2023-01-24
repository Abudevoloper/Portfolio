<template>
    <div class="container-lg">
        <div class="box-image">
        </div>

      <!-- <p> " I.m "
        <span class="typed" data-typed-items = "Designer,Developer,Web">Designer</span>
            <span class="typed-cursor typed-cursor--blank"  aria-hidden="true">|</span>
        </p>
       -->


    </div>
    <h5> Hi, My name is Abdurashid! I'm FullSteakDeveloper </h5>
    <router-link to="/aboutMe">
        <button>About Me?</button>
    </router-link>
</template>

<script>

export default {
    name: "FirstPage",
}
</script>

<style scoped>

.container-lg {
    margin-top: 200px;
    height: 400px;
    border-left: 2px solid #24943e;
    padding-left: 100px;


}

.box-image {
    border-radius: 50%;
    top: 50px;
    background-image: url("../assets/img/Abdurashid.jpg");
    background-size: cover;
    height: 300px;
    width: 300px;


}

h5 {
    position: absolute;
    left:800px;
    top: 350px
}

button {
    position: absolute;
    border-radius: 5px;
    border: 1px solid black;
    top:390px;
}

button:hover {
    background-color: black;
    color: #ffffff;
}

a {
    padding-left: 800px;
}


</style>