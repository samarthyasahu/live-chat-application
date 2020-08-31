const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://SamarthyaSahu:abcd1234@live-chat.v9l7v.mongodb.net/test?retryWrites=true&w=majority', 
    {useNewUrlParser: true}).then(() => console.log('DB connected'))
                            .catch(err => console.log(err));

                            
app.get('/', (req,res) => {
    res.send('Hello World')
});

app.listen(5000);