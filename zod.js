import {z} from  'zod'

const todoSchema = z.object({
    username: z.string(),
    password: z.string().min(6),
})



module.exports = {
    todoSchema
}