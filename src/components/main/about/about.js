import {
  DetailsParagraph,
  HeadingTitle,
  Pane as PaneComponent,
} from "../../styled.components";
import styles from "./about.module.css";
import wrapper1 from "../../../assets/images/about_image1.jpg";
import styled from "styled-components";

export const Pane = styled(PaneComponent)`
  border-radius: 50% 50% 0 0;
  min-height: 750px;
`;

function AboutComponent() {
  return (
    <div className={styles.container}>
      <div className={styles["info-container"]}>
        <HeadingTitle className={styles["page-title"]}>My Canvas</HeadingTitle>
        <div className={styles["details-container"]}>
          <h4 className={styles["details-title"]}>
            I specialize in oil on canvas and abstract concepts.
          </h4>
          <DetailsParagraph>
            While I've been trained in different mediums, I found a deep
            connection to traditional paintings. I love how it communicates so
            much of the creator to the audience. Ironically, the communication
            feels easier in the abstract.
          </DetailsParagraph>
        </div>
      </div>
      <div className={styles["image-wrapper-container"]}>
        <Pane sourceImage={wrapper1} bgPosition="center" />
      </div>
    </div>
  );
}

export default AboutComponent;
