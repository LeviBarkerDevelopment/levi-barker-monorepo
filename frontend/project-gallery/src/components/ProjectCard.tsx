import { useState, useEffect } from "react";
import { Card, CardActions, Typography, CardContent, CardMedia, Button, Skeleton } from "@mui/material";
import { Link as LinkIcon } from "@mui/icons-material";


export function ProjectCard({ project }: any): JSX.Element {

    const handleLinkClick = (link: string) => {
        window.open(link, '_blank');
    }

    return (
        <Card>
            <div style={{
                height: "140px",
                width: "100%",
                backgroundColor: "#bbb",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${project?.imageUrl})`
            }}>

            </div>

            <CardContent>
                {project?.title ?
                    <>
                        <Typography variant="h6" component="h2">
                            {project.title}
                        </Typography>
                        <Typography variant="caption">
                            {project.description}
                        </Typography>
                    </> : <>
                        <Skeleton width="75%" height={16} variant="rectangular" sx={{
                            marginBottom: "8px"
                        }} />
                        <Skeleton width="100%" height={10} variant="rectangular" />
                    </>}
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <Button disabled={!project} startIcon={<LinkIcon />} onClick={() => handleLinkClick(project?.link)}>
                    Link
                </Button>
            </CardActions>
        </Card>
    );
}