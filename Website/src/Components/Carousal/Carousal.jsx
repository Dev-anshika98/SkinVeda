import "./Carousal.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



import Image1 from "../../assets/Decoration/face1.png"; // Adjust path as necessary
import Image2 from  "../../assets/Decoration/face2.png"; // Adjust path as necessary
import Image3 from  "../../assets/Decoration/face3.png"; // Adjust path as necessary
import Image4 from  "../../assets/Decoration/face4.png"; // Adjust path as necessary
import Image5 from  "../../assets/Decoration/face5.png"; 
import Image6 from  "../../assets/Decoration/face6.png"; 
import Image7 from  "../../assets/Decoration/face7.png"; 

export default function App() {
  // Update the images array with imported paths
  const images = [
    {
      id: "1",
      author: "Image 1",
      path: Image1
    },
    {
      id: "2",
      author: "Image 2",
      path: Image2
    },
    {
      id: "3",
      author: "Image 3",
      path: Image3
    },
    {
      id: "4",
      author: "Image 4",
      path: Image4
    },
    {
      id: "5",
      author: "Image 5",
      path: Image5
    },
    {
        id: "5",
        author: "Image 5",
        path: Image6
      },
      {
        id: "5",
        author: "Image 5",
        path: Image7
      },
   
  ];

  return (
    <div className="Appsic">
      <h1>Here Are some skin Related Issues!</h1>
      <Carousel
        className="crsl"
        autoPlay
        infiniteLoop
        centerMode
        interval={1000}
      >
        {images.map((image) => (
          <img key={image.id} src={image.path} alt={image.author} />
        ))}
      </Carousel>
    </div>
  );
}
