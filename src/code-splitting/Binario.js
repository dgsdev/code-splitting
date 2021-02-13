import Image from '../animations/binario';
import Lottie from 'react-lottie'

export default function Binario() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Image,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={250}
          width={250}
        />
      </div>
    );
  }