import { Grid, Card, CardActions, Grow, CardContent, CardMedia, Button} from "@mui/material";
import { ProjectCard } from "./ProjectCard";

export function Gallery(): JSX.Element {

    const projects: any[]  = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7}
    ];

    return (
        <Grid container spacing={2}>
            {projects && projects.map((project, index) => (
                <Grow
                key="project.id"
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 400 *  index} : {})}
              >
                <Grid item 
                    xs={12} sm={6} md={4} lg={3} xl={2}>
                    <ProjectCard />
                </Grid>
              </Grow>
            ))}
        </Grid>
    );
}