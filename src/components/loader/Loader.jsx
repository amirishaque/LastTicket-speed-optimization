import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './style/style.css'

const Loader = () => (
  <>
   <div className="page-loader">
   <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#0DCCD7"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
     <p>Get ready for the excitement!</p>
   </div>
  


  </>
);

export default Loader;
