import { Card, CardActions, Typography, CardContent, CardMedia, Button } from "@mui/material";
import { Link as LinkIcon } from "@mui/icons-material";


export function ProjectCard(): JSX.Element {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                src="https://www.gstatic.com/devrel-devsite/prod/vd66275adb6a18222c17fbda979bde6b3bf2a675531cc7e54b05dbb69d107b056/cloud/images/cloud-logo.svg" />
            <CardContent>
                <Typography variant="caption">
                    Some description of the projects
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <Button startIcon={<LinkIcon />}>
                    Link
                </Button>
            </CardActions>
        </Card>
    );
}