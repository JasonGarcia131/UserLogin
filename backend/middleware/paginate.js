
const paginate = (model) => {
    return async (req, res, next) => {
        const id = req.query.id
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const theme = req.query.theme;

        console.log("theme", theme);
        console.log("page", page);
        console.log("limit", limit);


        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {};

        // console.log("count documents", await model.countDocuments({ author: id, theme: theme }).populate('author').exec())
        const total = await model.countDocuments({ author: id, theme: theme }).populate('author').exec();

        if (endIndex < total) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        try {
                results.results = await model.find({ author: id, theme: theme }).sort({createdAt: -1 }).limit(limit).skip(startIndex).populate('author').exec();
                results.total = total
                res.paginatedResults = results
                next();

        } catch (e) {
            res.status(500).json({ message: e.message })
        }

       
    }
}

module.exports = paginate