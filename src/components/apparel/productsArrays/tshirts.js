

    let apparel = () => { 
    
    const tees = () => {
        let tees = [
        {
        image:'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T210A1MPA3176PT17X11Y0D1008072544FS8580/views/1,width=378,height=378,appearanceId=1,backgroundColor=F2F2F2,modelId=1543,crop=list/skull-with-honey-mens-t-shirt.jpg',
        title: 'Skull Pilot Mens T-Shirt',
        price: 19.99,
        color: 'white',
        gender: 'mens'
        },
        {
        image:'https://i5.walmartimages.com/asr/1007d512-2aaf-4766-9d04-3681be7677a5_1.e1cc3834e94250d30cb935ff561e0e2a.jpeg',
        title:'Godzilla Mens T-Shirt',
        price: 24.99,
        color: 'orange',
        gender: 'mens'
        },
        {
        image: 'https://ih1.redbubble.net/image.210398864.6640/gptr,1265x,front,black-c,330,402,600,600-bg,f8f8f8.u1.jpg',
        title: 'Psychedelic Mens T-Shirt',
        price: 29.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://ih1.redbubble.net/image.367928717.6146/ssrco,classic_tee,womens,403c32:92341a482f,front_alt,square_product,600x600.u2.jpg',
        title: 'Silly Monkey Womens T-Shirt',
        price: 19.99,
        color: 'brown',
        gender: 'womens'
        },
        {
        image: 'https://ctl.s6img.com/society6/img/VCC8Ehtlfbq1WTrjVzPv2Tx1k0Y/w_700/tshirts/men/greybg/black/~artwork,bg_FFFFFFFF,fw_3300,fh_5100,fx_-900,iw_5100,ih_5100/s6-original-art-uploads/society6/uploads/misc/bdcae30635bb4f52ae17abdf45439414/~~/skater-yeti-tshirts.jpg',
        title: 'Skating Yeti Mens T-Shirt',
        price: 19.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://ctl.s6img.com/society6/img/sDPpm18R919GFlX8WlsXNl9PfQU/w_700/tshirts/men/greybg/black/~artwork,bg_FFFFFFFF,fw_3301,fh_5106,fx_-300,fy_81,iw_3960,ih_4752/s6-original-art-uploads/society6/uploads/misc/88a9172862a44f58a8b69186f588a5b2/~~/daddy-shrk-doo-doo-doo-funny-daddy-shark-tshirts.jpg?wait=0&attempt=0',
        title: 'Cringe Shark Mens T-Shirt',
        price: 4.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/RIPNDIP-Lord-Alien-Pocket-Black-T-Shirt-_261484-front.jpg',
        title: 'Simple Alien Mens T-Shirt',
        price: 19.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://ih1.redbubble.net/image.691410041.7830/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.u3.jpg',
        title: 'Skull Skater Mens T-Shirt',
        price: 24.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X0Y16D1023932131FS3652/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2,modelId=115,crop=list/skateboarding-skateboard-skate-skater-sk8te-gift-mens-premium-t-shirt.jpg',
        title: 'Womanizer Mens T-Shirt',
        price: 19.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://ae01.alicdn.com/kf/Hceada19f04224c51829d0fba71eeb740y/Era-Vulgaris-T-Shirt-Era-Vulgaris-Queens-Stone-Age-Music-Vinyl-Record-Band.jpg_Q90.jpg_.webp',
        title: 'Era Vulgaris Mens T-Shirt',
        price: 29.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T210A2MPA3176PT17X31Y45D10619064S35/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=1543,crop=list/pig-and-skateboard-mens-t-shirt.jpg',
        title: 'Skater Piglet Mens T-Shirt',
        price: 14.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://ih1.redbubble.net/image.932807097.1951/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.u3.jpg',
        title: 'Rollerskater Womens T-Shirt',
        price: 19.99,
        color: 'black',
        gender: 'womens'
        },
        {
        image: 'https://ctl.s6img.com/society6/img/C3wrIQy3ajcfB9lza2D_T6_aMeU/w_700/tshirts/women/greybg/tri-black/~artwork,bg_FFFFFFFF,fw_3301,fh_5101,fx_46,fy_338,iw_3206,ih_4290/s6-original-art-uploads/society6/uploads/misc/1aa6e28dcd4d4477b701f4b6c15bee09/~~/just-skate-retro-roller-skating-tshirts.jpg',
        title: 'Just Skate Womens T-Shirt',
        price: 14.99,
        color: 'black',
        gender: 'womens'
        },
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/cat_max/Thrasher-Flame-Logo-Grey-T-Shirt-_164401-CA.jpg',
        title: 'Thrasher Grey Womens T-Shirt',
        price: 14.99,
        color: 'grey',
        gender: 'womens',
        }, 
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Primitive-x-Naruto-Shippuden-Sasuke-Curse-Mark-Black-T-Shirt-_350189-front-US.jpg',
        title: 'Cookies Hardwood Flava Black T-Shirt',
        price: 24.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Cookies-Hardwood-Flava-Black-T-Shirt-_316150-front-US.jpg',
        title: 'Primitive x Naruto Shippuden Sasuke Curse Mark Black T-Shirt',
        price: 24.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Thrasher-Flame-Sky-Blue-T-Shirt-_314150-front-US.jpg',
        title: 'Thrasher Flame Sky Blue T-Shirt',
        price: 29.99,
        color: 'blue',
        gender: 'mens'
        },
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Primitive-x-Naruto-Shippuden-Kakashi-Black-T-Shirt-_357319-back-US.jpg',
        title: 'Primitive x Naruto Shippuden Kakashi Black T-Shirt',
        price: 19.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Episode-x-Jujutsu-Kaisen-Satoru-Blue-Tie-Dye-T-Shirt-_351682-back-US.jpg',
        title: 'Episode x Jujutsu Kaisen Satoru Blue Tie Dye T-Shirt',
        price: 19.99,
        color: 'blue',
        gender: 'mens'
        },
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Primitive-x-Naruto-Crows-Washed-Burgundy-T-Shirt-_331757-back-US.jpg',
        title: 'Primitive x Naruto Crows Washed Burgundy T-Shirt',
        price: 24.99,
        color: 'red',
        gender: 'mens'
        },
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/A-Lab-Never-Grow-Up-Blue-%26-White-Tie-Dye-T-Shirt-_335828-front-US.jpg',
        title: 'A-Lab Never Grow Up Blue & White Tie Dye T-Shirt',
        price: 19.99,
        color: 'blue',
        gender: 'mens'
        },
        ]
    return tees
    }
    let longsleeves = () => {
        
        let longsleeves = [
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/image/Thrasher-Mag-Logo-Long-Sleeve-T-Shirt-_258518.jpg',
        title: 'Poser Black Longsleeve',
        price: 39.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/image/Fortune-x-The-Skate-Kitchen-Black-Long-Sleeve-T-Shirt-_308713.jpg',
        title: 'Skate Kitchen Bananasleeve',
        price: 49.99,
        color: 'black',
        gender: 'mens'
        },
        {
        image: 'https://i.pinimg.com/originals/18/c1/0c/18c10c7a1090ff2e032ccc5518d89bcf.jpg',
        title: 'Black Wolf Military Green Longsleeve',
        price: 34.99,
        color: 'green',
        gender: 'mens'
        },
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/cat_max/Key-Street-Moto-Ichiban-Black-Long-Sleeve-T-Shirt-_354403-back-US.jpg',
        title: 'Key Street Moto Ichiban Black Long Sleeve T-Shirt',
        price: 34.99,
        color: 'black',
        gender: 'mens'
        }
        ]
        return longsleeves
    }
    let hoodies = () => {
        let hoodies = [
        {
        image: 'https://scene7.zumiez.com/is/image/zumiez/image/Thrasher-Skate-Mag-Radical-Red-Pullover-Hoodie-_142533-CA.jpg',
        title: 'Thrasher Red Mens Hoodie',
        price: 59.99,
        color: 'red',
        gender: 'mens'
        }
        ]
        return hoodies
    }
    return { tees, longsleeves, hoodies };
}


module.exports = {apparel}