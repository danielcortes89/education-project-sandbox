require('../src/db/mongoose')
const Pic = require('../src/models/picModel')
const {setupDatabase, doc001Id, doc001 } = require('./fixtures/db')

//
// These test cases are mainly here to demonstrate
// various ways to fetch DB docs (from the test db)
// using the mongoose model API
//

beforeEach(setupDatabase)

// Fetch doc001 by ID
test('Should fetch doc001 by ID', async () => {
    const pics = await Pic.find()
        .where('_id').equals(doc001Id);
    expect(pics).not.toBeNull()
    expect(pics.length).toBe(1)
})

// Fetch all (4) docs, sorted by 'sequence' property
test('Should fetch 4 docs sorted by sequence', async () => {
    const pics = await Pic.find()
        .sort('sequence')
    expect(pics).not.toBeNull()
    expect(pics.length).toBe(4)
    for (let i=0; i<4; i++) {
        expect(pics[i].sequence).toBe(i+1)
    }
})

// Fetch (2) docs with keywords containing: |country=turkey|
test('Should fetch 2 Turkey docs sorted by sequence', async () => {
    const pics = await Pic.find({ keywords: /\|country=turkey\|/i })
        .sort('sequence')
    expect(pics).not.toBeNull()
    expect(pics.length).toBe(2)
    expect(pics[0]._id.toString()).toBe(doc001Id.toString())
})
