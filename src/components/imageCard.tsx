import { Box } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  image: {
    backgroundColor: "grey",
  },
}));

export interface CardProps {
  poster?: string;
  width?: number;
  height?: number;
}

const ImageCard = ({ poster, width, height }: CardProps) => {
  const classes = useStyles();

  return (
    <Box>
      <Image
        className={classes.image}
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
