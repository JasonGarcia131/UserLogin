
const paginate = (model) => {
    return async (req, res, next) => {
        const id = req.query.id
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const theme = req.query.theme;

        const startIndex = (page - 1) + limit;
        const endIndex = page * limit;

        const results = {};

        console.log("count documents", await model.countDocuments({ author: id, theme: theme }).exec())
        const total = await model.countDocuments({ author: id, theme: theme }).exec();

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
            if (total < limit) {
                results.results = await model.find({ author: id, theme: theme }).select("-roles").limit(total).sort({ createdAt: -1 }).populate('author').exec();
                results.total = total
                res.paginatedResults = results
            }
            else {
                results.results = await model.find({ author: id, theme: theme }).select("-roles").limit(limit).skip(startIndex).sort({ createdAt: -1 }).populate('author').exec();
                results.total = total
                res.paginatedResults = results
            }

        } catch (e) {
            res.status(500).json({ message: e.message })
        }

        res.paginatedResults = results;
        next();
    }
}

module.exports = paginate