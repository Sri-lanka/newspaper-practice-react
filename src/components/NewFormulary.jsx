import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { NewService } from '../service/newService';
import { CategoryService } from '../service/categoryService';

const newService = new NewService();
const categoryService = new CategoryService();

export default function NewFormulary() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({ id: null });
    const [error, setError] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        categoryService.getAll().then((response) => setCategories(response.data));
        if (id) {
            newService.getNewById(id).then((response) => {
                setTitle(response.data.title);
                setContent(response.data.content);
                setCategory({ id: response.data.category.id });
            }).catch(err => {
                setError("Failed to load article data.");
                console.error('Error fetching article:', err);
            });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const now = new Date().toISOString();
        const userData = localStorage.getItem('user');
        const user = JSON.parse(userData);
        console.log(user);
        const newu = {
            title,
            content,
            publicationDate: now,
            user: { id: user.id },
            category: { id: category.id },
        };


        try {
            if (id) {
                const response = await newService.updateNew(id, newu)
                console.log('artlicle updated', response.data)
            } else {
                const response = await newService.createNew(newu)
                console.log('Article created successfully:', response.data);
               
            }
            navigate('/')
        } catch (err) {
            setError("Failed to create article. Please check your information.");
            console.error('Error creating article:', err);
        }
    };

    return (

        <div>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5" component="h1" gutterBottom>
                        {id ? 'Edit Article' : 'Create a New Article'}
                    </Typography>
                    {error && <Typography color='error'>{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            multiline
                            rows={4}
                        />
                        <FormControl fullWidth variant="outlined" margin="normal">
                            <InputLabel id="category-select-label">Select Category</InputLabel>
                            <Select
                                labelId="category-select-label"
                                name="categories"
                                value={category.id || ""}
                                onChange={(e) => setCategory({ ...categories, id: e.target.value })}
                                label="Select Category"
                            >
                                <MenuItem value="">
                                    <em>Select Category</em>
                                </MenuItem>
                                {categories.map((category) => (
                                    <MenuItem key={category.id} value={category.id}>
                                        {category.nameCategory}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '16px' }}
                        >
                            { id ? 'update' : 'Create'}
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>

    );
};
