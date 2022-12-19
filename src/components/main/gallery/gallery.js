import { HeadingTitle } from "../../styled.components";
import styles from "./gallery.module.css";
import { collectionData } from "./collection.data";
import { lazy, Suspense } from "react";
import shortid from "shortid";
import styled from "styled-components";
const GalleryItem = lazy(() => import("./galleryItem.component"));

const Loader = styled.div`
   {
    place-self: center;
    display: inline-block;
    margin-top: 1rem;
    width: 80px;
    height: 80px;
    &:after {
      content: " ";
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 6px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function GalleryComponent() {
  return (
    <>
      <HeadingTitle>Sample Works</HeadingTitle>
      <div className={styles.container}>
        <Suspense fallback={<Loader />}>
          {collectionData.map((props) => (
            <GalleryItem {...props} key={shortid.generate()} />
          ))}
        </Suspense>
      </div>
    </>
  );
}

export default GalleryComponent;
