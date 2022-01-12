import React from 'react'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
      <Loader 
        type="ThreeDots"
        color="#FFFFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
  )
}

export default Loading;

