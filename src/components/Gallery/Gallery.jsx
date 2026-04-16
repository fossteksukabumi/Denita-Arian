import { useState, useEffect } from "react";
import {
  GallerySection,
  GalleryContainer,
  GalleryTitle,
  GallerySubtitle,
  GalleryGrid,
  GalleryItem,
  GalleryImage,
  ImageOverlay,
  ImageCaption,
  ModalOverlay,
  ModalContent,
  ModalImage,
  CloseButton,
} from "./Gallery.style";

import img1 from "../../assets/foto/1.jpeg";
import img2 from "../../assets/foto/2.jpeg";
import img3 from "../../assets/foto/3.jpeg";
import img4 from "../../assets/foto/4.jpeg";
import img5 from "../../assets/foto/5.jpeg";
import img6 from "../../assets/foto/6.jpeg";
import img7 from "../../assets/foto/7.jpeg";
import img8 from "../../assets/foto/8.jpeg";
import img9 from "../../assets/foto/9.jpeg";
import img11 from "../../assets/foto/11.jpeg";
import img12 from "../../assets/foto/12.jpeg";
import img13 from "../../assets/foto/13.jpeg";



function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
    { id: 11, src: img11 },
    { id: 12, src: img12 },
    { id: 13, src: img13 },

  ];

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  return (
    <GallerySection id="gallery">
      <GalleryContainer>
        <GalleryTitle>Gallery</GalleryTitle>
        <GallerySubtitle>Momen Berharga Kami</GallerySubtitle>

        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              $delay={`${index * 0.08}s`}
              onClick={() => setSelectedImage(image.src)}
            >
              <GalleryImage
                src={image.src}
                alt="gallery"
                loading="lazy"
              />

              <ImageOverlay>
                <ImageCaption>Klik untuk melihat</ImageCaption>
              </ImageOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GalleryContainer>

      {selectedImage && (
        <ModalOverlay onClick={() => setSelectedImage(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedImage(null)}>
              ✕
            </CloseButton>
            <ModalImage src={selectedImage} alt="preview" />
          </ModalContent>
        </ModalOverlay>
      )}
    </GallerySection>
  );
}

export default Gallery;
