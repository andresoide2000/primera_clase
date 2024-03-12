import express from "express"; // import express
let cards = []

const app = express(); // create an express app
app.use(express.json()); // use the express.json middleware
app.listen(3000, () => { // start a server on port 3000
  console.log("Port: 3000");
}
)

app.get('/api/cards', (req, res) => {// create a route for GET requests to /api/cards
      if (cards.length === 0) { // si no hay cartas le avisa al usuario
        res.status(200).json({ message: "Empty" });
      } else {
        res.status(200).json(cards); // send a response to the client
      }
    }
)

app.get('api/cards/id', (req, res) => {// create a route for GET requests to /api/cards/id
    let id = req.params.id;
    let card = cards.find(card => card.id === id);

    if (card === undefined) {
        res.status(404).json({ message: "Card not found" });
    } else {
        res.status(200).json(card);
    }
}
)

app.post('/api/cards', (req, res) => {// create a route for POST requests to /api/hello
  let id = req.body.id;
  let nombre = req.body.nombre;
  let daño = req.body.daño;
  let vida = req.body.vida;

  if(id === undefined || nombre === undefined || daño === undefined || vida === undefined){
    res.status(400).json({message: "404 missing data"});
    return;
  }

  if(cards.some(card => card.id === id)){
    res.status(400).json({message: "ID already exists"});
    return;
  }

  const newCard  = {
    id,
    nombre,
    daño,
    vida,
  };



  cards.push(newCard); // Agregar la nueva carta al array de cartas

  res.status(201).json({message: "Card added succesfully"}); // Código de estado 201 - Created
    }
)

app.delete('/api/cards/:id', (req, res) => {// create a route for DELETE requests to /api/cards/:id
    let id = req.params.id;
    let card = cards.find(card => card.id === id);

    if (card === undefined) {
        res.status(404).json({ message: "Card not found" });
    } else {
        cards = cards.filter(card => card.id !== id);
        res.status(200).json({ message: "Card deleted" });
    }
    }
)

app.put('/api/cards/:id', (req, res) => {// create a route for PUT requests to /api/cards/:id
    let id = req.params.id;
    let card = cards.find(card => card.id === id);

    if (card === undefined) {
        res.status(404).json({ message: "No such card found in database" });
    } else {
        let nombre = req.body.nombre;
        let daño = req.body.daño;
        let vida = req.body.vida;

        if (nombre === undefined || daño === undefined || vida === undefined) {
            res.status(400).json({ message: "404 missing data" });
            return;
        }

        card.nombre = nombre;
        card.daño = daño;
        card.vida = vida;

        res.status(200).json({ message: "Card updated" });
    }
    }
)