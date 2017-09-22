let books = [];
let id = 0;

mode.exports = {
    create: (req, res) => {
        const { title, author } = req.body;
        books.push( { id, title, author } );
        id++;
        res.status(200).send( books );
    },

    read: ( req, res ) => {
        res.status(200).send( books)
    },

    update: (req, res ) => {
        const updateID = req.params.id;
        let index = books.findIndex( book => book.id == updateID );
    }
}
