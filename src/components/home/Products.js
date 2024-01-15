
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
  const data = useLoaderData()
  const productData =data.data;
  return (

<div style={{backgroundColor:'rgb(128 128 128 / 7%)', marginTop:'-7px', padding:'0 10px 0'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', placeItems:'center', marginTop:'-100px', position:'relative'}}>
      {productData.map((item)=>(
        <div className='itemContainer' style={{width:'336px', height:'450px', display:'flex',
         flexDirection:'column', alignItems:'center', backgroundColor:'white', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          marginBottom:'30px', cursor:'pointer'}}>
          <div style={{width:'100%', display:'flex', flexDirection:'row-reverse', fontStyle:'italic'}}>
            <span style={{color:'gray', fontSize:'12px', textTransform:'capitalize', margin:'5px 10px 0px 5px'}}>{item.category}</span></div>
          <img style={{height:'220px', width:'250px', objectFit:'contain', marginBottom:'15px'}} src={item.image} alt={item.title} />
          <div style={{display:'flex',flexDirection:'column', padding:'0 14px 0'}}>
            <div style={{display:'grid', gridTemplateColumns:'5fr 1fr',fontSize:'16px', fontWeight:'500'}}>
            <span>{((item.title).split(' ').slice(0, 4)).join(' ')}</span>
            <span style={{color:'#000000bd', fontSize:'14px'}}>${item.price}</span>
            </div>
          <span style={{fontSize:'13px'}}>{((item.description).length)<45?item.description:(item.description).slice(0,100)}...</span>
          </div>
<div class="flex items-center" style={{marginTop:'7px', width:'100%',marginLeft:'24px', display:'flex', alignItems:'normal'}}>
{Array.from({ length: Math.round(item.rating.rate) }).map((_, index) => (
    <svg
      key={index}
      className="w-4 h-4 text-yellow-400 ms-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  ))}
  {Array.from({ length: Math.round(5-item.rating.rate) }).map((_, index) => (
   <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
   <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
  ))}
  <span style={{fontSize:'12px',color:'#6e6e6e', marginLeft:'6px', display:'flex', alignItems:'center'}}>
  {item.rating.rate}
  <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
  <span style={{textDecoration:'underline', fontSize:'11px'}}>{item.rating.count} Ratings</span>
  </span>
</div>
<button className='bg-yellow-400' style={{marginTop:'15px', width:'90%',height:'35px',borderRadius:'4px', border:'1px solid #00000030', fontSize:'15px',fontWeight:'500'}}>
  Add to Cart
</button>
        </div>
      ))}
      </div>
    </div>
    

  )
}

export default Products