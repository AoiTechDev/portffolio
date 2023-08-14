import Image from "next/image";

const MyImage = ({
  src,
  alt,
  width,
  height,
  isVisible,
  containerRef,
  layout = "intrinsic",
}) => {
  
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        className={isVisible ? 'my-image scroll-left' : 'my-image'}
        ref={containerRef}
      />
    </>
  );
};

export default MyImage;
