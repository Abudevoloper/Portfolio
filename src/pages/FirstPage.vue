<template>
    <div class="container-md">
        <div class="first-page-text">
            <img class="first-page-image "   src="../assets/img/background-image.jpg">
      <h5 class="personal-info "> My name is Abdurashid</h5>
      <h1 class="personal-info mt-4">I'm FullStack Developer</h1>
      <router-link to="/next" class="next-page"> About Me </router-link>
    </div>
    
    </div>
</template>

<script>


export default {
    name: "FirstPage",
}
</script>

<style scoped>
.first-page-image {
    position: absolute;
    top: 5%;
    left: 50%;
    border-radius: 50%;
    animation: radius ease-in-out  3s;
}

.personal-info {
    font-family: 'Courier New', Courier, monospace;
    position: absolute;
    top: 40%;
   
}
.next-page {
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    top: 50%;
    text-decoration: none;
    font-size: large;   
    background: #9882ef;
    color: #fefefe;
   
    padding: 5px;
}
.next-page:hover {
    color: #000;
} 
@keyframes radius {
from {
    border-radius: 0%;
}
to {
border-radius: 50%;
}
 
}
@keyframes radius-js {
from {
    border-radius: 0%;
}
to {
border-radius: 50%;
}
 
}
</style>