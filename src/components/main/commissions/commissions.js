import styled from "styled-components";
import {
  Pane as PaneComponent,
  DetailsParagraph,
  HeadingTitle,
} from "../../styled.components";
import styles from "./commissions.module.css";
import wrapper1 from "../../../assets/images/commissions_image1.webp";

const Pane = styled(PaneComponent)`
  border-radius: 50% 50% 0 0;
  min-height: 625px;
  margin: 1rem auto;
  max-width 625px;
`;

const HeadingSubTitle = styled(HeadingTitle)`
  font-size: 1.5rem !important;
`;

function CommissionsComponent() {
  return (
    <>
      <div className={styles["info-container"]}>
        <div className={styles["info-container__image-wrapper"]}>
          <Pane sourceImage={wrapper1} />
        </div>
        <div className={styles["details-container"]}>
          <HeadingTitle className={styles["page-title"]}>
            Commissions
          </HeadingTitle>
          <div className={styles["details-info"]}>
            <HeadingSubTitle>Two slots per month</HeadingSubTitle>
            <DetailsParagraph
              className={styles["commission-details--paragraph"]}
            >
              In order to ensure quality and to be able to give my clients as
              much attention as possible, I only open two slots for commissions
              every month.
            </DetailsParagraph>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </>
  );
}

export default CommissionsComponent;
