import React, { useContext, useState } from 'react';
import { CharacterContext } from './CharacterContext';
import CharacterModal from './CharacterModal';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function CharacterCardlist() {
  const { characters } = useContext(CharacterContext);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const handleClose = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <Grid container spacing={4}>
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={character.image}
                alt={character.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {character.name}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleSelectCharacter(character)}
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Renderiza el modal solo si hay un personaje seleccionado */}
      {selectedCharacter && (
        <CharacterModal
          selectedCharacter={selectedCharacter}
          open={selectedCharacter !== null}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default CharacterCardlist;
