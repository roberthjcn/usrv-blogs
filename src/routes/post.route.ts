import { Router } from 'express'

import { postController } from '../controllers'

export const router = Router()

router.get('/', postController.getAllPost)

router.post('/', postController.createPost)

router.get('/:id', postController.getPostById)

router.put('/:id', postController.updatePost)

router.delete('/:id', postController.deletePost)

router.get('/category/:category', postController.findPostByCategories)

router.get('/tag/:tag', postController.findPostByTags)


export default router