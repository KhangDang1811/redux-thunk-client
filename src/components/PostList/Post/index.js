import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../../redux/actions';

export default function Post({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();


  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.ProductName}
        subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
        SupplierID:  {post.SupplierID}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
        CategoryID:  {post.CategoryID}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton >
          <FavoriteIcon />
          <Typography component='span' color='textSecondary'>
            {`${post.UnitPrice} $`}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
