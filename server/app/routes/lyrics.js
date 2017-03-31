const express = require('express');
const getLyrics = require('lyric-get').get;
const router = new express.Router();
module.exports = router;

router.get('/:artist/:song', (req, res, next) => {
    // console.log("sending lyric req")
    getLyrics(req.params.artist, req.params.song, (err, r) => {
        // console.log("errr", err)
        if (err) return next(err);
        else {
            // console.log('ajshgaksg', r)
            res.send({ lyric: r });
        }
        
    });
});
