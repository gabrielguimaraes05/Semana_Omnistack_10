const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gabrielguimaraes:Ovelha@4513@semanaomnistack10-v90lu.mongodb.net/SemanaOmnistack10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.listen(process.env.PORT || 3535);