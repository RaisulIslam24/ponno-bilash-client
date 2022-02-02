import React, { useState } from "react";
import "./SingleOrderCard.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import OrderDetails from "./OrderDetails";
import StatusButton from "../StatusButton/StatusButton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "15rem",
    marginBottom: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const SingleOrderCard = ({ order, deleteOrder, handleUpdateStatus }) => {
  const classes = useStyles();

  const [updatedStatus, setUpdatedStatus] = useState(order.status);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        style={{ height: "6rem" }}
        avatar={<Avatar alt={order.name} src={order.photoURL} />}
        action={
          <IconButton
            aria-label="settings"
            onClick={() => deleteOrder(order._id)}
          >
            <DeleteForeverIcon color="secondary" />
          </IconButton>
        }
        title={order.product.name}
        subheader="14/09/2021"
      />
      <CardMedia
        className={classes.media}
        image={order.product.imageUrl}
        title={order.product.name}
      />
      <CardContent
        style={{ height: "4rem" }}
        className="d-flex justify-content-between align-items-center"
      >
        <Typography color="textSecondary" component="h6">
          {order.product.name}
        </Typography>
        <Typography color="textSecondary" component="h6">
          $ {order.product.price}
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-between align-items-center">
        <>
          <Button variant="contained" onClick={handleClickOpen}>
            Details
          </Button>
          <OrderDetails order={order} open={open} setOpen={setOpen} />
        </>
        {/* <Button variant="contained" color="secondary">{order.status}</Button> */}
        <StatusButton
          id={order._id}
          handleUpdateStatus={handleUpdateStatus}
          updatedStatus={updatedStatus}
          setUpdatedStatus={setUpdatedStatus}
        />
      </CardActions>
    </Card>
  );
};

export default SingleOrderCard;
