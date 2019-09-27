import { Card } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import "./App.css";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Icon from "@material-ui/core/Icon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  card: {
    maxWidth: 400,
    height: 400,
    marginTop: 60,
    marginRight: 20,
    marginLeft: 20,
    border: "red 1px solid",
    backgroundColor: "#ffe6cc",
    color: "#12a19a"
  },
  media: {
    height: 200,
    width: 125,
    border: "black 1px solid",
    margin: 50
  },
  appBar: {
    backgroundColor: "#d1faf8"
  },
  appBarBottom: {
    top: "auto",
    bottom: 0,
    height: 50,
    backgroundColor: "#ffd9b3",
    textAlign: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  toolBar: {
    backgroundColor: "#ffbf80"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*<AppBar classname={classes.appBar} position="static">*/}
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" className={classes.title}>
          Materia-UI testcase
        </Typography>
        <Button>
          {" "}
          <Icon>add_circle</Icon>Check this
        </Button>
        <Button>
          <Icon color="secondary">add_circle</Icon>And this
        </Button>
        <Button>
          <Icon color="action">add_circle</Icon>This too
        </Button>
      </Toolbar>
      {/*</AppBar>*/}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Card className={classes.card}>
          {" "}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Otter of yesterday
            </Typography>
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              margin="normal"
            />
            <Divider />
            <br />
            <Typography>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Adorable, right?</FormLabel>
                <RadioGroup aria-label="yes" name="1">
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="no" />
                  <FormControlLabel
                    value="IDK"
                    control={<Radio />}
                    label="IDK"
                  />
                </RadioGroup>
              </FormControl>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          {" "}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Otter of the Day
            </Typography>
            <CardMedia
              className={classes.media}
              image="otter2.jpg"
              title="Paella dish"
            />

            <Typography variant="body2" component="p">
              <Checkbox>label="I'll get an otter"</Checkbox>
              <Checkbox>label="I'll get my coat"</Checkbox>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          {" "}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Otter of tomorrow
            </Typography>

            <Typography variant="body2" component="p">
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <Icon>star</Icon>
                  <ListItemText primary="Buy dog food" />
                </ListItem>
                <ListItem button>
                  <Icon>star</Icon>
                  <ListItemText primary="Get a dog" />
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <AppBar className={classes.appBarBottom}>
        <Typography color="textSecondary">
          <Icon>star</Icon>Copyright by Mari Leipola 2019
        </Typography>
      </AppBar>
    </div>
  );
}
