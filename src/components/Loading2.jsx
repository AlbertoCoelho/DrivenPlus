import Loader from 'react-loader-spinner'

export default function Loading2(){
  return (
    <Loader 
    type="ThreeDots"
    color="#FFFFFF"
    height={100}
    width={100}
    timeout={3000} //3 secs
  />
  );
}
