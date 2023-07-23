<template>
    <div class="container-lg">
        <router-link to="/aboutList">
            <div class="box">
            </div>
        </router-link>
    </div>
</template>

<script>

</script>

<style scoped>

.container-lg {
    position:relative ;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.box {
    position: relative;
    animation: box-animation 1s ease-in-out ;
    height: 300px;
    width: 300px;
    background-image: url("../assets/img/firstPage.jpg");
    background-size: cover;
    border-radius: 6px;
    box-shadow: #c8ce29 12px 10px;
}

.box:hover {
    margin-top: 5px;
}

.container-lg {
    border-radius: 10px;
    border: none;
    width: 380px;
    margin-top: 20px;
    background-image: url("../assets/img/background.png");
    box-shadow: #f6a266 -1px 3px 18px 18px;
}

@keyframes box-animation {
    from {
       opacity: 0;

    }
    to {
       opacity: 1;
    }
}



</style>