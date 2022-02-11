import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const StyledImage = styled(Image)({
  image: {
    backgroundColor: "grey",
  },
});

export interface CardProps {
  poster?: string;
  width?: number;
  height?: number;
}

const ImageCard = ({ poster, width, height }: CardProps) => {
  return (
    <Box>
      <StyledImage
        src={
          poster
            ? `https://image.tmdb.org/t/p/w500${poster}`
            : "/static/portrait-placeholder.png"
        }
        alt="Vercel Logo"
        width={width}
        height={height}
        layout="responsive"
        objectFit="contain"
      />
    </Box>
  );
};

export default ImageCard;
