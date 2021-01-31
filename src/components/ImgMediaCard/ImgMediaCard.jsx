import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import style from "./ImgMediaCard.module.scss";

const ImgMediaCard = ({ info, loading }) => {
  const { name, place, preview, priceMin, priceMax, about, address } = info;

  return (
    <Card className={style.card}>
      <CardActionArea>
        <CardContent className={style.cardContent}>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {place}
          </Typography>
        </CardContent>

        {loading ? (
          <CardMedia
            component="img"
            alt={name}
            height="212"
            image={preview}
            title={name}
          />
        ) : (
          <Skeleton variant="rect" height={212} />
        )}

        <CardContent className={style.cardInfo}>
          <Typography gutterBottom variant="body1" component="h3">
            <Grid container justify="space-between">
              <Grid item>Price:</Grid>
              <Grid item>
                <ArrowForwardIcon color="primary" />
              </Grid>
            </Grid>
            <Grid container direction="column">
              <Grid item className={style.price}>
                Min: {priceMin} kr.
              </Grid>
              <Grid item className={style.price}>
                Max: {priceMax} kr.
              </Grid>
            </Grid>
          </Typography>
          <Typography
            className={style.about}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={style.action}>
        <Link display="block" variant="body1" href="#" key={name}>
          {address}
        </Link>
      </CardActions>
    </Card>
  );
};

ImgMediaCard.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    place: PropTypes.string,
    preview: PropTypes.string,
    priceMin: PropTypes.string,
    priceMax: PropTypes.string,
    about: PropTypes.string,
    address: PropTypes.string,
  }),
  loading: PropTypes.bool,
};

export default ImgMediaCard;
