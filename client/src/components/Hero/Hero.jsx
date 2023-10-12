import "../Input/input.css";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          className="flex items-center justify-center h-screen w-screen"
          style={backgroundImageStyle}
        >
          <div className="flex flex-col gap-4 p-96 text-justify">
            <h1 className="text-4xl">Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              rem repellendus doloribus ipsum autem ipsam. Quos nemo amet minus
              hic architecto quod illo suscipit consectetur asperiores,
              provident id aliquam officia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
