const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');


const SECRET = process.env.JWT_KEY || 'its a secret SHHHHHH!';

function checkAuth(req, res, next) {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, SECRET, function(err, decoded) {
      if (err) {
        res.setHeader("Content-Type", "text/plain");
        res.status(401);
        res.send('Unauthorized');
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.status(401);
    res.send('Unauthorized');
  }
}

function notFound(res) {
  res.setHeader("Content-Type", "text/plain");
  res.status(404);
  res.send('Not Found');
}

router.post('/plans', checkAuth, (req, res, next) => {
  knex('plans')
    .where({
      user_id: req.user.userId,
    })
    .then(() => {
      res.status(200);
      res.render('plans');
    })
    console.log('hi del. u r doing something')

})

// router.delete('/plans/:id', checkAuth, (req, res, next) => {
//
//   let id = req.params.id;
//
//   knex('notes')
//     .where('id', id)
//     .del()
//     .then(() => {
//       res.status(200);
//       res.send('');
//     });
// });
//
router.get('/plans/:id/edit', checkAuth, (req, res, next) => {
  let planId = req.params.id;

  knex('plans')
    .where('id', planId)
    .then((plan) => {
      res.render('planEdit', {
        plan: plan[0]
      });
    })
})

// router.patch('/notes/:id', checkAuth, (req, res, next) => {
//
//   let id = req.params.id;
//
//   knex('notes')
//     .where('id', id)
//     .then((notes) => {
//       if (notes.length === 0) {
//         notFound(res);
//       } else {
//         knex('notes')
//           .returning(['id', 'body', 'record_id'])
//           .where('id', id)
//           .update({
//             body: req.body.body
//           })
//         .then((updatedNote) => {
//           res.status(200);
//           res.send(humps.camelizeKeys(updatedNote[0]));
//         })
//       }
//     })
// })

module.exports = router;
