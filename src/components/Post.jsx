import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://media.istockphoto.com/id/1395140920/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9-%D1%87%D0%BE%D1%80%D0%BD%D0%B8%D1%87%D0%BD%D0%B8%D0%B9-%D1%96-%D1%80%D1%83%D0%BA%D0%BE%D0%BB%D0%B0-%D1%81%D0%B2%D1%96%D0%B6%D0%B8%D0%B9-%D1%84%D1%80%D1%83%D0%BA%D1%82%D0%BE%D0%B2%D0%B8%D0%B9-%D1%81%D0%B0%D0%BB%D0%B0%D1%82-%D0%B7-%D1%81%D0%B8%D1%80%D0%BE%D0%BC-%D1%96-%D0%BC%D0%B8%D0%B3%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%BC%D0%B8-%D0%B3%D0%BE%D1%80%D1%96%D1%85%D0%B0%D0%BC%D0%B8-%D0%B2%D0%B8%D0%B4-%D0%B7%D0%B2%D0%B5%D1%80%D1%85%D1%83.webp?s=2048x2048&w=is&k=20&c=qq-KeL6jYVtDnliavNcLbspojUzDmvYPuq-noGX3OYA="
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
