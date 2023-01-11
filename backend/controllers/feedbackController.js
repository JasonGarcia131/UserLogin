const Feedback = require("../model/Feedback");

const createFeedback = async (req, res) => {

    const feedback = req.body;

    console.log("Feedback", feedback);
    
    if(feedback.length === 0) res.status(400).json({ 'message': 'Feedback is required.' });
    
    try {
        const results = await Feedback.create({
            "content": feedback.content
        });
        console.log("results", results);
        res.status(201).json({ 'success': `New feedback created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }

}

module.exports = { createFeedback };