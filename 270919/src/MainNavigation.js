import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  listitem: {
    display: "inline-block",
    width: 150,
    textAlign: "right"
  }
});

const listitems = [
  {
    text: "home",
    id: 1
  },
  {
    text: "first",
    id: 2
  },
  {
    text: "second",
    id: 3
  },
  {
    text: "third",
    id: 4
  }
];

const MainNavigation = () => {
  const classes = useStyles();
  return (
    <div>
      <List component="nav">
        {listitems.map(item => (
          <ListItem className={classes.listitem} key={item.id}>
            <ListItemText>
              <Typography>{item.text}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MainNavigation;
