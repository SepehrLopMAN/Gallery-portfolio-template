import React from "react";
import { DetailsParagraph, HeadingTitle, Pane } from "../../styled.components";
import styles from "./home.module.css";
import wrapper1 from "../../../assets/images/home_image1.jpg";
import wrapper2 from "../../../assets/images/home_image2.jpg";

function HomeComponent() {
  return (
    <div className={styles.container}>
      <div className={styles["image-wrapper"]}>
        <Pane
          sourceImage={wrapper1}
          area="1/1/150/120"
          bgPosition="right bottom"
        ></Pane>
        <Pane sourceImage={wrapper2} area="70/66/140/150"></Pane>
      </div>
      <div className={styles["profile-container"]}>
        <HeadingTitle className={styles["profile__name--heading"]}>
          Ellen Downing
        </HeadingTitle>
        <div className={styles["profile__detials-container"]}>
          <h3 className={styles["detials-title--h3"]}>Visual artist</h3>
          <DetailsParagraph>
            I've been painting for eight years. While being an artist is a
            difficult tug-of-war between my inner dreamer and critic, I've grown
            to love this process a lot. It hasn't just taught me much about the
            world, but also about myself.
          </DetailsParagraph>
        </div>
        <div className={styles["profile__details--invitation"]}>
          Get to know my art
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
