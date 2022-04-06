interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}



export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Pariatur voluptate cillum enim eu est excepteur exercitation velit ut irure officia officia et et.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En-progreso: Qui occaecat ipsum sit veniam adipisicing non eiusmod.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Terminadas: Adipisicing reprehenderit culpa nulla aute aliqua do tempor est amet et ea anim non sit.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ]
}