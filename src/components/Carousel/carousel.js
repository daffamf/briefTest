
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://assets.tokodistributor.com/tokdis-banner/Untitled-3.jpg',
    },
    {
        label: 'Bird',
        imgPath:
            'https://assets.tokodistributor.com/tokdis-banner/90642abb1a5a5508325622f5d4c607e3ac5b913509.jpg',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://assets.tokodistributor.com/tokdis-banner/818972ee2d8036baf77c98f86e16af931813382129.jpg',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://assets.tokodistributor.com/tokdis-banner/91207931b6212b468ae3a95e07519d88fd0ce92600.jpg',
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div>

            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
             
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 400,
                                    display: 'block',
                                    maxWidth: 1295,
                                    overflow: 'hidden',
                                    width: '500%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

        </div>
    );
}

export default SwipeableTextMobileStepper;