
const paginate =  (model) => {
    return async (req, res, next) => {
        const id = req.query.id
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const startIndex = (page - 1) + limit;
        const endIndex = page * limit;

        const results = {};

        console.log("count documents", await model.countDocuments().exec())

        if(endIndex < await model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if(startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        try{
            results.results = await model.find({author: id}).limit(limit).skip(startIndex).sort({createdAt: -1}).populate('author').exec();
            res.paginatedResults = results
        }catch(e){
            res.status(500).json({message: e.message})
        }

        res.paginatedResults = results;
        next();
    }
}

module.exports = paginate