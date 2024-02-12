export default function BrandingSection() {
  return (
    <div className="sm:h-[650px] md:h-[550px] sm:py-20 px-20 lg:px-28 py-28 relative">
      <div className="h-1/3">
        <h1 className="sm:text-5xl md:text-6xl lg:text-7xl m-0">
          The Art of Branding
        </h1>
      </div>
      <div className="h-2/3 md:pr-[30%]">
        <p className="sm:text-2xl lg:text-3xl font-light">
          At Solvent, our mission is to Digital Transmission. We believe in
          harnessing the power of the essence of successful online presence and
          boarding to deliver unparalleled value to our clients, partners, and
          stakeholders. By combining cutting-edge technology with strategic
          expertise, we aim to be the catalyst for your digital success.
        </p>
      </div>
      <AnimatedCircles />
    </div>
  );
}

function AnimatedCircles() {
  return (
    <>
      <div className="absolute bottom-[85px] right-20 w-[300px] h-[300px] sm:opacity-15 md:opacity-100">
        <div className="relative w-full h-full ">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] border-[1px] border-white rounded-full"></div>
          <div className="absolute top-[50px] left-[50px] w-[200px] h-[200px] border-[1px] border-white rounded-full"></div>
          <div className="absolute top-[100px] left-[100px] w-[100px] h-[100px] border-[1px] border-white rounded-full"></div>
        </div>
      </div>
      {/* [animation:spin_0.6s_linear_infinite] [transform:rotate(180deg)_rotateY(180deg)] */}
      <div className="absolute bottom-[60px] right-14 w-[350px] h-[350px] sm:opacity-15 md:opacity-100 md:[transform:rotate(180deg)_rotateY(180deg)] md:animate-spin">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-[350px] h-[350px] border-[1px] border-white rounded-full"></div>
          <div className="absolute top-[50px] left-[50px] w-[250px] h-[250px] border-[1px] border-white rounded-full"></div>
          <div className="absolute top-[100px] left-[100px] w-[150px] h-[150px] border-[1px] border-white rounded-full"></div>
          <div className="absolute top-[150px] left-[150px] w-[50px] h-[50px] border-[1px] border-white rounded-full"></div>
        </div>
      </div>
    </>
  );
}
