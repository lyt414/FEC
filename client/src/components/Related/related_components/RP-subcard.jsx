import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ComparisonModal from './RP-Modal.jsx';
import { Link } from 'react-router-dom';

const RP_sub = ({item, mainInfo}) => {

  const[productInfo, setInfo] = useState({});
  const[productId, setProductId] = useState();
  const[stylePic, setStylePicture] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png');
  const[stylePrice, setStylePrice] = useState();
  const[salePrice, setSaleprice] = useState(0);
  const[styleName, setStyleName] = useState();
  const[reviewInfo, setReview] = useState(0);
  const[showModal, setModal] = useState(false);
  const[addtionalImage, setaddtionalImage] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png');

  const avgReview = (reviewObj) => {
    let reviewNum=0;
    let ratingSum=0;

    if(reviewObj) {
      let keys = Object.keys(reviewObj);
      let values = Object.values(reviewObj);

        for (var i=0; i<keys.length; i++) {
          reviewNum += parseInt(values[i]);
          ratingSum += parseInt(keys[i])*parseInt(values[i]);
        }
    }


    return reviewNum > 0?  (ratingSum/reviewNum).toFixed(1) : 0

  };

  const getProductInfo = async () => {
    try {
      const response =  await axios.get(`/related/${item}`);
      if(response) {
        if(response.data['reviewStars'].ratings) {
          const avgReviewnum = avgReview(response.data['reviewStars'].ratings);
          setReview(avgReviewnum)
        }
        setInfo(response.data['prod']);
        setProductId(response.data['prod'].id);
        if(response.data['style']['results'][0]['photos'][0]['url']){
          setStylePicture(response.data['style']['results'][0]['photos'][0]['url']);
        }

        if(response.data['style']['results'][0]['photos'][0]['thumbnail_url']){
          setaddtionalImage(response.data['style']['results'][0]['photos'][0]['thumbnail_url']);
        }

        setStylePrice(parseInt(response.data['style']['results'][0]['original_price']).toFixed(0))
        if(response.data['style']['results'][0]['sale_price']){
          setSaleprice(parseInt(response.data['style']['results'][0]['sale_price']).toFixed(0))
        }
        const ProductName = response.data['prod']['name'];
        // + ' -- ' + response.data['style']['results'][0]['name']
        setStyleName(ProductName)
      }
    } catch (err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getProductInfo();
  }, [])

  // const calAverageRating;// helper function
  const btMouseOver = (event) => {
    event.target.style['-webkit-text-fill-color'] = '#c62828';
  }
  const btMouseOut = (event) => {
    event.target.style['-webkit-text-fill-color'] = 'transparent';
  }

  // const imgMouseOver = (event) => {
  //   setStylePicture(response.data['style']['results'][0]['photos'][0]['thumbnail_url']);
  // }
  // const imgMouseOut = (event) => {
  //   setStylePicture(response.data['style']['results'][0]['photos'][0]['url']);
  // }

  const actionClick = () => {
    setModal(!showModal);
  }

  useEffect(() => {

  }, [stylePic])

  return(
    <article className = 'rp-card' data-testid = 'rp-subcard'>

      <div className='sub-card-img'>
         <button id='rp-action-button' onMouseOver={btMouseOver} onMouseOut={btMouseOut} onClick={actionClick} href="#" class="fas fa-star"> </button>
         <Link to={`/product/${productId}`}>
         <div className='rp-card-img' style={{'background-image': "url('" + stylePic + "')"}} ></div>
         </Link>
      </div>

      <div className ='sub-card'>
        <div id = 'category'> {productInfo.category}</div>
        <div id = 'name'> {styleName}</div>
        {
          salePrice > 0?
          <div className='rp-allprice'>
            <div id= 'rp-sale-price'> ${salePrice}</div>
            <div id= 'rp-origin-price-dup'>${stylePrice}</div>
          </div>
          : <div id= 'rp-origin-price'> ${stylePrice}</div>
        }
        {
          reviewInfo > 0?
          <div className ='sub-card-star' style = {{'--rating': reviewInfo}}>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
          </div>
          : <div className ='sub-card-no-star'> Be the 1st to Review!</div>
        }
      </div>

      <ComparisonModal
          isOpen={showModal}
          mainFeature = {!mainInfo? [] : mainInfo.hasOwnProperty('features')? mainInfo.features : []}
          currentFeature = {!productInfo? [] : productInfo.hasOwnProperty('features')? productInfo.features : []}
          mainName = {!mainInfo? null: mainInfo.name}
          currentName ={!productInfo? null: productInfo.name}
      />
    </article>
  )
}



export default RP_sub;
