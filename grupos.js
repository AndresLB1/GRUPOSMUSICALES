

db.col01.find({"genero":"rock"})
db.col01.find({"genero": {$eq: "rock"}})


db.col01.insertMany([
    {
        nombre: "Green day",
        numeroIntegrantes: 3,
        genero: "punck rock",
        numeroAlbumes: 17,
        añoCreacion: 1988,
        activo: "si"
    }
    ,

    {
        nombre: "AC/DC",
        numeroIntegrantes: 5,
        genero: "rock",
        numeroAlbumes: 19,
        añoCreacion: 1973,
        activo: "si"

    }
    ,

    {
        nombre: "Guns n' Roses",
        numeroIntegrantes: 7,
        genero: "rock",
        numeroAlbumes: 7,
        añoCreacion: 1985,
        activo: "si"
    }
    ,

    {
        nombre: "Imagine Dragons",
        numeroIntegrantes: 4,
        genero: "pop rock",
        numeroAlbumes: 4,
        añoCreacion: 2008,
        activo: "no"
    }
    ,

    {
        nombre: "Nirvana",
        numeroIntegrantes: 3,
        genero: "rock",
        numeroAlbumes: 3,
        añoCreacion: 1987,
        activo: "no",
    }
    ,

    {
        nombre: "Luisaker",
        numeroIntegrantes: 2,
        genero: "rap",
        numeroAlbumes: 0,
        añoCreacion: 2013,
        activo: "si"
    }
    

])



