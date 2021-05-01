import React from 'react';
import CambodiaPhoto from '../images/網站照片/首頁/合作的學校/Muk_Neak_3.jpg';
import TaiwanPhoto from '../images/網站照片/首頁/合作的學校/San-ho_3.jpg';
import OtherPhoto from '../images/網站照片/首頁/Cover_photos/cover_photo_8.jpg';
import Grid from '@material-ui/core/Grid'

function Cards() {
    return (
        <>
        </>
    )
}

export default Cards;




/*
const useStyles = makeStyles({
    root:{
        maxWidth: 500,
    },
    media: {
      height: 600,
    },
  });
function Cards() {
    const classes = useStyles();
    return (
        <>
        <h1>合作學校</h1>
         <Grid container mx={2}>
            <Grid md={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia image={CambodiaPhoto} title="Cambodia" className={classes.media}>
                        </CardMedia>
                    </CardActionArea>
                    <CardActions display="flex" flexDirection="column">
                        <Button size="medium" color="primary">
                        Muk Neak Primary School
                        </Button>
                        <Button size="small" color="primary" href="https://goo.gl/maps/ftvCyNQN313R2WzD9">
                            暹粒 柬埔寨
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid md={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia image={TaiwanPhoto} title="Cambodia" className={classes.media}>
                        </CardMedia>
                    </CardActionArea>
                    <CardActions display="flex" flexDirection="column">
                        <Button size="medium" color="primary">
                            桃園市三和國小
                        </Button>
                        <Button size="small" color="primary" href="https://goo.gl/maps/okzpbGryyDZe2fZZ9">
                            桃園 台灣
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid md={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia image={OtherPhoto} title="Other" className={classes.media}>
                        </CardMedia>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            其他合作學校
                        </Button>
                        <Button size="small" color="primary">
                            位置地點
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        </>
    )
}

export default Cards;
*/