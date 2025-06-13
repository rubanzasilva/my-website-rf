'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ProjectsProps {
  title: string;
  // Main project
  alt: string;
  img: string;
  cardContentTitle: string;
  cardContentBody: string;
  cardActionsText: string;
  cardActionsTextX: string;
  // Project A
  altA: string;
  imgA: string;
  cardContentTitleA: string;
  cardContentBodyA: string;
  cardActionsTextA: string;
  // Project B
  altB: string;
  imgB: string;
  cardContentTitleB: string;
  cardContentBodyB: string;
  cardActionsTextB: string;
  // Project C
  altC: string;
  imgC: string;
  cardContentTitleC: string;
  cardContentBodyC: string;
  cardActionsTextC: string;
  cardActionsTextD: string;
  // Project E
  altE: string;
  imgE: string;
  cardContentTitleE: string;
  cardContentBodyE: string;
  cardActionsTextE: string;
  cardActionsTextEA: string;
  // Project F
  altF: string;
  imgF: string;
  cardContentTitleF: string;
  cardContentBodyF: string;
  cardActionsTextF: string;
  // Project X
  altX: string;
  imgX: string;
  cardContentTitleX: string;
  cardContentBodyX: string;
  cardActionsTextXA: string;
  cardActionsTextXB: string;
  // Project Y
  altY: string;
  imgY: string;
  cardContentTitleY: string;
  cardContentBodyY: string;
  cardActionsTextY: string;
  // Project Z
  altZ: string;
  imgZ: string;
  cardContentTitleZ: string;
  cardContentBodyZ: string;
  cardActionsTextZ: string;
}

export default function Projects(props: ProjectsProps) {
  const {
    title,
    // Destructure all the props...
    alt, img, cardContentTitle, cardContentBody, cardActionsText, cardActionsTextX,
    altA, imgA, cardContentTitleA, cardContentBodyA, cardActionsTextA,
    altB, imgB, cardContentTitleB, cardContentBodyB, cardActionsTextB,
    altC, imgC, cardContentTitleC, cardContentBodyC, cardActionsTextC, cardActionsTextD,
    altE, imgE, cardContentTitleE, cardContentBodyE, cardActionsTextE, cardActionsTextEA,
    altF, imgF, cardContentTitleF, cardContentBodyF, cardActionsTextF,
    altX, imgX, cardContentTitleX, cardContentBodyX, cardActionsTextXA, cardActionsTextXB,
    altY, imgY, cardContentTitleY, cardContentBodyY, cardActionsTextY,
    altZ, imgZ, cardContentTitleZ, cardContentBodyZ, cardActionsTextZ,
  } = props;

  return (
    <div className="bg-white mx-14 p-4">
      <Typography variant="h4" gutterBottom className="text-center mt-[7%] mb-[4%]">
        {title}
      </Typography>

      <ul className="grid grid-cols-1 lg:grid-cols-3 bg-white list-none gap-4 p-1.5">
        {/* Project F */}
        <li className="bg-white text-center mx-auto p-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={altF} height="200" image={imgF} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContentTitleF}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardContentBodyF}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://nbsanity.com/static/64b506b80020adafd31defb4d6afb508/load.html" size="small">
                {cardActionsTextF}
              </Button>
            </CardActions>
          </Card>
        </li>

        {/* Project E */}
        <li className="bg-white text-center mx-auto p-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={altE} height="200" image={imgE} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContentTitleE}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardContentBodyE}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.kaggle.com/code/rubanzasilva/fastai-gradient-boosting" size="small">
                {cardActionsTextE}
              </Button>
              <Button href="https://www.kaggle.com/competitions/playground-series-s4e6/discussion/517020" size="small">
                {cardActionsTextEA}
              </Button>
            </CardActions>
          </Card>
        </li>

        {/* Project X */}
        <li className="bg-white text-center mx-auto p-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={altX} height="200" image={imgX} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContentTitleX}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardContentBodyX}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.kaggle.com/code/rubanzasilva/used-cars-eda-fastai-gradient-boosting" size="small">
                {cardActionsTextXA}
              </Button>
              <Button href="https://www.kaggle.com/competitions/playground-series-s4e9/discussion/544513" size="small">
                {cardActionsTextXB}
              </Button>
            </CardActions>
          </Card>
        </li>

        {/* Project Y */}
        <li className="bg-white text-center mx-auto p-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={altY} height="200" image={imgY} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContentTitleY}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardContentBodyY}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.kaggle.com/code/rubanzasilva/fast-ai-gradient-boosting" size="small">
                {cardActionsTextY}
              </Button>
            </CardActions>
          </Card>
        </li>

        {/* Project Z */}
        <li className="bg-white text-center mx-auto p-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={altZ} height="200" image={imgZ} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContentTitleZ}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardContentBodyZ}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.kaggle.com/code/rubanzasilva/fastai-neural-network-gradient-boosting" size="small">
                {cardActionsTextZ}
              </Button>
            </CardActions>
          </Card>
        </li>

        {/* Main Project */}
        <li className="bg-white text-center mx-auto p-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={alt} height="200" image={img} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContentTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardContentBody}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://rubanzasilva.github.io/antelope-classifier-documentation/" target="_blank" size="small">
                {cardActionsText}
              </Button>
              <Button href="https://huggingface.co/spaces/silvaKenpachi/antelopeClassifier?logs=build" target="_blank" size="small">
                {cardActionsTextX}
              </Button>
            </CardActions>
          </Card>
        </li>

        {/* Project B */}
        <li className="bg-white text-center mx-auto p-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={altB} height="200" image={imgB} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContentTitleB}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardContentBodyB}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.zicofe.com/" size="small">
                {cardActionsTextB}
              </Button>
            </CardActions>
          </Card>
        </li>

        {/* Project C */}
        <li className="bg-white text-center mx-auto p-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={altC} height="200" image={imgC} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContentTitleC}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardContentBodyC}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.suwik.xyz/" target="_blank" size="small">
                {cardActionsTextC}
              </Button>
              <Button href="https://github.com/rubanzasilva/suwikEcommerce" target="_blank" size="small">
                {cardActionsTextD}
              </Button>
            </CardActions>
          </Card>
        </li>

        {/* Project A */}
        <li className="bg-white text-center mx-auto p-3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={altA} height="200" image={imgA} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContentTitleA}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardContentBodyA}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://github.com/rubanzasilva/my-website" size="small">
                {cardActionsTextA}
              </Button>
            </CardActions>
          </Card>
        </li>
      </ul>
    </div>
  );
}