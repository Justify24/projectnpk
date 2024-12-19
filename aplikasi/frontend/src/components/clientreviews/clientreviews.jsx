import React from "react";
import BorderImage from "../../assets/border-wt.png"; // Import image properly

const ClientReviews = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center p-20"
      style={{
        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/8608/c54a/94b288f8e5b4d0347e1cd751435f7fcb?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E94gTFZvIuBBO9cbWlLRXadOm-1Z315ycaVWI2ImQ9z~aA9OkH4vsoyiXI6vZxiyP-9dpAHR3p-OFfJBNNrC-EfDK2YPnTRyE~PjuTC5Xd8KDbxoIQK8Ez1nhjHE3NDE-ElH2U3x-o9cT2yDY2wtrtzvCdU2vLK6c4ydl-pDF4qVblmlnTEfnqIEE2-Dbe4af9J42H3TBEpaqpScfHNwB4tdprTIKO~yoOuejuzQ37HyBJsHf7Y0~bF64zJnBZEgsCqMI611l0zrrCzQbJmLC12Uf3IVqIoQd5s79EXTjiVLzA36hN1qh7Dkh7~y1wKtOW1CU73roGHqGAnYtTqUSw__')",
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white">
        <p className="text-lg font-medium uppercase">Why Choose Us</p>
        <h1 className="text-4xl lg:text-5xl font-bold pb-4">Client's Reviews</h1>
        <p className="text-base font-light pb-8">Company Testimonials</p>

        {/* Decorative Border */}
        <div className="flex justify-center">
          <img
            className="w-full lg:w-[6%] mb-8"
            src={BorderImage}
            alt="Decorative Agrinutri Border"
          />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            {/* Star Ratings */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-6 w-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-3.09 1.637.588-3.864-2.84-2.619 3.918-.576L10 6l1.424 3.578 3.918.576-2.84 2.619.588 3.864L10 15z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-sm text-black mb-6 text-left">
              "AgrinutriIoT has significantly improved our farm productivity.
              The system is easy to use, and the insights are invaluable for
              making better decisions."
            </p>

            {/* User Info */}
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/48"
                alt="Wahyu Bagas"
              />
              <div>
                <p className="font-bold">Wahyu Bagas</p>
                <p className="text-sm text-gray-500">Farmer</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            {/* Star Ratings */}
            <div className="flex mb-4">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="h-6 w-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-3.09 1.637.588-3.864-2.84-2.619 3.918-.576L10 6l1.424 3.578 3.918.576-2.84 2.619.588 3.864L10 15z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-sm text-black mb-6 text-left">
              "This technology is a game-changer for small-scale farmers like
              me. It has helped reduce costs and improve crop health."
            </p>

            {/* User Info */}
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/48"
                alt="Widi Suryo"
              />
              <div>
                <p className="font-bold">Widi Suryo</p>
                <p className="text-sm text-gray-500">Agricultural Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
