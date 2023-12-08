<template>

    <h3><strong> RESUME </strong></h3>
    <p>
        1997- yilda Jizzax Viloyatida O'qituvchilar Oilasida tug'ilganman ,
        Bir yildan so'ng Asl Yurtimiz Farg'onaga qaytib ketamiz,
        Yillar o'tib Maktab Litsey va Institutga talabalikka tavsiya qilinganman.
    </p>

    <div class="row">
        <div class="col-12 col-sm-6">
            <div class="slide">
                <span> Start Academic Experience </span>
                <div class="resume-item">
                    <p>
                        <em>
                            2013-yilda Farg'ona viloyati Farg'ona shahar 2-sonli akademik litseyiga ta'lim olish uchun
                            bordim,
                            2016-yil Litseyni tamomlab 'FarPI' ga talabalikka tavsiya qilindim,
                            Quyida batafsil...

                        </em>
                    </p>
                    <ul>
                        <li> Uzbekistan, Ferghana City</li>
                        <li> Academic lyceum</li>
                        <li>Math, Physics</li>
                    </ul>
                </div>
            </div>

            <span> Professional Experience </span>
            <div class="resume-item">
                <h6>
                    2013-2016
                </h6>
                <br>
                <em> Uzbekistan:FarPI, Lyceum... </em>
                <ul>
                    <li><p>2013-yilda Farg'ona davlat Universiteti Qoshidagi 2-sonli
                        Akademik Litseyiga O'qish uchun bordim, Litseyda Matematika Fizika fanlaridan tahsil oldim.
                    </p></li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat mollitia possimus
                        quas quo soluta voluptas!</p></li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat mollitia possimus
                        quas quo soluta voluptas!</p></li>


                </ul>
            </div>
            <span> Education </span>
            <div class="education-item">
                <h6> 2016-2019 </h6> <br>
                <em> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quaerat?</em>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi culpa dignissimos, enim esse itaque maxime mollitia nam nemo nisi ratione,
                    recusandae repellendus sint vero voluptatem.
                </p>
            </div>

        </div>

        <div class="col-12 col-sm-6">
            <div class="go-up-slide">
                <span> First appearance in IT </span>
                <div class="resume-item">

                    <p class="padding-left"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis dolores est harum libero quae quaerat reprehenderit sapiente sint tempore, tenetur?
                    </p>
                    <p class="padding-left"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis dolores est harum libero quae quaerat reprehenderit sapiente sint tempore, tenetur?
                    </p>
                    <ul>
                        <li>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Blanditiis dolores est harum libero quae quaerat reprehenderit sapiente sint tempore,
                                tenetur?
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <span> PHP  </span>
            <div class="resume-item">
                <p class="padding-left">
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Alias aperiam delectus enim minima, nesciunt placeat porro quo rem similique voluptatem.
                </p>
                <ul>
                    <li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Blanditiis dolores est harum libero quae quaerat reprehenderit sapiente sint tempore,
                            tenetur?
                        </p>
                    </li>
                </ul>
            </div>
            <span> About my dream</span>
            <div class="resume-item">
                <p class="padding-left">
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Alias aperiam delectus enim minima, nesciunt placeat porro quo rem similique voluptatem.
                </p>
                <ul>
                    <li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Blanditiis dolores est harum libero quae quaerat reprehenderit sapiente sint tempore,
                            tenetur?
                        </p>
                    </li>
                </ul>
                <p>
                    <em>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab earum excepturi, expedita fuga fugiat fugit laborum placeat quo sequi suscipit!
                    </em>
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

<style>
h3 {
    position: relative;
    display: flex;
    justify-content: center;
    border-bottom: 2px #1045ef dashed;
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

    font-family: sans-serif;
    font-size: 1.1em;
}

li {
    padding-top: 3px;
}

h6 {
    border-radius: 5px;
    font-size: 16px;
    background: #caceca;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
    animation: slide 2s ease-in-out;
}

.education-item {
    border-left: 2px #0563b8 solid;
    padding: 20px 0 0 10px;
}

.padding-left {
    padding-left: 30px;
}

@keyframes go-up-slide {
    from {
        top: -20px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 2;
    }
}


</style>