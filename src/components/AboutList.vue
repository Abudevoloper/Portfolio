<template>
    <!--    <div class="exit">-->
    <!--        <router-link to="/exit">-->
    <!--            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">-->
    <!--                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>-->
    <!--            </svg>-->
    <!--        </router-link>-->

    <!--    </div>-->
    <div class="container">

        <h3><strong> ABOUT </strong></h3>
        <p>
            Hayotda hamma insonlar muaffaqqiyatga erishish uchun imkoniyatlari boricha
            xarakat qiladilar.
            Muaffaqqiyat deganda alsida nimani tushunish kerak?
            Yaxshi Uy -? Qimmat Mashina -?, Pul-? ,

        </p>

        <div class="row">

            <div class="col-12 col-md-12 col-lg-6 d-flex justify-content-center pt-5">
                <div class="image">

                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-6">
                <h2 class="pt-3">
                    Web Developer & Web Designer
                </h2>
                <div id="right-row">
                    <div class="row">
                        <p>
                            Odatda Kasb tanlash umrimiz davomida asosiy ro'l o'ynaydi.<br/>
                            Yil, Oy!?, yo'q Kunimiz qiziqarli o'tishi kasbimiz o'zimizga,
                            ya'ni xarakterimizga,qiziqishlarimizga mos kelishi kerak.
                            Men o'zimni Web Developer va Desinger kasbida tasavvur qildim.

                        </p>
                        <div class="col-12 col-sm-6 col-md-6">
                            <ul>
                                <li><small> Birthday: </small>7-July 1997</li>
                                <li> <small>Working website:</small>
                                    <a href="https://sunmi-team.netlify.app" class="text-decoration-none p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green"
                                         class="bi bi-cloud-arrow-up"
                                         viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"/>
                                        <path
                                            d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                    </svg>
                                </a></li>
                                <li><small> Telephone: </small>01084065616</li>
                                <li><small> City: </small>South Kor. Seoul</li>
                            </ul>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6">
                            <ul>
                                <li><small> Age: </small>27</li>
                                <li><small> Email: </small>abdurashid123@naver.com</li>
                                <li><small> University: </small>U1 University</li>
                                <li><small> Country: </small>Uzbekistan</li>

                            </ul>
                        </div>
                        <p>
                            <!--                            다음에 여기를 변집하여 새 정보를 작성할 거시다!-->
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <PortfolioList/>
    </div>

</template>
<script>
import PortfolioList from "@/components/PortfolioList";

export default {
    components: {PortfolioList,}
}
</script>

<style scoped>
svg {

}

.container {
    padding-top: 20px;
    position: relative;
}

col {
    padding-top: 50px;
}

.image {
    position: relative;
    width: 390px;
    height: 450px;
    background-image: url("../assets/img/Abdurashid.jpg");
    background-size: cover;
    animation: slide 1s ease-in-out;
}

strong {
    display: flex;
    justify-content: center;
    border-bottom: #1045ef 3px solid;
    font-family: sans-serif;
    padding-bottom: 5px;
    border-bottom-color: lawngreen;
    border-bottom-style: dashed;
}

h2 {
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    color: darkgrey;
    animation: right-slide 1s ease-in;
}

#right-row {
    position: relative;
    animation: right-slide 1s ease-in;
}


ul {
    list-style: none;
    color: #1045ef;
}

li {
    padding-bottom: 20px;
    font-size: 1.1em;
    font-family: sans-serif;

}

p {
    text-align: center;
}

small {
    color: #1c1212;
    font-size: 1.2em;
}

@keyframes slide {
    from {
        top: 20px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }

}

@keyframes right-slide {
    from {
        top: 20px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 0.5;
    }
}


</style>