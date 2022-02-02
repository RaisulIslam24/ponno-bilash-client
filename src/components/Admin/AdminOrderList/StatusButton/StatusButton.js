import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { userContext } from "../../../../App";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const StatusButton = ({
  updatedStatus,
  setUpdatedStatus,
  handleUpdateStatus,
  id,
}) => {
  const classes = useStyles();
  const [loggedInUser] = useContext(userContext);

  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setUpdatedStatus(event.target.value);
    handleUpdateStatus(id, event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={updatedStatus}
          onChange={handleChange}
        >
          {loggedInUser.role === "admin" && (
            <MenuItem value="pending">Pending</MenuItem>
          )}

          <MenuItem value="ongoing">Ongoing</MenuItem>
          <MenuItem value="done">Done</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default StatusButton;
