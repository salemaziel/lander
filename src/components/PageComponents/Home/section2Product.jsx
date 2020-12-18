import React from 'react'

import ProductShot from '../../../images/product-shot.png'
import ProductShot500 from '../../../images/product-shot-p-500.png'
import ProductShot800 from '../../../images/product-shot-p-800.png'
import ProductShot1080 from '../../../images/product-shot-p-1080.png'

const SectionProduct = () => (
<div className="section">
  <img src={ProductShot} /*srcSet="
    images/product-shot-p-500.png   500w,
    images/product-shot-p-800.png   800w,
    images/product-shot-p-1080.png 1080w,
    images/product-shot.png        1521w
  " sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, 720px"*/ data-w-id="a4177896-a5e5-6c6a-0980-01ce8ea2054a" style={{opacity: 1}} alt className="product-shot" />
</div>


)

export default SectionProduct