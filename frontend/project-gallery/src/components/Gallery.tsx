import { Grid, Card, CardActions, Grow, CardContent, CardMedia, Button} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProjects } from "../redux/projectSlice";
import { RootState } from "../redux/store";
import { ProjectCard } from "./ProjectCard";

export function Gallery(): JSX.Element {

    const projects = useSelector((state: RootState) => state.project.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProjects())
    }, []);

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
                    xs={12} sm={6} md={4}>
                    <ProjectCard project={project}/>
                </Grid>
              </Grow>
            ))}
        </Grid>
    );
}