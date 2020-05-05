import Reat from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h1">Projects</Typography>
      </Grid>
    </Grid>
  );
}
