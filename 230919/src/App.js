import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { lightGreen } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20
  },
  media: {
    height: 200,
    width: 125
  },
  appBar: {
    backgroundColor: "white"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar classname={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Materia-UI testcase
          </Typography>
          <Button>Check this</Button>
          <Button>And this</Button>
          <Button>This too</Button>
        </Toolbar>
      </AppBar>
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
            <CardMedia
              className={classes.media}
              image="otter1.jpg"
              title="Glowing beast of the wild"
            />

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
              image="C:\Reactit\230919\src\otter2.jpg"
              title="Paella dish"
            />

            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"an ottery smile"'}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          {" "}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Otter of tomorrow
            </Typography>
            <CardMedia
              className={classes.media}
              image="otter3.jpg"
              title="I'll sleep when I'm dead"
            />

            <Typography variant="body2" component="p">
              For the recless hair and the turtle
              <br />
              {'"procrastinate"'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
