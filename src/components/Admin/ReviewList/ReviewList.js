import React, { useEffect, useState } from "react";
import "./ReviewList.css";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import Sidebar from "../Sidebar/Sidebar";
import TopBarDash from "../TopBarDash/TopBarDash";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ReviewList = () => {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  const [ids, setIds] = useState(null);

  // Fetch all service
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // Immediately delete form frontEnd
  useEffect(() => {
    setReviews(reviews.filter((item) => item._id !== ids));
  }, [ids]);

  const deleteReview = (id) => {
    // Fancy pop up
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        setIds(id);
        fetch(`http://localhost:5000/deleteReview/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
      }
    });
  };

  // slice the review description
  const truncate = (text, n) => {
    return text?.length > n ? text.substr(0, n - 1) + " ..." : text;
  };

  return (
    <div className="container bg-white pt-2">
      <TopBarDash />
      <section className="reviewList">
        <Sidebar />
        <div className="reviewListRight border rounded p-3 bg-light shadow">
          <h4 className="text-center pb-2">Review Lists</h4>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableHeadBold" align="left">
                    Sl.
                  </TableCell>
                  <TableCell className="tableHeadBold" align="left">
                    Name
                  </TableCell>
                  <TableCell className="tableHeadBold" align="left">
                    Email
                  </TableCell>
                  <TableCell className="tableHeadBold" align="left">
                    Address
                  </TableCell>
                  <TableCell className="tableHeadBold" align="left">
                    Description
                  </TableCell>
                  <TableCell className="tableHeadBold" align="left">
                    Date
                  </TableCell>
                  <TableCell className="tableHeadBold" align="left">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reviews.map((review, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{review.name}</TableCell>
                    <TableCell align="left">{review.email}</TableCell>
                    <TableCell align="left">{review.address}</TableCell>
                    <TableCell align="left">
                      {" "}
                      {truncate(review.description, 20)}{" "}
                    </TableCell>
                    <TableCell align="left">{review.date}</TableCell>
                    <TableCell align="left">
                      <DeleteOutlineIcon
                        onClick={() => deleteReview(review._id)}
                        className="deleteReviewIcon"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
};

export default ReviewList;
