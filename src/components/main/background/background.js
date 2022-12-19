import styled from "styled-components";
import {
  DetailsParagraph,
  HeadingTitle as HeadingTitleComponent,
  Pane,
} from "../../styled.components";
import styles from "./background.module.css";
import image1 from "../../../assets/images/background_image1.jpg";

const DetailsListItem = styled(DetailsParagraph).attrs({ as: "li" })`
  font-size: 1.25rem;
`;

const HeadingTitle = styled(HeadingTitleComponent)`
  font-size: 6.375rem;
`;

function BackgroundComponent() {
  return (
    <>
      <HeadingTitle>My journy</HeadingTitle>
      <div className={styles.container}>
        <div className={styles["image-wrapper"]}>
          <Pane sourceImage={image1} />
        </div>
        <div className={styles["info-wrapper"]}>
          <span className={styles["info-wrapper__title"]}>
            Education and Artist Residencies
          </span>

          <ul>
            <DetailsListItem>
              Undergraduate Fine Arts Program at Trempleway Academy{" "}
            </DetailsListItem>

            <DetailsListItem>
              Post-graduate Degree in Abstract Painting from Salguerro
              University
            </DetailsListItem>

            <DetailsListItem>
              Artist-in-Residence at Salguerro Art Studios
            </DetailsListItem>

            <DetailsListItem>
              Artist-in-Residence at Crystalshore Creative Retreats
            </DetailsListItem>
          </ul>
        </div>
        <div className={styles["info-wrapper"]}>
          <span className={styles["info-wrapper__title"]}>
            Galleries and Exhibits
          </span>

          <ul>
            <DetailsListItem>
              Salguerro Sun Gallery (guest artist)
            </DetailsListItem>
            <DetailsListItem>
              RKND Fine Arts Studio (group show)
            </DetailsListItem>
            <DetailsListItem>
              Crystalshore Art Gallery (solo exhibit)
            </DetailsListItem>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BackgroundComponent;
