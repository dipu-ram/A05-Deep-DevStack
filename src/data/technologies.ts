export type Tech = {
     name: string;
     category: string;
     difficulty: string;
     rating: number;
     
     
     
};

export const technologies: Tech[] =[
     {name: "React", category: "Frontend", difficulty: "Beginner-Friendly", rating: 4.9},
     {name: "Vue.js", category: "Frontend", difficulty: "Beginner-Friendly", rating: 4.8},
     {name: "Svelte", category: "Frontend", difficulty: "Intermediate", rating: 4.8},
     {name: "Next.js", category: "Frontend", difficulty: "Intermediate", rating: 4.9},
     {name: "Node.js", category: "Backend", difficulty: "Intermediate", rating: 4.8},
     {name: "PostgreSQL", category: "Database", difficulty: "Intermediate", rating: 4.9},
     {name: "Redis", category: "Database", difficulty: "Intermediate", rating: 4.8},
     {name: "JavaScript", category: "Language", difficulty: "Beginner-Friendly", rating: 4.9},
     {name: "TypeScript", category: "Language", difficulty: "Intermediate", rating: 4.9},
     {name: "Java", category: "Language", difficulty: "Intermediate", rating: 4.6},
     {name: "Tailwind CSS", category: "Styling", difficulty: "Beginner-Friendly", rating: 4.9},
     {name: "Docker", category: "DevOps", difficulty: "Intermediate", rating: 4.9},

];