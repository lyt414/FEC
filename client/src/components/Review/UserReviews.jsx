import React from 'react'
import SortReview from './SortReview.jsx'
import test from './test-review.js'




const UserReviews = (props) => {
  //console.log(props)
  //console.log(props.reviews.length)
  console.log(test['results'])
  let reviews = test['results']
  //test sorting
  const recent = [].concat(reviews)
    .sort((a, b) => a.date < b.date ? 1 : -1)
    .map( (item, i) => {
      return <div key={i}>{item.date}</div>
    })

  if (props.reviews.length > 0)
  return (
    <div>
      <SortReview
       amount={props.reviews.length}
      />
     {recent}

    </div>
  )
  return (
    null
  )
}
/*
<div id="review-stars">****</div>
    <div id="date">Cognito, April 2, 2019</div>
    <div id="review-title">Review title w/ word break to prevent wrapping</div>
    <div id="optional-line">optional line?</div>
    <div id="product-review">product review?Lollipop marshmallow</div>
    <div id="recommend">I recommend this product (optional?)</div>
    <div id="response">response greyed out and optional</div>
    <div id="review-helpful">Was this review helpful? + report button</div>
*/

export default UserReviews