const Pic = require('../src/models/picModel')
require('../src/db/mongoose')

const fetchMultiplePicsByDescriptionLike = async (descriptionLike) => {
    try {
        const pics = await Pic.find({ desc: descriptionLike})
        console.log(`For descriptionLike of '${descriptionLike}', # of docs feteched is ${pics.length}`)
    } catch (error) {
        console.log(error)
    }
}

const fetchMultiplePicsByMimetypeAndFilenameLike = async (mimetype, filenameLike) => {
    try {
        const pics = await Pic.find({ mimetype: mimetype, filename: filenameLike})
        console.log(`For mimetype of "${mimetype}" and filenameLike of ${filenameLike}, # of docs feteched is ${pics.length}`)
    } catch (error) {
        console.log(error)
    }
}

/*
Sample DB documents used for this test
	{
	_id: ObjectId
	mimetype: "image/jpeg"
	filename: "profile-pic.jpg"
	desc "hard coded test picture"
	}
	{
	_id: ObjectId
	mimetype: "image/jpeg"
	filename: "profile-pic.jpg"
	desc: "test picture"
	}
	{
	_id: ObjectId
	mimetype: "image/jpeg"
	filename: "IMG_3294.jpg"
	desc: "Istanbul airport"
	}
*/

// In the function calls below,
// /Picture/i means look for a match with the substring 'Picture', ignoring case
// /istanbul/i means look for a match with the substring 'istanbul', ignoring case
// /pic/i means look for a match with the substring 'pic', ignoring case
fetchMultiplePicsByDescriptionLike(/Picture/i);
fetchMultiplePicsByDescriptionLike(/istanbul/i)
fetchMultiplePicsByMimetypeAndFilenameLike('image/jpeg', /pic/i) 

/* Here is the output produced by running this test script file:

$ npm run dbtest
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edu@1.0.0 dbtest
> env-cmd -f ./config/dev.env node test/testMultiDocFetch.js

Established mongoose connection to:  127.0.0.1
For mimetype of "image/jpeg" and filenameLike of /pic/i, # of docs feteched is 2
For descriptionLike of '/Picture/i', # of docs feteched is 2
For descriptionLike of '/istanbul/i', # of docs feteched is 1

*/
