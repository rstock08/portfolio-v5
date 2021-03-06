import React from "react";
import Fab from '@material-ui/core/Fab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from "@material-ui/core";

interface IProps {
    openResumeModal: boolean;
    setOpenResumeModal(value: boolean): void;
}

export function ActionButtons(props: IProps) {

    const handleOnClick = () => {
        props.setOpenResumeModal(!props.openResumeModal)
    }

    return (
        <div>
            <div style={{ paddingRight: "1rem", paddingTop: "1rem" }}>
                <Fab style={{ float: "right" }} size="small" color="secondary">
                    <IconButton onClick={() => handleOnClick()} color="inherit">
                        <DescriptionIcon />
                    </IconButton>
                </Fab>
            </div>
            <div style={{ paddingRight: "4rem" }}>

                <Fab style={{ float: "right" }} size="small" color="secondary">
                    <IconButton onClick={() => window.open("https://github.com/rstock08")} color="inherit">
                        <GitHubIcon />
                    </IconButton>
                </Fab>
            </div>
            <div style={{ paddingRight: "7rem" }}>
                <Fab style={{ float: "right" }} size="small" color="secondary" >
                    <IconButton onClick={() => window.open("https://www.linkedin.com/in/reed-stock/")} color="inherit">
                        <LinkedInIcon />
                    </IconButton>
                </Fab>
            </div>
        </div>
    );
}

