import { Router } from 'express';

const router = Router();

router.get('/pokemon/random', async (req, res) => {
    const idPokemon = Math.floor(Math.random() * 898) + 1;

    res.json({
        nome: `pokemon-${idPokemon}`,
        imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`
    });
});

export default router;