  import React, { useState } from "react";
  import Box from "@mui/material/Box";
  import Modal from "@mui/material/Modal";
  import Typography from "@mui/material/Typography";
  import Table from "@mui/material/Table";
  import TableBody from "@mui/material/TableBody";
  import TableCell from "@mui/material/TableCell";
  import TableContainer from "@mui/material/TableContainer";
  import TableHead from "@mui/material/TableHead";
  import TableRow from "@mui/material/TableRow";
  import Paper from "@mui/material/Paper";
  import Button from "@mui/material/Button";

  const CharacterModal = ({ selectedCharacter, onClose }) => {
    if (!selectedCharacter) return null;

    const [page, setPage] = useState(1);
    const episodesPerPage = 5;

    // CALCULO DE PAGINAS
    const totalEpisodes = selectedCharacter.episode.length;
    const totalPages = Math.ceil(totalEpisodes / episodesPerPage);
    const indexOfLastEpisode = page * episodesPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
    const currentEpisodes = selectedCharacter.episode.slice(indexOfFirstEpisode, indexOfLastEpisode);

    // NAVEGACIÓN PAGINAS
    
    const handleNextPage = () => setPage((prevPage) => prevPage + 1);
    const handlePrevPage = () => setPage((prevPage) => prevPage - 1);

    return (
      <Modal
        open={!!selectedCharacter}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ p: 3, maxWidth: 500, margin: "auto", backgroundColor: "gray", borderRadius: "8px" }}>
          <Typography variant="h6" id="modal-modal-title" gutterBottom>
            {selectedCharacter.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Estado: {selectedCharacter.status}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Género: {selectedCharacter.gender}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Especie: {selectedCharacter.species}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Origin: {selectedCharacter.origin?.name || "Unknown"} 
          </Typography>
          <Box mt={2}>
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <Typography variant="body1" gutterBottom mt={2}>
              Episodes:
            </Typography>
            <TableContainer component={Paper} sx={{minHeight: "2rem"}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Episode</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentEpisodes.map((episode, index) => {
                    const episodeId = episode.split("/")[5]; 
                    return (
                      <TableRow key={index}>
                        <TableCell>{`Episode ${episodeId}`}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Paginación */}
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button disabled={page === 1} onClick={handlePrevPage} color="white">
                Anterior
              </Button>
              <Typography variant="body2" align="center">
                Page {page} of {totalPages}
              </Typography>
              <Button disabled={page >= totalPages} onClick={handleNextPage} color="white">
                Siguiente
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    );
  };

  export default CharacterModal;
