import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
const DeleteTaskList = ({ show, handleClose, deleteTask, TaskId }) => {
    const handleDelete = async () => {
        try {
            // Appeler la fonction pour supprimer le contact
            await deleteTask(TaskId); // Pass the contactId to the deleteTask function
            toast.success('Contact supprimé avec succès.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            handleClose();
        } catch (error) {
            toast.error('Erreur lors de la suppression du contact.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Supprimer la tache </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Êtes-vous sûr de vouloir supprimer cette tache?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Annuler
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Supprimer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default DeleteTaskList;