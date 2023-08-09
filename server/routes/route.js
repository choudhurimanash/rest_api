import express from 'express';
import { addUser, getUser, editUser, updateUser, deleteUser} from '../controller/user_controller.js';



const router = express.Router();

router.post('/add', addUser);
router.get('/all', getUser );
router.get('/:id', editUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;