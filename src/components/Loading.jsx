import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {ThreeDots} from "react-loader-spinner";
//import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div align='center'>
      <ThreeDots 
        color="#FFFFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  )
}

export default Loading;

