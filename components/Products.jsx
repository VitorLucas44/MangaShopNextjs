import React from 'react'
import { connect } from 'react-redux'
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);


import Product from './Product'


const Products = ({products}) => {
//    console.log(products)

  return (
    <section className="flex mt-8 flex-col w-15 flex-1 items-center justify-center px-5 text-center">
      <div className='h-70'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.manga-news.com/public/2023/news_04/one-pice-pays-de-wano-visuel-mars-2023.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Egaming.2Egentside.2Ecom.2Fs3.2Ffrgsg.2Fmanga.2Fdefault_2021-04-14_576f87dd-86ed-4a01-81b3-ccb36579e9a2.2Ejpeg/1200x675/quality/80/jujutsu-kaisen-saison-2-date-de-sortie-trailer-scenario-personnages-streaming-tout-savoir.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.gqmagazine.fr/photos/61fbc2e73e6a79f4873ed6e0/16:9/pass/Attaque-Titans.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://occ-0-1722-993.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABboqDwV98d-QpA6biauPIcgNeH_c439AXzsln9B1k2Ol9F36YokyOE42ORtSKEx-CiqNsiC-6Dhm4-mFCK1q9OZRJFa9rG_CUvHe.jpg?r=685" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://static.hitek.fr/img/actualite/ill_m/625816794/dragonballsuper.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/63A5C7AAB333F81E23212A834029E19EB0D2650F292FBD35A7123B78F3AB1D47/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cultureasiatique.fr/wp-content/uploads/2022/08/my-hero-academia-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://static.bandainamcoent.eu/high/jojo/jojo-bizarre-adventure-all-star-battle-r/02-news/JOJOASBR_launchTrailer_thumbnail.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.buzzwebzine.fr/wp-content/uploads/2023/01/quand-reprend-hunter-x-hunter-1024x576.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>

        <div className="flex-col px-20 ">
            { products.map((product) => (
                <Product key={product.id} product={product} />
            )) }
        </div>
    </section>
  )
}

// shortcode
const mapStateToProps = (state) => ({products : state.shop.products})

// long code
// const mapStateToProps = (state) => {
//     return {
//         products : state.shop.products
//     }
// }

export default connect(mapStateToProps)(Products)