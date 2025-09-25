"use client";

import {
  Container,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Button,
  Snackbar,
} from "@mui/material";
import Image from "next/image";
import IconButton from '@mui/material/IconButton';
import { useRef, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import { getRandomMessage } from "./service";

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  //resources
  const imageUrl = "/image.webp";
  const musicUrl = "/yellow-flowers.mp3";

  const loadingMessage = "Pequeño Recordatorio";
  const [finalMessage] = useState(getRandomMessage());

  const [message, setMessage] = useState<string>("Mau tiene un mensaje para ti 💌");
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleToggleMusic = (value?: boolean) => {
    setPlaying(value === true ? value : !playing);

    if (audioRef.current) {
      if (!playing || value === true) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleOnClick = () => {
    setMessage('Cargando...');
    handleToggleMusic(true);
    setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setMessage('Enviado!')
          setToastOpen(true);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
  };

  const handleShowToast = () => {
    setToastOpen(true);
    setShowConfetti(true);

    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>

      <div style={{ justifySelf: "center", textAlign: "center" }}>
        <IconButton onClick={()=>handleToggleMusic()}>
          {playing ?
            <MusicNoteIcon sx={{ color: "white", fontSize: 30 }} /> :
            <MusicOffIcon sx={{ color: "white", fontSize: 30 }} />
          }
        </IconButton>
      </div>


      <Card sx={{ backgroundColor: "#1f3a89" }} elevation={0}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom color="white">
            {progress === 0 ? "Hey Pame" : loadingMessage}
          </Typography>

          {progress === 100 && (
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              color="#b8c9e8"
            >
              {finalMessage}
            </Typography>
          )}

          <div style={{ justifySelf: "center", textAlign: "center" }}>
            {progress !== 100 ? (
              <EmailIcon sx={{ color: "white", fontSize: 50 }} />
            ) : (
              <Image
                src={imageUrl}
                alt="Imagen personalizada"
                width={200}
                height={200}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                priority
              />
            )}
          </div>

          <Typography variant="h5" align="center" gutterBottom color="white">
            {message}
          </Typography>

          {progress !== 0 && progress !== 100 && (
            <LinearProgress
              variant="determinate"
              value={progress}
              color="info"
              sx={{ mb: 2 }}
            />
          )}

          {progress === 0 && (
            <Button
              variant="contained"
              fullWidth
              sx={{ color: "white", mb: 2 }}
              onClick={handleOnClick}
            >
              Ver
            </Button>
          )}
        </CardContent>
      </Card>

      <audio ref={audioRef} src={musicUrl} />

      <Snackbar
        open={toastOpen}
        autoHideDuration={100}
        onClose={() => {
          setToastOpen(false)
          handleShowToast()
        }}
        message="¡Recibiste un abrazo!"
      />
      {showConfetti && <Confetti width={width} height={height} />}
    </Container>
  );
}
