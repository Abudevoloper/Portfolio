<template>
    <div class="exit">
        <router-link to="/exit">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
        </router-link>

    </div>
    <div class="container">

        <h3><strong> ABOUT </strong></h3>
        <p>
            Hayotda hamma insonlar muaffaqqiyatga erishish uchun imkoniyatlari boricha
            xarakat qiladilar.
            Muaffaqqiyat deganda alsida nimani tushunish kerak?
            Yaxshi Uy -?  Qimmat Mashina -?, Pul-? ,

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
                            Odatda Kasb tanlash umrimiz davomida asosiy ro'l o'ynaydi,
                            Yil, Oy!?,   yo'q Kunimiz qiziqarli o'tishi kasbimiz o'zimizga,
                            ya'ni xarakterimizga,qiziqishlarimizga mos kelishi kerak.
                            Men o'zimni Web Developer va Desinger kasbida tasavvur qildim.

                        </p>
                        <div class="col-12 col-sm-6 col-md-6">
                            <ul>
                                <li><small> Birthday: </small>7-July 1997</li>
                                <li><small> Website: </small>Abu4942.com</li>
                                <li><small> Telephone: </small>01084065616</li>
                                <li><small> City: </small>South Kor. Seoul</li>
                            </ul>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6">
                            <ul>
                                <li><small> Age: </small>26</li>
                                <li><small> Email: </small>abdurashid123@naver.com</li>
                                <li><small> University: </small>U1 University</li>
                                <li><small> Country: </small>Uzbekistan</li>

                            </ul>
                        </div>
                        <p>
                            다음에 여기를 변집하여 새 정보를 작성할 거시다!
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