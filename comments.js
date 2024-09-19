// Create web server for comment
//==============================

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController'); // Supondo que você tenha um controlador de comentários

// Handle requests
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete_get);
router.post('/:id/delete', commentController.comment_delete_post);
router.get('/:id/update', commentController.comment_update_get);
router.post('/:id/update', commentController.comment_update_post);
router.get('/:id', commentController.comment_detail);

// Initialize the Express app
const app = express();

// Use the router for comment-related routes
app.use('/comments', router);

// Set the server to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});