import {
  Button,
  Card,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import React from "react";
import { Videos } from "../utils/types";
import DialogForm from "./dialog";

const classes: SxProps<Theme> = {
  container: {
    borderBottom: "0.5px solid grey",
    borderRadius: "5px",
    boxShadow: "0 5px 20px rgb(0 0 0 /30%), 0 0px 10px rgb(0 0 0 / 30%)",
  },
  button: {
    borderRadius: "15px",
    position: "absolute",
    margin: "8px",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "red",
    },
  },
};

interface TrailersProps {
  trailers: Videos[];
}

const Trailers = ({ trailers }: TrailersProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container item xs={12}>
      <Grid item xs={12} py={1} borderBottom="0.5px solid grey">
        <Typography width="100%" variant="h5" align="center">
          Trailers and videos
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        p={2}
        display="flex"
        justifyContent="space-between"
      >
        {trailers?.map((it) => {
          return (
            <Grid item xs={isMobile ? 6 : 3} key={it?.id} py={3} px={1}>
              <Card sx={classes.container} onClick={handleClickOpen}>
                <Grid container item xs={12} p={0.5}>
                  <CardMedia
                    component="img"
                    image={`https://i.ytimg.com/vi_webp/${it?.key}/maxresdefault.webp`}
                    alt="green iguana"
                  />

                  <Button
                    variant="contained"
                    size="small"
                    disableFocusRipple
                    sx={classes.button}
                  >
                    Watch
                  </Button>
                </Grid>
              </Card>
              <DialogForm handleClose={handleClose} open={open} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Trailers;
