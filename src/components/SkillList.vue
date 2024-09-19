<template>
    <span class="skill-nav">Skills</span>
    
    <!-- 
    <div class="box">
        <div id="real-skills">
    <div class="skills">
    <div class="skill">
        <div class="skill-name">HTML</div>
        <div class="skill-bar">
            <div class="skill-per bg-primary" per="90%" style="max-width:90%;"></div>
        </div>
    </div>
 </div>
 <div class="skills">
    <div class="skill">
        <div class="skill-name">CSS</div>
        <div class="skill-bar">
            <div class="skill-per bg-warning" per="85%" style="max-width:85%;">
            </div>
        </div>
    </div>
 </div>
 <div class="skills">
    <div class="skill">
        <div class="skill-name">Javascript</div>
        <div class="skill-bar">
            <div class="skill-per" per="70%" style="max-width:70%;">
            </div>
    </div>
 </div>
        </div>
    </div>
  
</div> 
 -->

</template>

<script>
</script>

<style>
.box {
    background-color: bisque;
    height: 2000px;
    width: 100%;
}
.skill-nav {
    display: flex;
    justify-content: center;
    border-bottom: 2px yellowgreen solid;
}
.skills {
    padding:0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
} 
.skill {
    width: 100%;
    min-height: 8vh;
    display: flex;
    align-items: center;
    background: none;

}

.skills {
width: 100%;
max-width: 80%;
padding: 0 20px;
}

.skill-name {
    font-size: 18px;
    font-weight: 700;
    color: #010101;
    text-transform: uppercase;
    margin: 10px 0;
    position: absolute;
}
.skill-bar {
    margin-top: 50px;
    position: relative;
    width: 90%;
    height: 10px;
    background: #282828;
    border-radius: 3px;
}
.skill-per {
    height: 10px;
    background: yellowgreen;
    border-radius: 3px;
    position: relative;
    animation: scrollSkill 2s ease-in-out;
}

.skill-per::before {
    color: aliceblue;
    content: attr(per);
    position: absolute;
    padding: 4px 6px;
    background: #010101;
    border-radius: 4px;
    font-size: 12px;
    top: -35px;
    right: 0;
    transform:  translate(50%);

}
.skill-per::after{
color: white;
content: " ";
position: absolute;
width: 10px;
height: 10px;
background: #010101;
top: -15px;
right:0;
transform: translateX(50%) rotate(45deg);
border-radius: 2px;


}

@keyframes scrollSkill {
    from {
        width: 0;

    }
    to {
        width: 100%;
    }
}

</style>