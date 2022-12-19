import styled, { css } from "styled-components";
import { HeadingTitle, Pane } from "../../styled.components";

export const BorderedPane = styled(Pane)`
  border: 2px solid ${({ borderColor }) => borderColor ?? "#fff"};
  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `}
`;

export const SubTitle = styled(HeadingTitle)`
  font-size: 2.375rem;
`;

export default function GalleryItem({
  dimensions,
  concept,
  year,
  title,
  paneContent: {
    sourceImage,
    area,
    bgPosition,
    borderRadius,
    borderColor,
  } = {},
}) {
  const componentStyles = {
    "item-container": {
      fontSize: "1.25rem",
    },
    "image-wrapper": {
      display: "grid",
      minHeight: "400px",
      height: title ? "auto" : "100%",
    },
    "caption-descriptor": {
      padding: "1rem 0",
      borderTop: "1px solid #fff",
    },
  };
  return sourceImage ? (
    <figure style={componentStyles["item-container"]}>
      <div style={componentStyles["image-wrapper"]}>
        <BorderedPane
          sourceImage={sourceImage}
          area={area}
          bgPosition={bgPosition}
          borderRadius={borderRadius}
          borderColor={borderColor}
        />
      </div>
      <figcaption>
        {title && <SubTitle as="h3">{title}</SubTitle>}
        {dimensions && (
          <div style={componentStyles["caption-descriptor"]}>
            Dimensions: {dimensions}
          </div>
        )}
        {concept && (
          <div style={componentStyles["caption-descriptor"]}>
            Conccept: {concept}
          </div>
        )}
        {year && (
          <div style={componentStyles["caption-descriptor"]}>
            <time dateTime={year}>Year: {year}</time>
          </div>
        )}
      </figcaption>
    </figure>
  ) : (
    title && <HeadingTitle as="h6">{title}</HeadingTitle>
  );
}
