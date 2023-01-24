<template>
    <h3><strong> RESUME </strong></h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquam autem consectetur et, fugit hic illum itaque magnam mollitia placeat quaerat,
        reiciendis, sed tempore vitae voluptatem.
    </p>

    <div class="row">
        <div class="col-12 col-sm-6">
            <span> Abdurashid </span>
            <div class="resume-item">
                <p>
                    <em>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Architecto blanditiis delectus ea eius excepturi hic ipsam,
                        mollitia nesciunt officiis, praesentium repellendus sed tenetur ut veritatis.
                    </em>
                </p>
                <ul>
                    <li> Uzbekistan, Ferghana City</li>
                    <li> Academic Collage</li>
                    <li>Math, Physics</li>
                </ul>
            </div>
            <span> Education </span>
            <div class="education-item">
                <h6>
                    2013-2016
                </h6>
                <em> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quaerat?</em>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi culpa dignissimos, enim esse itaque maxime mollitia nam nemo nisi ratione,
                    recusandae repellendus sint vero voluptatem.
                </p>
            </div>
        </div>

        <div class="col-12 col-sm-6">
            <span> Professional Experience </span>
            <div class="resume-item">
                <h6>2016-Present</h6>
                <p>

                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PortfolioList"
}
</script>

<style scoped>
h3 {
    display: flex;
    justify-content: center;
    border-bottom: 2px #1045ef dashed;
    padding-top: 100px;
    padding-bottom: 20px;
}

.resume-item {
    border-left: 2px #0563b8 solid;
    padding: 0 0 0 10px;
}


.col-12 {

}

span {
    color: #0563b8;
    font-size: 2em;
    padding-top: 20px;
    font-family: "Poppins", sans-serif;
}

p {
    padding-top: 10px;
}

em {
    font-size: 1.1em;
}

li {
    padding-top: 3px;
}
h6 {
    font-size: 16px;
    background: #f7f8f9;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
}
.education-item {
     border-left: 2px #0563b8 solid;
     padding: 20px 0 0 10px;
 }

</style>