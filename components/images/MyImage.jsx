
import Image from "next/image";


const MyImage = ({ src, alt, width, height, layout = "intrinsic" }) => {
  
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
       
      
        className="my-image"
      />
    </>
  );
};

export default MyImage;
