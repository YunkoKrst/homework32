import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

// Ваша URI MongoDB
const mongoURI = "mongodb+srv://myUser:myPassword@cluster0.wdeui.mongodb.net/myDatabase?retryWrites=true&w=majority";

// Налаштування для підключення до MongoDB
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(mongoURI, mongooseOptions)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

// Модель користувача
interface IUser {
    name: string;
    email: string;
}

const userSchema = new mongoose.Schema<IUser>({
    name: String,
    email: String,
});

const User = mongoose.model<IUser & mongoose.Document>('User', userSchema);

// Маршрут для отримання першого документу
app.get('/', async (req: Request, res: Response) => {
    try {
        const data = await User.findOne();
        res.json(data);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Маршрут для отримання всіх користувачів
app.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await User.find({}, 'id name email');
        res.json(users);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Маршрут для отримання користувача за id
app.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
