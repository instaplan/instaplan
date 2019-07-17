module.exports = {
    create: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const {photo, title, date, category, description} = req.body;
  
      dbInstance.create_events([photo, title, date, category, description])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    getOne: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
  
      dbInstance.read_event(id)
        .then(event => res.status(200).send(event))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    getAll: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_events()
        .then(event => res.status(200).send(event))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    update: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const {photo, title, date, category, description} = req.body;
      const { params} = req;
  
      dbInstance.update_event([params.id, photo, title, date, category, description])
        .then((response) => res.status(200).json(response))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    delete: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const {id} = req.params;
  
      dbInstance.delete_event(id)
        .then((results) => res.json(results))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    }
  };