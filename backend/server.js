// // const express = require('express');
// const express = require('express');
// const app = express();

// const mysql = require('mysql');
// const cors = require('cors');

// app.use(cors());
// app.use(express.json())

// const db = mysql.createConnection({
//     user:'root',
//     host:'localhost',
//     password:'mdp',
//     database:'ProjetIHM'
// });

// db.connect();

// db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });

// db.end();



// app.listen(3001, () => {
//     console.log("server OK ");
// });

const express = require('express');
const app = express();

const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mioramichelle25@gmail.com',
        pass: 'rjol gbuu zwhn oscl'
    }
});


const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'mdp',
    database:'ProjetIHM'
});

console.log('here')


app.post('/create', (req,res) => {
    // const name = req.body.name;
    // const email = req.body.email;
    // const tel = req.body.tel;
    // const idChambre = req.body.idChambre;
    // const idChambre2 = req.body.idChambre2;
    // const startDate = req.body.startDate;
    // const endDate = req.body.endDate;
    // const cout = req.body.prixTotal1;
    // const cout2 = req.body.prixTotal2;
    

    // console.log (name, email, tel +"LOL"+ tel, startDate,endDate, cout)

    // db.query('INSERT INTO client(nom, mail, tel) VALUES(?,?,?)',
    // [name, email, tel],
    // (err,result) => {
    //     if(err){
    //         console.log(err);
    //     }
        
    // })

    // db.query('SELECT idClient FROM client order by idclient desc limit 1',
    // (err,result) =>{
    //     if(err){
    //         console.log("herr"+err)
    //     }
    //     else{
    //         console.log(result)
    //         const lastID = result[0].idClient;
    //         db.query('Insert into reservation(idClient, idChambre, dateArr, dateDep, cout) values(?,?,?,?,?)',[lastID, idChambre, startDate, endDate, cout],
    //         (err,result) => {
    //             if(err){
    //                 console.log(err);
    //             }
    //         })
            
    //         if(idChambre2 != 0){
    //             db.query('Insert into reservation(idClient, idChambre, dateArr, dateDep, cout) values(?,?,?,?,?)',[lastID, idChambre2, startDate, endDate, cout2],
    //             (err,result) => {
    //                 if(err){
    //                     console.log(err);
    //                 }
    //                 else{
    //                     res.sendStatus(200)
    //                 }
    //             })
    //         }
    //     }       
    // });

     const name = req.body.name;
    const email = req.body.email;
    const tel = req.body.tel;
    const idChambre = req.body.idChambre;
    const idChambre2 = req.body.idChambre2;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const prixTotal1 = req.body.prixTotal1;
    const prixTotal2 = req.body.prixTotal2;
    
    console.log("DEBUT")

    console.log(name, email, tel, startDate, endDate, prixTotal1);

    db.query('INSERT INTO client(nom, mail, tel) VALUES(?,?,?)', [name, email, tel], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Erreur lors de la création du client.');
        }

        db.query('SELECT idClient FROM client ORDER BY idClient DESC LIMIT 1', (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erreur lors de la récupération de l\'ID du client.');
            }

            const lastID = result[0]?.idClient;

            if (!lastID) {
                return res.status(500).send('ID du client non trouvé.');
            }

            db.query('INSERT INTO reservation(idClient, idChambre, dateArr, dateDep, cout) VALUES(?,?,?,?,?)', [lastID, idChambre, startDate, endDate, prixTotal1], (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send('Erreur lors de la création de la première réservation.');
                }

                if (idChambre2 && idChambre2 !== 0) {
                    db.query('INSERT INTO reservation(idClient, idChambre, dateArr, dateDep, cout) VALUES(?,?,?,?,?)', [lastID, idChambre2, startDate, endDate, prixTotal2], (err, result) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send('Erreur lors de la création de la deuxième réservation.');
                        }

                        res.sendStatus(200);
                    });
                } else {
                    res.sendStatus(200);
                }
            });
        });
    });
});


let availableChambre = [];
let nbGuest;


app.post('/checkAvailable', (req,res) => {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    nbGuest = req.body.nbGuest;
    console.log (startDate, endDate, nbGuest)

    availableChambre = [];
   
    db.query("SELECT c.idChambre FROM chambre c WHERE c.idChambre NOT IN (SELECT r.idChambre FROM reservation r WHERE r.dateArr <= ?  AND r.dateDep >= ? ) and c.type=?",[endDate, startDate, nbGuest],
(err,result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            availableChambre = result.map(row => row.idChambre);
            

            console.log("available chambre ato am post ser"+availableChambre)
            res.status(200).send(availableChambre)
        }
    })

      

});
app.get('/getAvailable', (req, res) =>{
    // availableCHambre alefa any am search page 
    console.log('available c alefa any am search page'+availableChambre)
    res.status(200).send(availableChambre);
})

  
  app.post('/send-email', (req, res) => {
    const { email, message } = req.body;
  
    const mailOptions = {
    
      from: 'mioramichelle25@gmail.com',
      to: email,
      subject: "Mail de confirmation",
      text: message
    };
    console.log(mailOptions)

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
      } else {
        console.log('E-mail envoyé: ' + info.response);
        res.status(200).send('E-mail envoyé avec succès');
      }
    });
  });


// module.exports = router;

app.listen(3003, () => {
    console.log("server OK ");
});