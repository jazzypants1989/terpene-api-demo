const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const PORT = 8000
app.use(cors())

const cs = 'coming soon'

const terpenes = {
    'limonene': {
        'terpName': 'Limonene',
        'scent': 'Citrusy',
        'nature': 'Citrus Fruit',
        'benefits': ['stress relief', 'mood stabilizer', 'anxiety', 'depression'],
        'effects': ['uplifting', 'euphoric'],
        'strains': ['skunk xl', 'white widow', 'special kush'],
        'research': cs,
        'image': 'https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg'
    },
    'myrcene': {
        'scent': ['earthy', 'musky', 'clove', 'grape'],
        'possible benefits': ['inflammation', 'chronic pain', 'pain relief'],
        'possible effects': ['sleepy', 'sedative'],
        'strains': ['o.g. kush', 'sour diesel', 'super lemon haze', 'durban poison', 'jack herer', 'jack the ripper'],
        'research': cs,
    },
    'linalool': {
        'scent': cs,
        'possible benefits': cs,
        'possible effects': cs,
        'strains': cs,
        'research': cs, 
    },
    'geraniol': {
        'scent': cs,
        'possible benefits': cs,
        'possible effects': cs,
        'strains': cs,
        'research': cs,
    },
    'unknown': {
        'scent': 'unknown',
        'possible benefits': 'unknown',
        'possible effects': 'unknown',
        'strains': 'unknown',
        'research': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:terpeneName', (request, response) => {
    const terpName = request.params.terpeneName.toLowerCase()
    if(terpenes[terpName]){
        response.json(terpenes[terpName])
    } else {
        response.json(terpenes['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('The world is being informed about terpenes, and all are wiser for your efforts.')
})